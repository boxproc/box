import { cookiesNames } from 'consts';

import * as api from './api';

import {
  ActionTypeKeys,
  FilterLedgerAccountsAction,
  GetLedgerAccountsAction,
  SetLedgerAccountIdAction,
  UpdateLedgerAccountAction,
} from './actionTypes';

import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountsFilterParams,
  LedgerAccountsFilterParamsPrepared,
} from './types';

import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetLedgerAccounts = () => GetLedgerAccountsAction;
export type HandleGetLedgerAccounts = VoidPromiseThunk;

export type SetLedgerAccountId = (id: number) => SetLedgerAccountIdAction;
export type HandleSetLedgerAccountId = (id: number) => void;

export type UpdateLedgerAccount = (values: Partial<LedgerAccountItem>) =>
  UpdateLedgerAccountAction;
export type HandleUpdateLedgerAccount = (values: Partial<LedgerAccountItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterLedgerAccounts = (params: Partial<LedgerAccountsFilterParamsPrepared>) =>
  FilterLedgerAccountsAction;
export type HandleFilterLedgerAccounts = (params: Partial<LedgerAccountsFilterParams>) =>
  Thunk<void>;

export const getLedgerAccounts: GetLedgerAccounts = () => ({
  type: ActionTypeKeys.GET_LEDGER_ACCOUNTS,
  payload: api.getLedgerAccounts(),
});

export const setLedgerAccountId: SetLedgerAccountId = id => ({
  type: ActionTypeKeys.SET_LEDGER_ACCOUNT_ID,
  payload: id,
});

export const updateLedgerAccounts: UpdateLedgerAccount = values => ({
  type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT,
  payload: api.updateLedgerAccount(values),
});

export const filterLedgerAccounts: FilterLedgerAccounts = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS,
  payload: api.filterLedgerAccounts(filterParams),
  meta: filterParams,
});

export const handleGetLedgerAccounts: HandleGetLedgerAccounts = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getLedgerAccounts());
      },
      dispatch
    );
  };

export const handleSetLedgerAccountId: HandleSetLedgerAccountId = id =>
  setLedgerAccountId(id);

export const handleUpdateLedgerAccount: HandleUpdateLedgerAccount = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(updateLedgerAccounts(preparedValues));
        await dispatch(handleGetLedgerAccounts());
      },
      dispatch
    );
  };

export const handleFilterLedgerAccounts: HandleFilterLedgerAccounts = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterLedgerAccounts(preparedValues));
      },
      dispatch
    );
  };
