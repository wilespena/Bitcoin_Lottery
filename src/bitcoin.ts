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

export const findPrivateKey = async (start: string, goalAddress: string) => {
  let privateKey = BigInt("0x" + start);
  for (let i = 0; i < 50000; i++) {
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
