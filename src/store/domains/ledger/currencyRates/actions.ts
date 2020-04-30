import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import {
  closeModal,
  isAccessibleFilterSelector,
  openModal,
} from 'store';
import {
  ActionTypeKeys,
  IAddCurrencyRateAction,
  IFilterCurrencyRatesAction,
} from './actionTypes';
import * as api from './api';
import { ICurrencyRateData, ICurrencyRateEditable, ICurrencyRatesFilterToSend } from './types';
import { prepareDataToSend, prepareFilterToSend } from './utils';

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
 * Add currency rate action
 */

export type TAddCurrencyRate = (data: Partial<ICurrencyRateData>) => IAddCurrencyRateAction;
export type THandleAddCurrencyRate = (data: Partial<ICurrencyRateEditable>) => Thunk<void>;

export const addCurrencyRate: TAddCurrencyRate = data => ({
  type: ActionTypeKeys.ADD_CURRENCY_RATE,
  payload: api.addCurrencyRate(data),
});

export const handleAddCurrencyRate: THandleAddCurrencyRate = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = isAccessibleFilterSelector(state);

        const res = await dispatch(addCurrencyRate(preparedData)) as any;
        dispatch(closeModal(modalNamesConst.ADD_CURRENCY_RATE));
        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Currency rate was created',
            message: `Rate ID: ${res.value.currency_rate_id}`,
          },
        }));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterCurrencyRates());
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
