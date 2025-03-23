import { Jupiter, RouteInfo } from '@jup-ag/core';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { carregarWallet } from '../gerarWallet';

const RPC_URL = clusterApiUrl('mainnet-beta');
export const connection = new Connection(RPC_URL, 'confirmed');
export const wallet = carregarWallet();

let jupiterInstance: Jupiter | null = null;

export async function getJupiter(): Promise<Jupiter> {
  if (!jupiterInstance) {
    jupiterInstance = await Jupiter.load({
      connection,
      cluster: 'mainnet-beta',
      user: wallet.publicKey,
    });
  }

  return jupiterInstance;
}
