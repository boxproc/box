import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { statusTypesOptions } from 'consts';

import { camelizeFieldsUtil, selectUtil } from 'utils';

export const selectDefaultCurrencyCodes = (state: StoreState) =>
  state.consts.currencyCodes;

export const selectCurrencyCodes = createSelector(
  selectDefaultCurrencyCodes,
  data => data && selectUtil.parseListValues(data.asMutable())
);

export const selectIsCurrencyCodesLoaded =
  createSelector(
    selectDefaultCurrencyCodes,
    currencyCodes => {
      return currencyCodes && currencyCodes.length > 0;
    });

export const selectDefaultInstitutions = (state: StoreState) =>
  state.consts.institutions.asMutable();

export const selectInstitutions = createSelector(
  selectDefaultInstitutions,
  data => data && data.map(item => {
    return {
      ...camelizeFieldsUtil.camelizeFields(item, 'camelcase'),
      statusLabel: statusTypesOptions.find(el => el.value === item.status).label,
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
