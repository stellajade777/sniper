import { Keypair } from "@solana/web3.js";
import "dotenv/config";

export function carregarWallet(): Keypair {
  const secretKeyEnv = process.env.PRIVATE_KEY;

  if (!secretKeyEnv) {
    throw new Error("PRIVATE_KEY não encontrada no arquivo .env");
  }

  const secretKeyArray = JSON.parse(secretKeyEnv) as number[];
  const secretKey = Uint8Array.from(secretKeyArray);
  return Keypair.fromSecretKey(secretKey);
}
