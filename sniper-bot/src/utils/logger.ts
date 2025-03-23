import chalk from 'chalk';
    console.log(`✅ ${msg}`);
}

export function logErro(msg: string) {
    console.error(`❌ ${msg}`);
}

export function logInfo(msg: string) {
    console.log(`ℹ️ ${msg}`);
}

export const logger = {
  info: (message: string) => {
    console.log(chalk.blue("ℹ️  INFO:"), message);
  },

  success: (message: string) => {
    console.log(chalk.green("✅ SUCESSO:"), message);
  },

  warn: (message: string) => {
    console.log(chalk.yellow("⚠️  AVISO:"), message);
  },

  error: (message: string) => {
    console.error(chalk.red("❌ ERRO:"), message);
  },

  start: (message: string) => {
    console.log(chalk.magenta("🚀 INICIANDO:"), message);
  }
};



