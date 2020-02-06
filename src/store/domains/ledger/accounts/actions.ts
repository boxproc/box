import { push } from 'react-router-redux';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemConsts } from 'consts';

import { closeModal, openModal } from 'store/domains/modals';

import {
  selectIsAccessibleFiltering,
  setActiveItemId,
  setIsOpenFilter,
} from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddLedgerAccountAction,
  AddProductOverrideAction,
  FilterLedgerAccountsAction,
  FilterLedgerAccountsByIdAction,
  GetLedgerAccountCardsAction,
  OrderLedgerAccountCardAction,
  UpdateLedgerAccountAction,
} from './actionTypes';
import * as api from './api';
import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountsFilterPrepared,
} from './types';
import { prepareDataToSend, preparedFilterToSend } from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';
import { LedgerId } from '../customers';

export type GetLedgerAccountCards = (accountId: number) => GetLedgerAccountCardsAction;
export type HandleGetLedgerAccountCards = (accountId: number) => Thunk<void>;

export type OrderLedgerAccountCard = (accountId: number) => OrderLedgerAccountCardAction;
export type HandleOrderLedgerAccountCard = (accountId: number) => Thunk<void>;

export type AddLedgerAccount = (data: Partial<LedgerAccountItem>) => AddLedgerAccountAction;
export type HandleAddLedgerAccount = (data: Partial<LedgerAccountItemDetailsPrepared>) =>
  Thunk<void>;

export type UpdateLedgerAccount = (data: Partial<LedgerAccountItem>) => UpdateLedgerAccountAction;
export type HandleUpdateLedgerAccount = (data: Partial<LedgerAccountItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterLedgerAccounts = (data: Partial<LedgerAccountsFilterPrepared>) =>
  FilterLedgerAccountsAction;
export type HandleFilterLedgerAccounts = () => Thunk<void>;

export type AddProductOverride = (accountId: number) => AddProductOverrideAction;
export type HandleAddProductOverride = (
  accountId: number,
  data?: { withOpenProductModal?: boolean }
) => Thunk<void>;

export type FilterLedgerAccountsById = (id: LedgerId) => FilterLedgerAccountsByIdAction;
export type HandleFilterLedgerAccountsById = (id: LedgerId) => Thunk<void>;

export type ResetAccounts = () => void;

export const getLedgerAccountCards: GetLedgerAccountCards = accountId => ({
  type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS,
  payload: api.getLedgerAccountCards(accountId),
});

export const addLedgerAccount: AddLedgerAccount = data => ({
  type: ActionTypeKeys.ADD_LEDGER_ACCOUNT,
  payload: api.addLedgerAccount(data),
});

export const orderLedgerAccountCard: OrderLedgerAccountCard = accountId => ({
  type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD,
  payload: api.orderLedgerAccountCard(accountId),
});

export const updateLedgerAccounts: UpdateLedgerAccount = data => ({
  type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT,
  payload: api.updateLedgerAccount(data),
});

export const filterLedgerAccounts: FilterLedgerAccounts = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS,
  payload: api.filterLedgerAccounts(filter),
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
        const preparedData = preparedFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterLedgerAccounts(preparedData));
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

export const handleUpdateLedgerAccount: HandleUpdateLedgerAccount = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateLedgerAccounts(preparedData));
        await dispatch(handleFilterLedgerAccounts());
      },
      dispatch
    );
  };

export const handleOrderLedgerAccountCard: HandleOrderLedgerAccountCard = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(orderLedgerAccountCard(accountId));
        await dispatch(handleGetLedgerAccountCards(accountId));
      },
      dispatch
    );
  };

export const handleAddLedgerAccount: HandleAddLedgerAccount = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        await dispatch(addLedgerAccount(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_ACCOUNT));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterLedgerAccounts());
        }
      },
      dispatch
    );
  };

export const handleAddProductOverride: HandleAddProductOverride = (
  accountId,
  withOpenProductModal
) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const res = await dispatch(addProductOverride(accountId)) as any;

        await dispatch(handleFilterLedgerAccounts());

        if (withOpenProductModal) {
          dispatch(setActiveItemId(res.value.id));
          dispatch(openModal({ name: modalNamesConst.EDIT_PRODUCT }));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdLedgerAccounts: HandleFilterLedgerAccountsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemConsts.LEDGER_ACCOUNTS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemConsts.LEDGER_ACCOUNTS}`));
        await dispatch(filterLedgerAccountsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };
