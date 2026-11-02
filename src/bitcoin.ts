import ECPairFactory from "ecpair";
import * as bitcoin from "bitcoinjs-lib";
import * as ecc from "tiny-secp256k1";

const ECPair = ECPairFactory(ecc);

/** Order n of the secp256k1 group: valid private keys are 1 <= k < n. */
export const SECP256K1_ORDER = BigInt(
  "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
);

/** Hard ceiling on the miner fee a built transaction may carry (0.005 BTC). */
export const MAX_FEE_SATOSHIS = 500_000;

/**
 * Validates whether a string is a valid mainnet Bitcoin address
 * (verifies Base58Check or Bech32/Bech32m checksum via bitcoinjs-lib).
 */
export const isValidBitcoinAddress = (addr: string): boolean => {
  const trimmed = addr.trim();
  if (!trimmed || trimmed.length < 25 || trimmed.length > 90) return false;
  try {
    bitcoin.address.toOutputScript(trimmed, bitcoin.networks.bitcoin);
    return true;
  } catch {
    return false;
  }
};

/**
 * Gera um endereço P2PKH (comprimido) Bitcoin a partir de uma chave privada em hex.
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

export const random32Byte = (): string => {
  if (typeof window === "object" && window.crypto?.getRandomValues) {
    const randomBytes = new Uint8Array(32);
    window.crypto.getRandomValues(randomBytes);

    let hexString = "";
    for (let i = 0; i < randomBytes.length; i++) {
      hexString += randomBytes[i].toString(16).padStart(2, "0");
    }
    return hexString;
  }
  throw new Error("Secure Web Crypto API is required");
};

export const random32ByteRange = (min: string, max: string): string => {
  const bmin = BigInt("0x" + min);
  const bmax = BigInt("0x" + max);

  const range = bmax - bmin + 1n;
  if (range <= 0n) return bmin.toString(16);

  const random = random32Byte();
  const brandom = BigInt("0x" + random);

  const result = bmin + (brandom % range);
  return result.toString(16);
};

export const findPrivateKey = async (
  start: string,
  goalAddress: string,
  batchSize = 50000,
  maxKey?: string
) => {
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

export const toWIF = (privCoin: string): string => {
  const wif = ECPair.fromPrivateKey(
    Buffer.from(privCoin.padStart(64, "0"), "hex")
  ).toWIF();
  return wif;
};

/**
 * Testa N chaves 100% aleatórias dentro do range especificado (modo infinito).
 */
export const findOneRandomBatch = (
  goalAddress: string,
  rangeStart: string,
  rangeEnd: string,
  batchSize = 1000
): { success: boolean; privateKey?: bigint; triedKey?: string } => {
  let lastKeyHex = "";
  for (let i = 0; i < batchSize; i++) {
    const keyHex = random32ByteRange(rangeStart, rangeEnd);
    lastKeyHex = keyHex;
    const address = generate_address_from_priv(keyHex);
    if (address === goalAddress) {
      return {
        success: true,
        privateKey: BigInt("0x" + keyHex),
        triedKey: keyHex,
      };
    }
  }
  return { success: false, triedKey: lastKeyHex };
};

/** Derives the P2PKH address from a WIF or HEX private key. */
export const deriveFromKey = (
  key: string
): { address: string; pubkeyHex: string } => {
  const trimmed = key.trim();
  let keyPair;
  if (/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(trimmed)) {
    keyPair = ECPair.fromWIF(trimmed, bitcoin.networks.bitcoin);
  } else if (/^[0-9a-fA-F]{1,64}$/.test(trimmed)) {
    keyPair = ECPair.fromPrivateKey(
      Buffer.from(trimmed.padStart(64, "0"), "hex"),
      { compressed: true }
    );
  } else {
    throw new Error("Invalid WIF or HEX private key format");
  }
  const { address } = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keyPair.publicKey),
    network: bitcoin.networks.bitcoin,
  });
  return {
    address: address!,
    pubkeyHex: Buffer.from(keyPair.publicKey).toString("hex"),
  };
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
 */
