import { getJupiter, connection, wallet } from './config/jupiter';
import { logger } from './utils/logger';

(async () => {
  logger.start("Iniciando sniper bot...");

  const jupiter = await getJupiter();
  logger.success("Conectado ao Jupiter Aggregator");

  const inputMint = "So11111111111111111111111111111111111111112"; // SOL
  const outputMint = "EPjFWdd5AufqSSqeM2qMJ1xzY1P6Gp9Yz"; // USDC

  try {
    const routes = await jupiter.computeRoutes({
      inputMint,
      outputMint,
      amount: 1000000, // 0.001 SOL (em lamports)
      slippage: 1,     // 1% de tolerância
    });

    if (!routes.routesInfos || routes.routesInfos.length === 0) {
      logger.warn("Nenhuma rota encontrada.");
      return;
    }

    const { execute } = await jupiter.exchange({
      routeInfo: routes.routesInfos[0],
    });

    const txid = await execute();
    logger.success(`Swap realizado! TXID: ${txid}`);
  } catch (error) {
    logger.error(`Erro ao executar sniper: ${error}`);
  }
})();
