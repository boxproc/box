import { getFormValues, reset as resetForm } from 'redux-form';

import { formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddLedgerAccountAction,
  FilterLedgerAccountsAction,
  GetLedgerAccountCardsAction,
  OrderLedgerAccountCardAction,
  SetLedgerAccountIdAction,
  UpdateLedgerAccountAction,
} from './actionTypes';
import * as api from './api';
import { selectLedgerAccountCurrentId } from './selectors';
import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountsFilterParamsPrepared,
} from './types';
import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

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
export type HandleFilterLedgerAccounts = () => Thunk<void>;

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

export const handleFilterLedgerAccounts: HandleFilterLedgerAccounts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNames.LEDGER_ACCOUNTS_FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerAccounts(preparedValues));
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
        await dispatch(handleFilterLedgerAccounts());
      },
      dispatch
    );
  };

export const handleOrderLedgerAccountCard: HandleOrderLedgerAccountCard = accountId =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentAccountId = selectLedgerAccountCurrentId(state);

        await dispatch(orderLedgerAccountCard(accountId));
        await dispatch(handleGetLedgerAccountCards(currentAccountId));
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
        await dispatch(handleFilterLedgerAccounts());
        await dispatch(resetForm(formNames.LEDGER_ACCOUNT));
      },
      dispatch
    );
  };
