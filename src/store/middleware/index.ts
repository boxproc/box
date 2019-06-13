import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import config from 'config';

const createMiddleware = (history: History) => {
  const middleware = [
    thunk,
    promiseMiddleware,
    routerMiddleware(history),
  ];

  if (config.isDevelopment) {
    const logger = createLogger();
    middleware.push(logger);
  }

  return middleware;
};

export default createMiddleware;
