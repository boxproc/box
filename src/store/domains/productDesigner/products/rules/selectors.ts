import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { dictionaryEventsOptionsSelector } from 'store/domains/admin';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareRuleToRender } from './utils';

export const defaultCurrentProductRuleSelector = (state: IStoreState) =>
  state.productDesigner.productRules.currentProductRule;

export const currentProductRuleSelector = createSelector(
  defaultCurrentProductRuleSelector,
  dictionaryEventsOptionsSelector,
  (currentRule, events) => {
    if (!currentRule) {
      return null;
    }

    return {
      ...prepareRuleToRender(currentRule),
      eventId: events && events.find(el => el.value === currentRule.event_id),
    };
  }
);

export const currentProductScriptSelector = createSelector(
  currentProductRuleSelector,
  data => data && data.script
);

/**
 * Product rules loading selectors
 */

export const isProductRuleLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT_RULE,
  ActionTypeKeys.UPDATE_PRODUCT_RULE,
]);
