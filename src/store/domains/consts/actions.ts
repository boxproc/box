import * as api from './api';

import {
  ActionTypeKeys,
  GetCurrencyCodesAction
} from './actionTypes';
import { selectIsCurrencyCodesLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetCurrencyCodes = () => GetCurrencyCodesAction;
export type HandleGetCurrencyCodes = VoidPromiseThunk;

export const getCurrencyCodes: GetCurrencyCodes = () => ({
  type: ActionTypeKeys.GET_CURRENCY_CODES,
  payload: api.getCurrencyCodes(),
});

export const handleGetCurrencyCodes: HandleGetCurrencyCodes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCurrencyCodesLoaded(getState())) {
          await dispatch(getCurrencyCodes());
        }
      },
      dispatch
    );
  };
