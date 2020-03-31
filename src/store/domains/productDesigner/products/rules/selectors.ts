import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import { dictionaryEventsOptionsSelector } from 'store/domains/admin';
import { prepareProductRuleData } from './utils';

export const selectDefaultCurrentRule = (state: IStoreState) =>
  state.productDesigner.productRules.currentProductRule;

export const selectCurrentProductRule = createSelector(
  selectDefaultCurrentRule,
  dictionaryEventsOptionsSelector,
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
