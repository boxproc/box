import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectUtil } from 'utils';

export const selectDefaultCurrencyCodes = (state: StoreState) =>
  state.consts.currencyCodes.asMutable();

export const selectCurrencyCodes = createSelector(
  selectDefaultCurrencyCodes,
  data => data && selectUtil.parseListValues(data)
);

export const selectIsCurrencyCodesLoaded =
  createSelector(
    selectDefaultCurrencyCodes,
    currencyCodes => {
      return currencyCodes && currencyCodes.length > 0;
    });

export const selectDefaultInstitutions = (state: StoreState) =>
  state.consts.institutions.asMutable();

export const selectInstitutionsOptions = createSelector(
  selectDefaultInstitutions,
  data => data && data.map(el => {
    return {
      value: el.id,
      label: el.name,
    };
  })
);

export const selectIsInstitutionsLoaded =
  createSelector(
    selectDefaultInstitutions,
    institutions => {
      return institutions && institutions.length > 0;
    });
