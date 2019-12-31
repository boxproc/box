import { combineReducers } from 'redux-seamless-immutable';

import productsReducer from './products/reducer';

const productDesignerReducer = combineReducers({
  products: productsReducer,
});

export default productDesignerReducer;