export const buildRawTransaction = (params: TxParams): string => {
  const {
    txid,
    vout,
    amountSatoshis,
    spendSatoshis,
    destAddress,
    feeSatoshis,
    privateKey,
    changeAddress,
  } = params;
  const network = bitcoin.networks.bitcoin;

  const trimmedKey = privateKey.trim();
  let keyPair;
  if (/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(trimmedKey)) {
    keyPair = ECPair.fromWIF(trimmedKey, network);
  } else if (/^[0-9a-fA-F]{1,64}$/.test(trimmedKey)) {
    keyPair = ECPair.fromPrivateKey(
      Buffer.from(trimmedKey.padStart(64, "0"), "hex"),
      { compressed: true }
    );
  } else {
    throw new Error("Invalid private key format");
  }

  if (
    !Number.isInteger(amountSatoshis) ||
    !Number.isInteger(spendSatoshis) ||
    !Number.isInteger(feeSatoshis) ||
    amountSatoshis <= 0 ||
    spendSatoshis <= 0 ||
    feeSatoshis <= 0
  )
    throw new Error("Amounts must be positive integer satoshi values");
  if (feeSatoshis > MAX_FEE_SATOSHIS)
    throw new Error(
      `Fee ${feeSatoshis} sats exceeds the safety ceiling of ${MAX_FEE_SATOSHIS} sats`
    );
  const changeValue = amountSatoshis - spendSatoshis - feeSatoshis;
  if (changeValue < 0)
    throw new Error("Insufficient UTXO amount for spend + fee");
  if (spendSatoshis < 546)
    throw new Error("Destination amount is dust (below 546 satoshis)");

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

  const sigHash = tx.hashForSignature(
    0,
    p2pkh.output!,
    bitcoin.Transaction.SIGHASH_ALL
  );
  const rawSig = keyPair.sign(sigHash);
  const derSig = bitcoin.script.signature.encode(
    Buffer.from(rawSig),
    bitcoin.Transaction.SIGHASH_ALL
  );

  const scriptSig = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keyPair.publicKey),
    signature: derSig,
    network,
  }).input!;

  tx.setInputScript(0, scriptSig);
  return tx.toHex();
};

/* ═══════════════════════════════════════════════════════════════════
   KEY ANATOMY — Educational Cryptographic Pipeline Functions
   ═══════════════════════════════════════════════════════════════════ */

export interface KeyInfo {
  privateKeyHex: string;
  wif: string;
  publicKeyHexUncompressed: string;
  publicKeyHexCompressed: string;
  sha256Pubkey: string;
  hash160: string;
  addressLegacy: string;
}

export function generateKeyInfo(hexPrivateKey: string): KeyInfo | null {
  try {
    const cleanHex = hexPrivateKey.trim().replace(/^0x/i, "");
    if (!cleanHex || !/^[0-9a-fA-F]{1,64}$/.test(cleanHex)) {
      return null;
    }
    const paddedHex = cleanHex.padStart(64, "0").toLowerCase();
    const pkBuffer = Buffer.from(paddedHex, "hex");
    if (!ecc.isPrivate(pkBuffer)) {
      return null;
    }
    const keyPair = ECPair.fromPrivateKey(pkBuffer, {
      compressed: true,
      network: bitcoin.networks.bitcoin,
    });
    const keyPairUncompressed = ECPair.fromPrivateKey(pkBuffer, {
      compressed: false,
      network: bitcoin.networks.bitcoin,
    });
    const wif = keyPair.toWIF();
    const pubKeyCompressed = Buffer.from(keyPair.publicKey);
    const sha256Pub = bitcoin.crypto.sha256(pubKeyCompressed);
    const hash160Buf = bitcoin.crypto.ripemd160(sha256Pub);
    const { address } = bitcoin.payments.p2pkh({
      pubkey: pubKeyCompressed,
      network: bitcoin.networks.bitcoin,
    });

    return {
      privateKeyHex: paddedHex,
      wif,
      publicKeyHexUncompressed: Buffer.from(
        keyPairUncompressed.publicKey
      ).toString("hex"),
      publicKeyHexCompressed: pubKeyCompressed.toString("hex"),
      sha256Pubkey: Buffer.from(sha256Pub).toString("hex"),
      hash160: Buffer.from(hash160Buf).toString("hex"),
      addressLegacy: address || "",
    };
  } catch {
    return null;
  }
}

