const {
  NODE_ENV: mode = 'production',
} = process.env;

const environment = {
  development: {
    isDevelopment: true,
  },
  production: {
    isDevelopment: false,
  },
}[mode];

interface Config {
  isDevelopment: boolean;
  apiUrl: string;
  apiHost: string;
}

let config: Config;
let envConfig;

const app = {};

try {
  envConfig = require(`./${mode}`);
  config = { ...app, ...environment, ...envConfig.default };
} catch (e) {
  throw new Error('INVALID CONFIG FILE');
}

export default Object.freeze(config);
