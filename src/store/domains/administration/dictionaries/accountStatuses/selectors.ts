import { createSelector } from 'reselect';

import { StoreState } from 'store';

export const selectDefaultDictionaryAccountStatusesItems = (state: StoreState) =>
  state.administration.accountStatuses.accountStatuses;

export const selectDictionaryAccountStatusesOptions = createSelector(
  selectDefaultDictionaryAccountStatusesItems,
  items => items && items.asMutable().map(item => {
    return {
      value: item.status,
      label: item.name,
    };
  })
);

export const selectIsAccountStatusesLoaded = createSelector(
  selectDefaultDictionaryAccountStatusesItems,
  countryCodes => countryCodes && countryCodes.length > 0
);
