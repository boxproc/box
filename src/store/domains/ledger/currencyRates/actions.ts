import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';
import {
  ActionTypeKeys, IFilterCurrencyRatesAction,
} from './actionTypes';
import * as api from './api';
import { ICurrencyRatesFilterToSend } from './types';
import { prepareFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

/**
 * Filter currency rates action
 */

export type TFilterCurrencyRates = (data: Partial<ICurrencyRatesFilterToSend>) =>
  IFilterCurrencyRatesAction;
export type THandleFilterCurrencyRates = () => Thunk<void>;

export const filterCurrencyRates: TFilterCurrencyRates = data => ({
  type: ActionTypeKeys.FILTER_CURRENCY_RATES,
  payload: api.filterCurrencyRates(data),
});

export const handleFilterCurrencyRates: THandleFilterCurrencyRates = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterCurrencyRates(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Reset currency rates action
 */

export type TResetCurrencyRates = () => void;

export const resetCurrencyRates: TResetCurrencyRates = () => ({
  type: ActionTypeKeys.RESET_CURRENCY_RATES,
});
