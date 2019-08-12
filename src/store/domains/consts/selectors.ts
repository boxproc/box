import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectDefaultCurrencyCodes = (state: StoreState) =>
  state.consts.currencies.asMutable();

export const selectCurrencyCodes = createSelector(
  selectDefaultCurrencyCodes,
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
    selectDefaultCurrencyCodes,
    currencyCodes => {
      return currencyCodes && currencyCodes.length > 0;
    });

export const selectDefaultCountryCodes = (state: StoreState) =>
  state.consts.countries.asMutable();

export const selectCountryCodes = createSelector(
  selectDefaultCountryCodes,
  data => data && data.map(code => {
    const { country_code, name } = code;

    return {
      value: country_code,
      label: name,
    };
  })
);

export const selectIsCountryCodesLoaded =
  createSelector(
    selectDefaultCountryCodes,
    countryCodes => {
      return countryCodes && countryCodes.length > 0;
    });

export const selectDefaultInstitutions = (state: StoreState) =>
  state.consts.institutions.asMutable();

export const selectInstitutions = createSelector(
  selectDefaultInstitutions,
  institutions => institutions && institutions.map(institution => {
    return {
      id: institution.id,
      institutionName: institution.institution_name,
    };
  })
);

export const selectInstitutionsOptions = createSelector(
  selectDefaultInstitutions,
  data => data && data.map(el => {
    return {
      value: el.id,
      label: el.institution_name,
    };
  })
);

export const selectIsInstitutionsLoaded =
  createSelector(
    selectDefaultInstitutions,
    institutions => {
      return institutions && institutions.length > 0;
    });
