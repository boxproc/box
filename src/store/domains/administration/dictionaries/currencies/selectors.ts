import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDefaultDictionaryCurrenciesItems = (state: StoreState) =>
  state.administration.currencies.currencies.asMutable();

export const selectDictionaryCurrencies = createSelector(
  selectDefaultDictionaryCurrenciesItems,
  items => items && items.map(item => {
    return {
      currencyCode: item.currency_code,
      numericCode: item.numeric_code,
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

export const selectIsCurrencyCodesLoaded =
  createSelector(
    selectDefaultDictionaryCurrenciesItems,
    currencyCodes => {
      return currencyCodes && currencyCodes.length > 0;
    });
