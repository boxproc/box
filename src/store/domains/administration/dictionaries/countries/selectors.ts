import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDefaultDictionaryCountriesItems = (state: StoreState) =>
  state.administration.countries.countries.asMutable();

export const selectDictionaryCountries = createSelector(
  selectDefaultDictionaryCountriesItems,
  items => items && items.map(item => {
    return {
      countryCode: item.country_code,
      numericCode: item.numeric_code,
      name: item.name,
    };
  })
);

export const selectCountryCodesOptions = createSelector(
  selectDefaultDictionaryCountriesItems,
  data => data && data.map(code => {
    const { country_code, name } = code;

    return {
      value: country_code,
      label: `${country_code} - ${name}`,
    };
  })
);

export const selectIsCountryCodesLoaded =
  createSelector(
    selectDefaultDictionaryCountriesItems,
    countryCodes => {
      return countryCodes && countryCodes.length > 0;
    });
