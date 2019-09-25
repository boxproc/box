import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDefaultAdminCurrenciesItems = (state: StoreState) =>
  state.administration.currencies.currencies.asMutable();

export const selectAdminCurrencies = createSelector(
  selectDefaultAdminCurrenciesItems,
  items => items && items.map(item => {
    return {
      currencyCode: item.currency_code,
      numericCode: item.numeric_code,
      name: item.name,
    };
  })
);