export function generateKeyInfoFromWIF(wif: string): KeyInfo | null {
  try {
    const trimmed = wif.trim();
    if (!/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(trimmed)) {
      return null;
    }
    const keyPair = ECPair.fromWIF(trimmed, bitcoin.networks.bitcoin);
    if (!keyPair.privateKey) return null;
    return generateKeyInfo(Buffer.from(keyPair.privateKey).toString("hex"));
  } catch {
    return null;
  }
}

export function generateKeyInfoFromPublicKey(
  hexPublicKey: string
): KeyInfo | null {
  try {
    const cleanHex = hexPublicKey.trim().replace(/^0x/i, "").toLowerCase();
    if (!/^(02|03)[0-9a-f]{64}$/.test(cleanHex) && !/^04[0-9a-f]{128}$/.test(cleanHex)) {
      return null;
    }
    const pubKeyBuffer = Buffer.from(cleanHex, "hex");
    if (!ecc.isPoint(pubKeyBuffer)) {
      return null;
    }
    const compressedPoint = Buffer.from(ecc.pointCompress(pubKeyBuffer, true));
    const uncompressedPoint = Buffer.from(ecc.pointCompress(pubKeyBuffer, false));
    const sha256Pub = bitcoin.crypto.sha256(compressedPoint);
    const hash160Buf = bitcoin.crypto.ripemd160(sha256Pub);
    const { address } = bitcoin.payments.p2pkh({
      pubkey: compressedPoint,
      network: bitcoin.networks.bitcoin,
    });

    return {
      privateKeyHex: "?",
      wif: "?",
      publicKeyHexUncompressed: uncompressedPoint.toString("hex"),
      publicKeyHexCompressed: compressedPoint.toString("hex"),
      sha256Pubkey: Buffer.from(sha256Pub).toString("hex"),
      hash160: Buffer.from(hash160Buf).toString("hex"),
      addressLegacy: address || "",
    };
  } catch {
    return null;
  }
}

export function generateKeyInfoFromSHA256(hexSha256: string): KeyInfo | null {
  try {
    const cleanHex = hexSha256.trim().replace(/^0x/i, "").toLowerCase();
    if (!/^[0-9a-f]{64}$/.test(cleanHex)) {
      return null;
    }
    const shaBuf = Buffer.from(cleanHex, "hex");
    const hash160Buf = bitcoin.crypto.ripemd160(shaBuf);
    const { address } = bitcoin.payments.p2pkh({
      hash: hash160Buf,
      network: bitcoin.networks.bitcoin,
    });

    return {
      privateKeyHex: "?",
      wif: "?",
      publicKeyHexUncompressed: "?",
      publicKeyHexCompressed: "?",
      sha256Pubkey: cleanHex,
      hash160: Buffer.from(hash160Buf).toString("hex"),
      addressLegacy: address || "",
    };
  } catch {
    return null;
  }
}

export function generateKeyInfoFromHash160(hexHash160: string): KeyInfo | null {
  try {
    const cleanHex = hexHash160.trim().replace(/^0x/i, "").toLowerCase();
    if (!/^[0-9a-f]{40}$/.test(cleanHex)) {
      return null;
    }
    const hash160Buf = Buffer.from(cleanHex, "hex");
    const { address } = bitcoin.payments.p2pkh({
      hash: hash160Buf,
      network: bitcoin.networks.bitcoin,
    });

    return {
      privateKeyHex: "?",
      wif: "?",
      publicKeyHexUncompressed: "?",
      publicKeyHexCompressed: "?",
      sha256Pubkey: "?",
      hash160: cleanHex,
      addressLegacy: address || "",
    };
  } catch {
    return null;
  }
}

export function generateKeyInfoFromAddress(addressStr: string): KeyInfo | null {
  try {
    const trimmed = addressStr.trim();
    const decoded = bitcoin.address.fromBase58Check(trimmed);
    if (decoded.version !== bitcoin.networks.bitcoin.pubKeyHash) {
      return null;
    }
    const hash160Hex = Buffer.from(decoded.hash).toString("hex");
    return {
      privateKeyHex: "?",
      wif: "?",
      publicKeyHexUncompressed: "?",
      publicKeyHexCompressed: "?",
      sha256Pubkey: "?",
      hash160: hash160Hex,
      addressLegacy: trimmed,
    };
  } catch {
    return null;
  }
}
