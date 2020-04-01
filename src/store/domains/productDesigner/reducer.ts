import { combineReducers } from 'redux-seamless-immutable';

import productAprsFeesRewardsReducer from './products/aprsFeesRewards/reducer';
import productIllustrationReducer from './products/illustration/reducer';
import productsReducer from './products/products/reducer';
import repaymentHierarchyReducer from './products/repaymentHierarchy/reducer';
import productRulesReducer from './products/rules/reducer';
import productServicesReducer from './products/services/reducer';

const productDesignerReducer = combineReducers({
  products: productsReducer,
  productRules: productRulesReducer,
  productServices: productServicesReducer,
  productIllustration: productIllustrationReducer,
  productAprsFeesRewards: productAprsFeesRewardsReducer,
  repaymentHierarchy: repaymentHierarchyReducer,
});

export default productDesignerReducer;
