import * as api from './api';

import {
  ActionTypeKeys,
  GetCountryCodesAction,
  GetCurrencyCodesAction,
  GetInstitutionsAction,
  SetActiveTableRowIndexAction,
} from './actionTypes';

import {
  selectIsCountryCodesLoaded,
  selectIsCurrencyCodesLoaded,
  selectIsInstitutionsLoaded,
} from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetCurrencyCodes = () => GetCurrencyCodesAction;
export type HandleGetCurrencyCodes = VoidPromiseThunk;

export type GetCountryCodes = () => GetCountryCodesAction;
export type HandleGetCountryCodes = VoidPromiseThunk;

export type GetInstitutions = () => GetInstitutionsAction;
export type HandleGetInstitutions= VoidPromiseThunk;

export type SetActiveTableRowIndex = (index: number) => SetActiveTableRowIndexAction;
export type HandleSetActiveTableRowIndex = (index: number) => void;

export const getCurrencyCodes: GetCurrencyCodes = () => ({
  type: ActionTypeKeys.GET_CURRENCY_CODES,
  payload: api.getCurrencyCodes(),
});

export const getCountryCodes: GetCountryCodes = () => ({
  type: ActionTypeKeys.GET_COUNTRY_CODES,
  payload: api.getCountryCodes(),
});

export const getInstitutions: GetInstitutions = () => ({
  type: ActionTypeKeys.GET_INSTITUTIONS,
  payload: api.getInstitutions(),
});

export const setActiveTableRowIndex: SetActiveTableRowIndex = index => ({
  type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX,
  payload: index,
});

export const handleGetCountryCodes: HandleGetCountryCodes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCountryCodesLoaded(getState())) {
          await dispatch(getCountryCodes());
        }
      },
      dispatch
    );
  };

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

export const handleSetActiveTableRowIndex: HandleSetActiveTableRowIndex = index =>
  setActiveTableRowIndex(index);
