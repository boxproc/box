import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDefaultAdminCountriesItems = (state: StoreState) =>
  state.administration.countries.countries.asMutable();

export const selectAdminCountries = createSelector(
  selectDefaultAdminCountriesItems,
  items => items && items.map(item => {
    return {
      countryCode: item.country_code,
      numericCode: item.numeric_code,
      name: item.name,
    };
  })
);
