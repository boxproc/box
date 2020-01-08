import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectDictionaryEventsOptions } from 'store/domains/administration';
import { prepareProductRuleData } from './utils';

export const selectDefaultCurrentRule = (state: StoreState) =>
  state.productDesigner.productRules.currentProductRule;

export const selectCurrentProductRule = createSelector(
  selectDefaultCurrentRule,
  selectDictionaryEventsOptions,
  (currentRule, events) => {
    if (!currentRule) {
      return null;
    }

    return {
      ...prepareProductRuleData(currentRule),
      eventId: events && events.find(el => el.value === currentRule.event_id),
    };
  }
);

export const selectCurrentProductScript = createSelector(
  selectCurrentProductRule,
  rule => rule && rule.script
);
