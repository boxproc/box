import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { stringsUtil } from 'utils';

export const selectDefaultDictionaryCurrenciesItems = (state: StoreState) =>
  state.administration.currencies.currencies.asMutable();

export const selectDictionaryCurrencies = createSelector(
  selectDefaultDictionaryCurrenciesItems,
  items => items && items.map(item => {
    if (!item) {
      return null;
    }

    return {
      numericCode: stringsUtil.padStartN(item.numeric_code, 3),
      currencyCode: item.currency_code,
      name: item.name,
    };
  })
);

export const selectCurrencyCodesOptions = createSelector(
  selectDefaultDictionaryCurrenciesItems,
  data => data && data.map(code => {
    const { currency_code, name } = code;

    return {
      value: currency_code,
      label: `${currency_code} - ${name}`,
    };
  })
);

export const selectCurrencyNumCodesOptions = createSelector(
  selectDefaultDictionaryCurrenciesItems,
  data => data && data.map(code => {
    const { currency_code, name, numeric_code } = code;

    return {
      value: numeric_code,
      label: `${currency_code} - ${name}`,
    };
  })
);

export const selectIsCurrencyCodesLoaded =
  createSelector(
    selectDefaultDictionaryCurrenciesItems,
    currencyCodes => {
      return currencyCodes && currencyCodes.length > 0;
    });
