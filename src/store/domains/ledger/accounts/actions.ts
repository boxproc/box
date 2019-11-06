import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemConsts } from 'consts';

import { closeModal, openModal } from 'store/domains/modals';

import { selectActiveItemId, setActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddLedgerAccountAction,
  AddProductOverrideAction,
  FilterLedgerAccountsAction,
  FilterLedgerAccountsByIdAction,
  GetLedgerAccountCardsAction,
  GetLedgerLastStatementAction,
  OrderLedgerAccountCardAction,
  UpdateLedgerAccountAction,
} from './actionTypes';
import * as api from './api';
import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountsFilterPrepared,
} from './types';
import { preparedFilterToSend, preparedValuesToSend } from './utils';

import { Thunk } from 'types';

import { push } from 'react-router-redux';
import { cookiesUtil, errorDecoratorUtil } from 'utils';
import { LedgerId } from '../customers';

export type GetLedgerAccountCards = (accountId: number) => GetLedgerAccountCardsAction;
export type HandleGetLedgerAccountCards = (accountId: number) => Thunk<void>;

export type OrderLedgerAccountCard = (accountId: number) => OrderLedgerAccountCardAction;
export type HandleOrderLedgerAccountCard = (accountId: number) => Thunk<void>;

export type AddLedgerAccount = (values: Partial<LedgerAccountItem>) => AddLedgerAccountAction;
export type HandleAddLedgerAccount = (values: Partial<LedgerAccountItemDetailsPrepared>) =>
  Thunk<void>;

export type UpdateLedgerAccount = (values: Partial<LedgerAccountItem>) => UpdateLedgerAccountAction;
export type HandleUpdateLedgerAccount = (values: Partial<LedgerAccountItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterLedgerAccounts = (params: Partial<LedgerAccountsFilterPrepared>) =>
  FilterLedgerAccountsAction;
export type HandleFilterLedgerAccounts = () => Thunk<void>;

export type GetLedgerLastStatement = (accountId: number) => GetLedgerLastStatementAction;
export type HandleGetLedgerLastStatement = (accountId: number) => Thunk<void>;

export type AddProductOverride = (accountId: number) => AddProductOverrideAction;
export type HandleAddProductOverride = (data?: { withOpenProductModal?: boolean }) => Thunk<void>;

export type FilterLedgerAccountsById = (id: LedgerId) =>
  FilterLedgerAccountsByIdAction;
export type HandleFilterLedgerAccountsById = (id: LedgerId) => Thunk<void>;
export type ResetAccounts = () => void;

export const getLedgerAccountCards: GetLedgerAccountCards = accountId => ({
  type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS,
  payload: api.getLedgerAccountCards(accountId),
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

export const filterLedgerAccounts: FilterLedgerAccounts = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS,
  payload: api.filterLedgerAccounts(filter),
});

export const getLedgerLastStatement: GetLedgerLastStatement = accountId => ({
  type: ActionTypeKeys.GET_LEDGER_LAST_STATEMENT,
  payload: api.getLedgerLastStatement(accountId),
});

export const addProductOverride: AddProductOverride = accountId => ({
  type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE,
  payload: api.addProductOverride(accountId),
});

export const filterLedgerAccountsById: FilterLedgerAccountsById = data => ({
  type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_BY_ID,
  payload: api.filterLedgerAccountsById(data),
});

export const resetAccounts: ResetAccounts = () => ({
  type: ActionTypeKeys.RESET_ACCOUNTS,
});

export const handleFilterLedgerAccounts: HandleFilterLedgerAccounts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

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
      },
      dispatch
    );
  };

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
        const currentAccountId = selectActiveItemId(state);

        await dispatch(orderLedgerAccountCard(accountId));
        await dispatch(handleGetLedgerAccountCards(currentAccountId));
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
        dispatch(closeModal(modalNamesConst.ADD_LEDGER_ACCOUNT));
      },
      dispatch
    );
  };

export const handleGetLedgerLastStatement: HandleGetLedgerLastStatement = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getLedgerLastStatement(accountId));
      },
      dispatch
    );
  };

export const handleAddProductOverride: HandleAddProductOverride = (withOpenProductModal) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const accountId = selectActiveItemId(state);

        const res = await dispatch(addProductOverride(accountId)) as any;

        await dispatch(handleFilterLedgerAccounts());

        if (withOpenProductModal) {
          dispatch(setActiveItemId(res.value.id));
          dispatch(openModal({
            name: modalNamesConst.EDIT_PRODUCT,
          }));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdLedgerAccounts: HandleFilterLedgerAccountsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(filterLedgerAccountsById(id));
        cookiesUtil.remove(basePath + uiItemConsts.LEDGER_ACCOUNTS);
        await dispatch(push(basePath + uiItemConsts.LEDGER_ACCOUNTS));
      },
      dispatch
    );
  };
