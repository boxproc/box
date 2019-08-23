import { getFormValues, reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import {
  ActionTypeKeys,
  AddLedgerAccountAction,
  FilterLedgerAccountsAction,
  GetLedgerAccountCardsAction,
  GetLedgerAccountsAction,
  OrderLedgerAccountCardAction,
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
import { selectLedgerAccountCurrentId } from './selectors';

export type GetLedgerAccounts = () => GetLedgerAccountsAction;
export type HandleGetLedgerAccounts = VoidPromiseThunk;

export type GetLedgerAccountCards = (accountId: number) => GetLedgerAccountCardsAction;
export type HandleGetLedgerAccountCards = (accountId: number) => Thunk<void>;

export type OrderLedgerAccountCard = (accountId: number) => OrderLedgerAccountCardAction;
export type HandleOrderLedgerAccountCard = (accountId: number) =>
  Thunk<void>;

export type AddLedgerAccount = (values: Partial<LedgerAccountItem>) => AddLedgerAccountAction;
export type HandleAddLedgerAccount = (values: Partial<LedgerAccountItemDetailsPrepared>) =>
  Thunk<void>;

export type SetLedgerAccountId = (id: number) => SetLedgerAccountIdAction;
export type HandleSetLedgerAccountId = (id: number) => void;

export type UpdateLedgerAccount = (values: Partial<LedgerAccountItem>) => UpdateLedgerAccountAction;
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

export const getLedgerAccountCards: GetLedgerAccountCards = accountId => ({
  type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS,
  payload: api.getLedgerAccountCards(accountId),
});

export const setLedgerAccountId: SetLedgerAccountId = id => ({
  type: ActionTypeKeys.SET_LEDGER_ACCOUNT_ID,
  payload: id,
});

export const addLedgerAccount: AddLedgerAccount = values => ({
  type: ActionTypeKeys.ADD_LEDGER_ACCOUNT,
  payload: api.addLedgerAccount(values),
});
export const orderLedgerAccountCard: OrderLedgerAccountCard = accountId => ({
  type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD,
  payload: api.orderLedgerAccountCard(accountId),
});

export const updateLedgerAccounts: UpdateLedgerAccount = values => ({
  type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT,
  payload: api.updateLedgerAccount(values),
});

export const filterLedgerAccounts: FilterLedgerAccounts = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS,
  payload: api.filterLedgerAccounts(filterParams),
});

export const handleGetLedgerAccounts: HandleGetLedgerAccounts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.LEDGER_ACCOUNTS_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = preparedFilterParamsToSend(formValues(state));
          await dispatch(filterLedgerAccounts(preparedValues));
        } else {
          await dispatch(getLedgerAccounts());
        }
      },
      dispatch
    );
  };

export const handleGetLedgerAccountCards: HandleGetLedgerAccountCards = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getLedgerAccountCards(accountId));
        await dispatch(resetForm(formNames.LEDGER_ACCOUNT_CARDS));
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

export const handleOrderLedgerAccountCard: HandleOrderLedgerAccountCard = accountId =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentAccoundId = selectLedgerAccountCurrentId(state);
        await dispatch(orderLedgerAccountCard(accountId));
        await dispatch(handleGetLedgerAccountCards(currentAccoundId));
        await dispatch(resetForm(formNames.LEDGER_ACCOUNT));
      },
      dispatch
    );
  };

export const handleAddLedgerAccount: HandleAddLedgerAccount = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(addLedgerAccount(preparedValues));
        await dispatch(closeModal(modalNames.ADD_LEDGER_ACCOUNT));
        await dispatch(handleGetLedgerAccounts());
        await dispatch(resetForm(formNames.LEDGER_ACCOUNT));
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
