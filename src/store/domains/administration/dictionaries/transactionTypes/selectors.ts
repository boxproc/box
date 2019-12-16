import { createSelector } from 'reselect';

import {
  debitCreditIndicatorCodes,
  debitCreditIndicatorIds,
  debitCreditIndicatorOptions,
} from 'consts';

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
      debitCreditIndicatorValue: debitCreditIndicator.value,
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

export const selectDictionaryLimitAdjustmentTypesOptions = createSelector(
  selectDictionaryTransactionTypes,
  transactionTypes => {
    const limitAdjustmentItem = transactionTypes
      .find(type => type.id === debitCreditIndicatorIds.LIMIT_ADJUSTMENT);

    return limitAdjustmentItem && [limitAdjustmentItem].map(item => {
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
