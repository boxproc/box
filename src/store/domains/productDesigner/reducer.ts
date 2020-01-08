import { combineReducers } from 'redux-seamless-immutable';

import productAuxCountersReducer from './products/auxCounters/reducer';
import productsReducer from './products/products/reducer';
import productRulesReducer from './products/rules/reducer';
import productServicesReducer from './products/services/reducer';

const productDesignerReducer = combineReducers({
  products: productsReducer,
  productRules: productRulesReducer,
  productAuxCounters: productAuxCountersReducer,
  productServices: productServicesReducer,
});

export default productDesignerReducer;
