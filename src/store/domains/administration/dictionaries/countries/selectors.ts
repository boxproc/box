import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

import { stringsUtil } from 'utils';

export const selectDefaultDictionaryCountriesItems = (state: StoreState) =>
  state.administration.countries.countries.asMutable();

export const selectDictionaryCountries = createSelector(
  selectDefaultDictionaryCountriesItems,
  items => items && items.map(item => {
    if (!item) {
      return null;
    }

    return {
      numericCode: stringsUtil.padStartN(item.numeric_code, 3),
      countryCode: item.country_code,
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

export const selectIsCountryCodesLoaded = createSelector(
  selectDefaultDictionaryCountriesItems,
  countryCodes => countryCodes && countryCodes.length > 0
);
