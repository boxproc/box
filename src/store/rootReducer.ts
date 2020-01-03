import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux-seamless-immutable';

import administrationReducer from './domains/administration/reducer';
import auditReducer from './domains/audit/reducer';
import ledgerReducer from './domains/ledger/reducer';
import loaderReducer from './domains/loader/reducer';
import loginReducer from './domains/login/reducer';
import modalsReducer from './domains/modals/reducer';
import productDesignerReducer from './domains/productDesigner/reducer';
import uiItemsReducer from './domains/uiItems/reducer';
import utilsReducer from './domains/utils/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  loader: loaderReducer,
  login: loginReducer,
  modals: modalsReducer,
  uiItems: uiItemsReducer,
  administration: administrationReducer,
  productDesigner: productDesignerReducer,
  ledger: ledgerReducer,
  audit: auditReducer,
  utils: utilsReducer,
});

export default createRootReducer;
