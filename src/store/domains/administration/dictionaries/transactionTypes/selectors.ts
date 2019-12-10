import { createSelector } from 'reselect';

import { debitCreditIndicatorCodes, debitCreditIndicatorOptions } from 'consts';

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
      debitCreditIndicatorValue: debitCreditIndicator.value,
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

export const selectDictionaryManualTransactionTypesOptions = createSelector(
  selectDictionaryTransactionTypes,
  transactionTypes => {
    const items = transactionTypes
      .filter(type => type.debitCreditIndicatorValue === debitCreditIndicatorCodes.DEBIT
        || type.debitCreditIndicatorValue === debitCreditIndicatorCodes.CREDIT);

    return items && items.map(item => {
      return {
        value: item.id,
        label: `${item.description} - [${item.debitCreditIndicator}]`,
      };
    });
  }
);

export const selectDictionaryManualTransactionLimitAdjustmentTypesOptions = createSelector(
  selectDictionaryTransactionTypes,
  transactionTypes => {
    const items = transactionTypes.filter(type => type.id === 14);

    return items && items.map(item => {
      return {
        value: item.id,
        label: `${item.description} - [${item.debitCreditIndicator}]`,
      };
    });
  });

export const selectIsTransactionTypesLoaded = createSelector(
  selectDefaultDictionaryTransactionTypesItems,
  countryCodes => countryCodes && countryCodes.length > 0
);
