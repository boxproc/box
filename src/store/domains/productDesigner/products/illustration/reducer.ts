import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TIllustrationAction } from './actionTypes';
import { IProductIllustrationState } from './types';

export const productIllustrationInitialState: ImmutableObject<IProductIllustrationState> =
  Immutable({
    loanIllustration: Immutable([]),
    revCreditIllustration: {
      statements: Immutable([]),
      aprs: Immutable([]),
      transactions: Immutable([]),
    },
  });

const productIllustrationReducer =
  (state = productIllustrationInitialState, action: TIllustrationAction) => {
    switch (action.type) {
      case ActionTypeKeys.ILLUSTRATE_LOAN_FULFILLED:
        return state.set('loanIllustration', action.payload.product_information);

      case ActionTypeKeys.ILLUSTRATE_REVOLVING_CREDIT_FULFILLED:
        return state.set('revCreditIllustration', action.payload.revolving_credit_information);

      case ActionTypeKeys.RESET_PRODUCT_ILLUSTRATION:
        return state = productIllustrationInitialState;

      default:
        return state;
    }
  };

export default productIllustrationReducer;
