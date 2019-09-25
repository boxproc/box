import * as api from './api';

import { ActionTypeKeys, GetAdminCurrenciesAction } from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetAdminCurrencies = () => GetAdminCurrenciesAction;
export type HandleGetAdminCurrencies = VoidPromiseThunk;

export const getAdminCurrencies: GetAdminCurrencies = () => ({
  type: ActionTypeKeys.GET_ADMIN_CURRENCIES,
  payload: api.getAdminCurrencies(),
});

export const handleGetAdminCurrencies: HandleGetAdminCurrencies = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminCurrencies());
      },
      dispatch
    );
  };
