import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductIllustrationActionTypes } from './actionTypes';
import { ProductIllustrationState } from './types';

export const productIllustrationInitialState: ImmutableObject<ProductIllustrationState> =
  Immutable({
    productIllustration: Immutable([]),
    productRevolvingCreditIllustration: {
      statements: Immutable([]),
      aprs: Immutable([]),
      rewards: Immutable([]),
      fees: Immutable([]),
      transactions: Immutable([]),
    },
  });

const productIllustrationReducer =
  (state = productIllustrationInitialState, action: ProductIllustrationActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN_FULFILLED:
        return state.set('productIllustration', action.payload.product_information);

      case ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED:
        return state.set(
          'productRevolvingCreditIllustration',
          action.payload.revolving_credit_information
        );

      case ActionTypeKeys.RESET_ILLUSTRATION_LOAN:
        return state.set('productIllustration', Immutable([]));

      default:
        return state;
    }
  };

export default productIllustrationReducer;
