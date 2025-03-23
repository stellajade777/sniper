import { getJupiter, connection, wallet } from './config/jupiter';

(async () => {
  console.log("🚀 Iniciando sniper bot...");

  const jupiter = await getJupiter();
  console.log("✅ Conectado ao Jupiter Aggregator");

  const inputMint = "So11111111111111111111111111111111111111112"; // SOL
  const outputMint = "EPjFWdd5AufqSSqeM2qMJ1xzY1P6Gp9Yz"; // USDC

  const routes = await jupiter.computeRoutes({
    inputMint,
    outputMint,
    amount: 1000000, // 0.001 SOL
    slippage: 1, // 1% de tolerância
  });

  if (routes.routesInfos.length === 0) {
    console.log("❌ Nenhuma rota encontrada.");
    return;
  }

  const { execute } = await jupiter.exchange({
    routeInfo: routes.routesInfos[0],
  });

  const txid = await execute();
  console.log("✅ Swap realizado! TXID:", txid);
})();
