import { createSelector } from 'reselect';

import { debitCreditIndicatorOptions } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectDefaultDictionaryTransactionTypesItems = (state: StoreState) =>
  state.administration.transactionTypes.transactionTypes.asMutable();

export const selectDictionaryTransactionTypes = createSelector(
  selectDefaultDictionaryTransactionTypesItems,
  items => items && items.map(item => {
    const debitCreditIndicator = debitCreditIndicatorOptions
      .find(el => el.value === item.debit_credit_indicator);

    return {
      id: item.id,
      description: item.description,
      debitCreditIndicator: debitCreditIndicator.label,
    };
  })
);

export const selectDictionaryTransactionTypesOptions = createSelector(
  selectDictionaryTransactionTypes,
  items => items && items.map(item => {
    return {
      value: item.id,
      label: `${item.debitCreditIndicator} - ${item.description}`,
    };
  })
);

export const selectIsTransactionTypesLoaded = createSelector(
  selectDefaultDictionaryTransactionTypesItems,
  countryCodes => countryCodes && countryCodes.length > 0
);
