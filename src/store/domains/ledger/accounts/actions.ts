import { push } from 'react-router-redux';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import {
  closeModal,
  isAccessibleFilterSelector,
  openModal,
  setActiveItemId,
  setIsOpenFilter,
} from 'store';
import { TLedgerId } from './../customers';
import {
  ActionTypeKeys,
  IAddAccountAction,
  IAddProductOverrideAction,
  IFilterAccountsAction,
  IFilterAccountsByIdAction,
  IGetAccountCardsAction,
  IMakeLimitAdjustmentAction,
  IMakeTransactionAction,
  IOrderAccountCardAction,
  IUpdateAccountAction,
} from './actionTypes';
import * as api from './api';
import {
  IAccountData,
  IAccountDetails,
  IAccountsFilterToSend,
} from './types';
import { ILimitAdjReq, ILimitAdjustmentFromData } from './typesLimitAdj';
import { IManualTransactionFromData, IManualTransactionReq } from './typesManualTr';
import { prepareDataToSend, prepareFilterToSend } from './utils';
import { prepareLimitAdjDataToSend } from './utilsLimitAdj';
import { prepareManualTrDataToSend } from './utilsManualTr';

import { Thunk } from 'types';
import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

/**
 * Filter accounts action
 */

export type TFilterAccounts = (data: Partial<IAccountsFilterToSend>) => IFilterAccountsAction;
export type THandleFilterAccounts = () => Thunk<void>;

export const filterAccounts: TFilterAccounts = filter => ({
  type: ActionTypeKeys.FILTER_ACCOUNTS,
  payload: api.filterAccounts(filter),
});

export const handleFilterAccounts: THandleFilterAccounts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterAccounts(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Get account cards action
 */

export type TGetAccountCards = (accountId: number) => IGetAccountCardsAction;
export type THandleGetAccountCards = (accountId: number) => Thunk<void>;

export const getAccountCards: TGetAccountCards = accountId => ({
  type: ActionTypeKeys.GET_ACCOUNT_CARDS,
  payload: api.getAccountCards(accountId),
});

export const handleGetAccountCards: THandleGetAccountCards = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAccountCards(accountId));
      },
      dispatch
    );
  };

/**
 * Order account card action
 */

export type TOrderAccountCard = (accountId: number) => IOrderAccountCardAction;
export type THandleOrderAccountCard = (accountId: number) => Thunk<void>;

export const orderAccountCard: TOrderAccountCard = accountId => ({
  type: ActionTypeKeys.ORDER_ACCOUNT_CARD,
  payload: api.orderAccountCard(accountId),
});

export const handleOrderAccountCard: THandleOrderAccountCard = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(orderAccountCard(accountId));
        await dispatch(handleGetAccountCards(accountId));
      },
      dispatch
    );
  };

/**
 * Add account action
 */

export type TAddAccount = (data: Partial<IAccountData>) => IAddAccountAction;
export type THandleAddAccount = (data: Partial<IAccountDetails>) => Thunk<void>;

export const addAccount: TAddAccount = data => ({
  type: ActionTypeKeys.ADD_ACCOUNT,
  payload: api.addAccount(data),
});

export const handleAddAccount: THandleAddAccount = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = isAccessibleFilterSelector(state);

        await dispatch(addAccount(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_ACCOUNT));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterAccounts());
        }
      },
      dispatch
    );
  };

/**
 * Update account action
 */

export type TUpdateAccount = (data: Partial<IAccountData>) => IUpdateAccountAction;
export type THandleUpdateAccount = (data: Partial<IAccountDetails>) => Thunk<void>;

export const updateAccount: TUpdateAccount = data => ({
  type: ActionTypeKeys.UPDATE_ACCOUNT,
  payload: api.updateAccount(data),
});

export const handleUpdateAccount: THandleUpdateAccount = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateAccount(preparedData));
        await dispatch(handleFilterAccounts());
      },
      dispatch
    );
  };

/**
 * Add product override action
 */

export type TAddProductOverride = (accountId: number) => IAddProductOverrideAction;
export type THandleAddProductOverride = (
  accountId: number,
  data?: { withOpenProductModal?: boolean }
) => Thunk<void>;

export const addProductOverride: TAddProductOverride = accountId => ({
  type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE,
  payload: api.addProductOverride(accountId),
});

export const handleAddProductOverride: THandleAddProductOverride = (
  accountId,
  withOpenProductModal
) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const res = await dispatch(addProductOverride(accountId)) as any;

        await dispatch(handleFilterAccounts());

        if (withOpenProductModal) {
          dispatch(setActiveItemId(res.value.id));
          dispatch(openModal({ name: modalNamesConst.EDIT_PRODUCT }));
        }
      },
      dispatch
    );
  };

/**
 * Filter accounts by ID action
 */

export type TFilterAccountsById = (id: TLedgerId) => IFilterAccountsByIdAction;
export type THandleFilterAccountsById = (id: TLedgerId) => Thunk<void>;

export const filterAccountsById: TFilterAccountsById = data => ({
  type: ActionTypeKeys.FILTER_ACCOUNTS_BY_ID,
  payload: api.filterAccountsById(data),
});

export const handleFilterByIdAccounts: THandleFilterAccountsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.ACCOUNTS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.ACCOUNTS}`));
        await dispatch(filterAccountsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

/**
 * Reset accounts action
 */

export type TResetAccounts = () => void;

export const resetAccounts: TResetAccounts = () => ({
  type: ActionTypeKeys.RESET_ACCOUNTS,
});

/**
 * Make manual transaction action
 */

export type TMakeTransaction = (data: Partial<IManualTransactionReq>) => IMakeTransactionAction;
export type THandleMakeTransaction = (data: Partial<IManualTransactionFromData>) => Thunk<void>;

export const makeTransaction: TMakeTransaction = data => ({
  type: ActionTypeKeys.MAKE_TRANSACTION,
  payload: api.makeTransaction(data),
  meta: { accId: data.account_id },
});

export const handleMakeTransaction: THandleMakeTransaction = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareManualTrDataToSend(data);

        await dispatch(makeTransaction(preparedData));
        dispatch(resetForm(formNamesConst.MANUAL_TRANSACTION));
        dispatch(openModal({ name: modalNamesConst.MANUAL_TRANSACTION_RESULT }));
      },
      dispatch
    );
  };

/**
 * Limit adjustment action
 */

export type TMakeLimitAdjustment = (data: Partial<ILimitAdjReq>) => IMakeLimitAdjustmentAction;
export type THandleMakeLimitAdjustment = (data: Partial<ILimitAdjustmentFromData>) => Thunk<void>;

export const makeLimitAdjustment: TMakeLimitAdjustment = data => ({
  type: ActionTypeKeys.LIMIT_ADJUSTMENT,
  payload: api.makeLimitAdjustment(data),
  meta: { accId: data.account_id },
});

export const handleMakeLimitAdjustment: THandleMakeLimitAdjustment = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareLimitAdjDataToSend(data);

        await dispatch(makeLimitAdjustment(preparedData));
        dispatch(resetForm(formNamesConst.MANUAL_TRANSACTION));
        dispatch(openModal({ name: modalNamesConst.MANUAL_TRANSACTION_RESULT }));
      },
      dispatch
    );
  };
