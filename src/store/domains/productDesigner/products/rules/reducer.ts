import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TProductRulesAction } from './actionTypes';
import { IProductRulesState } from './types';

export const productRulesInitialState: ImmutableObject<IProductRulesState> = Immutable({
  currentProductRule: null,
});

const productRulesReducer = (state = productRulesInitialState, action: TProductRulesAction) => {
  switch (action.type) {
    case ActionTypeKeys.GET_PRODUCT_RULE_FULFILLED:
      return state.set('currentProductRule', action.payload.product_rule);

    default: return state;
  }
};

export default productRulesReducer;
