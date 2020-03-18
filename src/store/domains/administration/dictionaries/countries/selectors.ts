import { createSelector } from 'reselect';
import { StoreState } from 'store';

import { stringsUtil } from 'utils';

export const selectDefaultDictionaryCountriesItems = (state: StoreState) =>
  state.administration.countries.countries;

export const selectDictionaryCountries = createSelector(
  selectDefaultDictionaryCountriesItems,
  items => items && items.map(item => {
    if (!item) {
      return null;
    }

    return {
      numericCode: stringsUtil.padStartN(item.numeric_code, 3),
      countryCode: item.country_code,
      alpha2Code: item.alpha2_code,
      name: item.name,
    };
  })
);

export const selectCountryCodesOptions = createSelector(
  selectDefaultDictionaryCountriesItems,
  data => data && data.asMutable().map(code => {
    const { country_code, name } = code;

    return {
      value: country_code,
      label: `${country_code} - ${name}`,
    };
  })
);

export const selectIsCountryCodesLoaded = createSelector(
  selectDefaultDictionaryCountriesItems,
  countryCodes => countryCodes && countryCodes.length > 0
);
