import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { currencyNumsOptionsSelector } from 'store/domains/admin';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender, prepareDetailsToRender } from './utils';

export const defaultCurrencyRatesSelector = (state: IStoreState) =>
  state.ledger.currencyRates.currencyRates;

export const currencyRatesSelector = createSelector(
  defaultCurrencyRatesSelector,
  data => data && data.map(el => prepareDataToRender(el))
);

export const currentCurrencyRateSelector = createSelector(
  defaultCurrencyRatesSelector,
  activeItemIdSelector,
  currencyNumsOptionsSelector,
  (rates, currentId, currenciesOptions) => {
    const currentRate = rates && rates.find(rate => rate.id === currentId);

    return prepareDetailsToRender(currentRate, currenciesOptions);
  }
);

/**
 * Currency rates loading selectors
 */

export const isLoadingCurrencyRatesSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_CURRENCY_RATES,
]);
