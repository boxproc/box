import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectDefaultDictionaryRepaymentTypesItems = (state: StoreState) =>
  state.administration.repaymentTypes.repaymentTypes;

export const selectDictionaryRepaymentTypesOptions = createSelector(
  selectDefaultDictionaryRepaymentTypesItems,
  items => items && items.asMutable().map(item => {
    return {
      value: item.type,
      label: item.description,
    };
  })
);

export const selectIsRepaymentTypesLoaded = createSelector(
  selectDefaultDictionaryRepaymentTypesItems,
  countryCodes => countryCodes && countryCodes.length > 0
);
