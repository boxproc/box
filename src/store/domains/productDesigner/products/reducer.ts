import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  currentProductId: null,
  currentProduct: null,
  currentProductDetails: null,
  currentProductRules: Immutable([]),
  currentRulesCode: null,
  currentProductRule: null,
  filterProductsParams: null,
  institutionProducts: Immutable([]),
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products);

      case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
        return state
          .set(
            'products',
            state.products.filter(el => el.id !== action.meta)
          );

      case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products)
          .set('filterProductsParams', action.meta);

      case ActionTypeKeys.GET_PRODUCT_ID:
        return state
          .set('currentProductId', action.payload);

      case ActionTypeKeys.GET_PRODUCT_FULFILLED:
        return state
          .set('currentProduct', action.payload.product);

      case ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED:
        return state
          .set('currentProductDetails', action.payload.product);

      case ActionTypeKeys.GET_PRODUCT_RULES_FULFILLED:
        return state
          .set('currentProductRules', action.payload.product_rules)
          .set(
            'currentRulesCode',
            action.payload.product_rules.length && action.payload.product_rules[0].script
          );

      case ActionTypeKeys.SET_RULES_CODE:
        return state
          .set('currentRulesCode', action.payload);

      case ActionTypeKeys.GET_RULE_BY_EVENT:
        const currentRuleByEvent =
          state.currentProductRules.find(el => el.event_id === action.payload);
        return state
          .set('currentProductRule', currentRuleByEvent ? currentRuleByEvent : null)
          .set('currentRulesCode', currentRuleByEvent && currentRuleByEvent.script);

      case ActionTypeKeys.GET_RULE_BY_ACTION_TYPE:
        const currentRuleByActionType =
          state.currentProductRules.find(el => el.action_type === action.payload);
        return state
          .set('currentProductRule', currentRuleByActionType ? currentRuleByActionType : null)
          .set('currentRulesCode', currentRuleByActionType && currentRuleByActionType.script);

      case ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED:
        return state
          .set('institutionProducts', action.payload.institution_products);

      default: return state;
    }
  };

export default productsReducer;
