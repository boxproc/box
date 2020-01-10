import { combineReducers } from 'redux-seamless-immutable';

import productAprsFeesRewardsReducer from './products/aprsFeesRewards/reducer';
import productAuxCountersReducer from './products/auxCounters/reducer';
import productGeneralLedgerReducer from './products/generalLedger/reducer';
import productIllustrationReducer from './products/illustration/reducer';
import productsReducer from './products/products/reducer';
import productRulesReducer from './products/rules/reducer';
import productServicesReducer from './products/services/reducer';

const productDesignerReducer = combineReducers({
  products: productsReducer,
  productRules: productRulesReducer,
  productAuxCounters: productAuxCountersReducer,
  productServices: productServicesReducer,
  productGeneralLedger: productGeneralLedgerReducer,
  productIllustration: productIllustrationReducer,
  productAprsFeesRewards: productAprsFeesRewardsReducer,
});

export default productDesignerReducer;
