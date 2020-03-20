import { createSelector } from 'reselect';

import {
  debitCreditIndicatorConst,
  debitCreditIndicatorIds,
  debitCreditIndicatorOptions,
} from 'consts';

import { StoreState } from 'store';

export const selectDefaultDictionaryTransactionTypes = (state: StoreState) =>
  state.administration.transactionTypes.transactionTypes;

export const selectDictionaryTransactionTypes = createSelector(
  selectDefaultDictionaryTransactionTypes,
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
  items => items && items.asMutable().map(item => {
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
      .filter(type => type.debitCreditIndicatorValue === debitCreditIndicatorConst.DEBIT
        || type.debitCreditIndicatorValue === debitCreditIndicatorConst.CREDIT);

    return items && items.asMutable().map(item => {
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
  selectDefaultDictionaryTransactionTypes,
  countryCodes => countryCodes && countryCodes.length > 0
);

export const selectTransactionTypesForRules = createSelector(
  selectDefaultDictionaryTransactionTypes,
  types => types && types.map(type => {

    return {
      name: type.id,
      description: type.description,
    };
  })
);
