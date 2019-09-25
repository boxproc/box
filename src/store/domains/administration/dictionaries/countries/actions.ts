import * as api from './api';

import { ActionTypeKeys, GetAdminCountriesAction } from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetAdminCountries = () => GetAdminCountriesAction;
export type HandleGetAdminCountries = VoidPromiseThunk;

export const getAdminCountries: GetAdminCountries = () => ({
  type: ActionTypeKeys.GET_ADMIN_COUNTRIES,
  payload: api.getAdminCountries(),
});

export const handleGetAdminCountries: HandleGetAdminCountries = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminCountries());
      },
      dispatch
    );
  };
