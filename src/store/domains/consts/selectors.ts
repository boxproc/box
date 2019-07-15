import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectUtil } from 'utils';

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
