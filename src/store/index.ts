import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';

import createMiddleware from './middleware';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

const middleware = createMiddleware(history);
const rootReducer = createRootReducer(history);

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
