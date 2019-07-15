import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux-seamless-immutable';

import administrationReducer from './domains/administration/reducer';
import authReducer from './domains/auth/reducer';
import constsReducer from './domains/consts/reducer';
import loaderReducer from './domains/loader/reducer';
import modalsReducer from './domains/modals/reducer';
import productDesignerReducer from './domains/productDesigner/reducer';
import uiItemsReducer from './domains/uiItems/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  form: formReducer,

  loader: loaderReducer,
  auth: authReducer,
  modals: modalsReducer,
  uiItems: uiItemsReducer,
  administration: administrationReducer,
  productDesigner: productDesignerReducer,
  consts: constsReducer,
});

export default createRootReducer;
