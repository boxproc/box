import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux-seamless-immutable';

import administrationReducer from './domains/administration/reducer';
import loaderReducer from './domains/loader/reducer';
import modalsReducer from './domains/modals/reducer';
import uiItemsReducer from './domains/uiItems/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  form: formReducer,

  loader: loaderReducer,
  modals: modalsReducer,
  uiItems: uiItemsReducer,
  administration: administrationReducer,
});

export default createRootReducer;
