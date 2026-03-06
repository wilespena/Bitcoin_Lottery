import ECPairFactory from "ecpair";
import * as bitcoin from "bitcoinjs-lib";
import * as ecc from "tiny-secp256k1";

const ECPair = ECPairFactory(ecc);

/**
 * Gera um endereço P2PKH (comprimido) Bitcoin a partir de uma chave privada em hex.
 * Equivalente à função Rust `generate_address_from_priv` que era compilada para WASM.
 *
 * @param priv_key - Chave privada em hexadecimal (pode ter menos de 64 chars, será padded)
 * @returns Endereço Bitcoin P2PKH mainnet
 */
export const generate_address_from_priv = (priv_key: string): string => {
  const padded = priv_key.padStart(64, "0");
  const privateKeyBytes = Buffer.from(padded, "hex");
  const keyPair = ECPair.fromPrivateKey(privateKeyBytes, { compressed: true });
  const { address } = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin.networks.bitcoin,
  });
  return address!;
};

export const random32Byte = () => {
  if (typeof window === "object" && typeof document === "object") {
    /**
     * Se o usuário está usando um navegador
     */
    const randomBytes = new Uint8Array(32);
    window.crypto.getRandomValues(randomBytes);

    let hexString = "";
    for (let i = 0; i < randomBytes.length; i++) {
      hexString += randomBytes[i].toString(16).padStart(2, "0");
    }
    return hexString;
  } else if (typeof process !== "undefined" && process.versions != null) {
    throw new Error("don't use it on Node.js");
  }
};

export const random32ByteRange = (min: string, max: string) => {
  const bmin = BigInt("0x" + min);
  const bmax = BigInt("0x" + max);

  const range = bmax - bmin;
  const random = random32Byte(); // gera o número de 32 bytes
  const brandom = BigInt("0x" + random);

  const result = bmin + (brandom % range);
  return result.toString(16);
};

export const findPrivateKey = async (start: string, goalAddress: string, batchSize = 50000, maxKey?: string) => {
  let privateKey = BigInt("0x" + start);
  const limit = maxKey ? BigInt("0x" + maxKey) : null;
  for (let i = 0; i < batchSize; i++) {
    if (limit !== null && privateKey > limit) break;
    const resultAddres = generate_address_from_priv(privateKey.toString(16));
    if (resultAddres === goalAddress)
      return {
        success: true,
        privateKey,
      };

    privateKey++;
  }

  return {
    success: false,
    address: "",
  };
};

export const toWIF = (privCoin: string) => {
  const wif = ECPair.fromPrivateKey(Buffer.from(privCoin, "hex")).toWIF();
  return wif;
};

/**
 * Testa N chaves 100% aleatórias dentro do range especificado (modo infinito).
 * Diferente do findPrivateKey que é sequencial, cada chave aqui é gerada de
 * forma independente via window.crypto — pura sorte a cada tentativa.
 *
 * @param goalAddress - Endereço Bitcoin alvo
 * @param rangeStart  - Hex do início do range (sem 0x)
 * @param rangeEnd    - Hex do fim do range (sem 0x)
 * @param batchSize   - Quantas chaves aleatórias testar neste lote
 */
export const findOneRandomBatch = (
  goalAddress: string,
  rangeStart: string,
  rangeEnd: string,
  batchSize = 1000
): { success: boolean; privateKey?: bigint; triedKey?: string } => {
  for (let i = 0; i < batchSize; i++) {
    const keyHex = random32ByteRange(rangeStart, rangeEnd);
    const address = generate_address_from_priv(keyHex);
    if (address === goalAddress) {
      return { success: true, privateKey: BigInt("0x" + keyHex), triedKey: keyHex };
    }
  }
  return { success: false };
};

/** Derives the P2PKH address from a WIF or HEX private key. */
export const deriveFromKey = (key: string): { address: string; pubkeyHex: string } => {
  let keyPair;
  if (/^[5KL]/.test(key)) {
    keyPair = ECPair.fromWIF(key, bitcoin.networks.bitcoin);
  } else {
    keyPair = ECPair.fromPrivateKey(Buffer.from(key.padStart(64, "0"), "hex"), { compressed: true });
  }
  const { address } = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin.networks.bitcoin,
  });
  return { address: address!, pubkeyHex: Buffer.from(keyPair.publicKey).toString("hex") };
};

export interface TxParams {
  txid: string;
  vout: number;
  amountSatoshis: number;
  spendSatoshis: number;
  destAddress: string;
  feeSatoshis: number;
  privateKey: string;
  changeAddress: string;
}

/**
 * Builds and signs a raw P2PKH Bitcoin transaction.
 * Does NOT require the full previous transaction hex —
 * uses bitcoinjs-lib's Transaction class for manual scriptSig construction.
 */
export const buildRawTransaction = (params: TxParams): string => {
  const { txid, vout, amountSatoshis, spendSatoshis, destAddress, feeSatoshis, privateKey, changeAddress } = params;
  const network = bitcoin.networks.bitcoin;

  let keyPair;
  if (/^[5KL]/.test(privateKey)) {
    keyPair = ECPair.fromWIF(privateKey, network);
  } else {
    keyPair = ECPair.fromPrivateKey(Buffer.from(privateKey.padStart(64, "0"), "hex"), { compressed: true });
  }

  const changeValue = amountSatoshis - spendSatoshis - feeSatoshis;
  if (changeValue < 0) throw new Error("Insufficient UTXO amount for spend + fee");
  if (spendSatoshis < 546) throw new Error("Destination amount is dust (below 546 satoshis)");

  const tx = new bitcoin.Transaction();
  tx.version = 2;

  // txid must be reversed (Bitcoin wire format is little-endian)
  const txidBytes = Buffer.from(txid, "hex").reverse();
  tx.addInput(txidBytes, vout, 0xfffffffe);

  // Output 1: Destinatário
  const destScript = bitcoin.address.toOutputScript(destAddress, network);
  tx.addOutput(destScript, spendSatoshis);

  // Output 2: Troco (se houver mais que o limite de poeira)
  if (changeValue >= 546 && changeAddress) {
    const changeScript = bitcoin.address.toOutputScript(changeAddress, network);
    tx.addOutput(changeScript, changeValue);
  }

  // P2PKH scriptPubKey of the INPUT address (needed to generate the sighash)
  const p2pkh = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network,
  });

  const sigHash = tx.hashForSignature(0, p2pkh.output!, bitcoin.Transaction.SIGHASH_ALL);
  const rawSig = keyPair.sign(sigHash);
  const derSig = bitcoin.script.signature.encode(Buffer.from(rawSig), bitcoin.Transaction.SIGHASH_ALL);

  const scriptSig = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keyPair.publicKey),
    signature: derSig,
    network,
  }).input!;

  tx.setInputScript(0, scriptSig);
  return tx.toHex();
};
