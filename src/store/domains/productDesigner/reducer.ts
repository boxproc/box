import { combineReducers } from 'redux-seamless-immutable';

import cyclesEditorReducer from './cycles/reducer';
import productsReducer from './products/reducer';

const productDesignerReducer = combineReducers({
  cyclesEditor: cyclesEditorReducer,
  products: productsReducer,
});

export default productDesignerReducer;
