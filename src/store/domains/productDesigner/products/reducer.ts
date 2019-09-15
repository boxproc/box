import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  currentProductRules: Immutable([]),
  institutionProducts: Immutable([]),
  currentProductId: null,
  currentProduct: null,
  currentProductDetails: null,
  currentProductRule: null,
  interfaces: Immutable([]),
  endpoints: Immutable([]),
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
        return state
          .set(
            'products',
            state.products.filter(el => el.id !== action.meta)
          );

      case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products);

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
          .set('currentProductRule', action.payload.product_rules[0])
          .set(
            'currentRulesCode',
            action.payload.product_rules.length
              ? action.payload.product_rules[0].script
              : null
          );

      case ActionTypeKeys.GET_RULE_BY_EVENT:
        const currentRuleByEvent =
          state.currentProductRules.find(el => el.event_id === action.payload);
        return state
          .set(
            'currentProductRule',
            currentRuleByEvent ? currentRuleByEvent : { event_id: action.payload }
          )
          .set(
            'currentRulesCode',
            currentRuleByEvent ? currentRuleByEvent.script : null
          );

      case ActionTypeKeys.GET_RULE_BY_ACTION_TYPE:
        const currentRuleByActionType =
          state.currentProductRules.find(el => el.action_type === action.payload);
        return state
          .set(
            'currentProductRule',
            currentRuleByActionType ? currentRuleByActionType : { action_type: action.payload }
          )
          .set(
            'currentRulesCode',
            currentRuleByActionType ? currentRuleByActionType.script : null
          );

      case ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED:
        return state
          .set('institutionProducts', action.payload.institution_products);

      case ActionTypeKeys.GET_SERVICE_INTERFACES_FULFILLED:
        return state
          .set('interfaces', action.payload.interfaces);

      case ActionTypeKeys.GET_SERVICE_ENDPOINTS_FULFILLED:
        return state
          .set('endpoints', action.payload.endpoints);

      default: return state;
    }
  };

export default productsReducer;
