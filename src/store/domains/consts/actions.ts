import * as api from './api';

import {
  ActionTypeKeys,
  GetCurrencyCodesAction,
  GetInstitutionsAction,
} from './actionTypes';
import { selectIsCurrencyCodesLoaded, selectIsInstitutionsLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetCurrencyCodes = () => GetCurrencyCodesAction;
export type HandleGetCurrencyCodes = VoidPromiseThunk;

export type GetInstitutions = () => GetInstitutionsAction;
export type HandleGetInstitutions= VoidPromiseThunk;

export const getCurrencyCodes: GetCurrencyCodes = () => ({
  type: ActionTypeKeys.GET_CURRENCY_CODES,
  payload: api.getCurrencyCodes(),
});

export const getInstitutions: GetInstitutions = () => ({
  type: ActionTypeKeys.GET_INSTITUTIONS,
  payload: api.getInstitutions(),
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

export const handleGetInstitutions: HandleGetInstitutions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsInstitutionsLoaded(getState())) {
          await dispatch(getInstitutions());
        }
      },
      dispatch
    );
  };
