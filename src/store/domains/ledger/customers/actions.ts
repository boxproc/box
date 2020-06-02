import { push } from 'react-router-redux';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import * as api from './api';

import {
  activeItemIdSelector,
  closeModal,
  isAccessibleFilterSelector,
  openModal,
  setIsOpenFilter,
} from 'store';
import {
  ActionTypeKeys,
  IAddCustomerAction,
  IAddDirectDebitAccountAction,
  IAddDirectDebitMandateAction,
  IAddRepaymentDebitCardAction,
  IFilterCustomersAction,
  IFilterCustomersByIdAction,
  IGetCurrencyLimitAction,
  IGetDirectDebitAccountsAction,
  IGetDirectDebitMandatesAction,
  IGetRepaymentDebitCardsAction,
  IUpdateCurrencyLimitAction,
  IUpdateCustomerAction,
} from './actionTypes';
import {
  ICurrencyLimit,
  ICurrencyLimitData,
  ICustomerData,
  ICustomerDetails,
  ICustomersFilterToSend,
  IDirectDebitAccountForm,
  IDirectDebitAccountFormData,
  IRepaymentDebitCardData,
  IRepaymentDebitCardFormValues,
  TLedgerId,
} from './types';
import {
  prepareCurrencyLimitToSend,
  prepareDataToSend,
  prepareFilterToSend,
  prepareFormDataDirectDebitAccountToSend,
  prepareFormDataRepaymentDebitCardToSend,
} from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

/**
 * Filter customers action
 */

export type TFilterCustomers = (data: Partial<ICustomersFilterToSend>) => IFilterCustomersAction;
export type THandleFilterCustomers = () => Thunk<void>;

export const filterCustomers: TFilterCustomers = data => ({
  type: ActionTypeKeys.FILTER_CUSTOMERS,
  payload: api.filterCustomers(data),
});

export const handleFilterCustomers: THandleFilterCustomers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterCustomers(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Add customer action
 */

export type TAddCustomer = (data: Partial<ICustomerData>) => IAddCustomerAction;
export type THandleAddCustomer = (data: Partial<ICustomerDetails>) => Thunk<void>;

export const addCustomer: TAddCustomer = data => ({
  type: ActionTypeKeys.ADD_CUSTOMER,
  payload: api.addCustomer(data),
});

export const handleAddCustomer: THandleAddCustomer = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = isAccessibleFilterSelector(state);

        const res = await dispatch(addCustomer(preparedData)) as any;
        dispatch(closeModal(modalNamesConst.ADD_CUSTOMER));
        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Customer was created',
            message: `Customer ID: ${res.value.customer_id}`,
          },
        }));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterCustomers());
        }
      },
      dispatch
    );
  };

/**
 * Update customer action
 */

export type TUpdateCustomer = (data: Partial<ICustomerData>) => IUpdateCustomerAction;
export type THandleUpdateCustomer = (data: Partial<ICustomerDetails>) => Thunk<void>;

export const updateCustomer: TUpdateCustomer = data => ({
  type: ActionTypeKeys.UPDATE_CUSTOMER,
  payload: api.updateCustomer(data),
});

export const handleUpdateCustomer: THandleUpdateCustomer = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateCustomer(preparedData));
        await dispatch(handleFilterCustomers());
      },
      dispatch
    );
  };

/**
 * Filter customers by ID action
 */

export type TFilterCustomersById = (id: TLedgerId) => IFilterCustomersByIdAction;
export type THandleFilterCustomersById = (id: TLedgerId) => Thunk<void>;

export const filterCustomersById: TFilterCustomersById = data => ({
  type: ActionTypeKeys.FILTER_CUSTOMERS_BY_ID,
  payload: api.filterCustomersById(data),
});

export const handleFilterByIdCustomers: THandleFilterCustomersById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.CUSTOMERS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.CUSTOMERS}`));
        await dispatch(filterCustomersById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

/**
 * Get repayment debit cards action
 */

export type TGetRepaymentDebitCards = (id: number) => IGetRepaymentDebitCardsAction;
export type THandleGetRepaymentDebitCards = () => Thunk<void>;

export const getRepaymentDebitCards: TGetRepaymentDebitCards = id => ({
  type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS,
  payload: api.getRepaymentDebitCards(id),
});

export const handleGetRepaymentDebitCards: THandleGetRepaymentDebitCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);

        await dispatch(getRepaymentDebitCards(customerId));
      },
      dispatch
    );
  };

/**
 * Add repayment debit card action
 */

export type TAddRepaymentDebitCard = (data: Partial<IRepaymentDebitCardData>) =>
  IAddRepaymentDebitCardAction;
export type THandleAddRepaymentDebitCard = (data: Partial<IRepaymentDebitCardFormValues>) =>
  Thunk<void>;

export const addRepaymentDebitCard: TAddRepaymentDebitCard = data => ({
  type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD,
  payload: api.addRepaymentDebitCard(data),
});

export const handleAddRepaymentDebitCard: THandleAddRepaymentDebitCard = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);
        const preparedData = prepareFormDataRepaymentDebitCardToSend(data);

        await dispatch(addRepaymentDebitCard({
          ...preparedData,
          customer_id: customerId,
        }));
        await dispatch(handleGetRepaymentDebitCards());
        dispatch(resetForm(formNamesConst.REPAYMENT_DEBIT_CARDS));
      },
      dispatch
    );
  };

/**
 * Get direct debit accounts action
 */

export type TGetDirectDebitAccounts = (id: number) => IGetDirectDebitAccountsAction;
export type THandleGetDirectDebitAccounts = () => Thunk<void>;

export const getDirectDebitAccounts: TGetDirectDebitAccounts = id => ({
  type: ActionTypeKeys.GET_DIRECT_DEBIT_ACCOUNTS,
  payload: api.getDirectDebitAccounts(id),
});

export const handleGetDirectDebitAccounts: THandleGetDirectDebitAccounts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);

        await dispatch(getDirectDebitAccounts(customerId));
      },
      dispatch
    );
  };

/**
 * Add direct debit account action
 */

export type TAddDirectDebitAccount = (data: Partial<IDirectDebitAccountFormData>) =>
  IAddDirectDebitAccountAction;
export type THandleAddDirectDebitAccount = (data: Partial<IDirectDebitAccountForm>) =>
  Thunk<void>;

export const addDirectDebitAccount: TAddDirectDebitAccount = data => ({
  type: ActionTypeKeys.ADD_DIRECT_DEBIT_ACCOUNT,
  payload: api.addDirectDebitAccount(data),
});

export const handleAddDirectDebitAccount: THandleAddDirectDebitAccount = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareFormDataDirectDebitAccountToSend(data);

        await dispatch(addDirectDebitAccount(preparedData));
        await dispatch(handleGetDirectDebitAccounts());
        dispatch(resetForm(formNamesConst.DIRECT_DEBIT_ACCOUNTS));
      },
      dispatch
    );
  };

/**
 * Get direct debit mandates action
 */

export type TGetDirectDebitMandates = (accountId: number) => IGetDirectDebitMandatesAction;
export type THandleGetDirectDebitMandates = (accountId: number) => Thunk<void>;

export const getDirectDebitMandates: TGetDirectDebitMandates = accountId => ({
  type: ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES,
  payload: api.getDirectDebitMandates(accountId),
});

export const handleGetDirectDebitMandates: THandleGetDirectDebitMandates = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getDirectDebitMandates(accountId));
      },
      dispatch
    );
  };

/**
 * Add direct debit mandate action
 */

export type TAddDirectDebitMandate = (accountId: number) => IAddDirectDebitMandateAction;
export type THandleAddDirectDebitMandate = (accountId: number) => Thunk<void>;

export const addDirectDebitMandate: TAddDirectDebitMandate = accountId => ({
  type: ActionTypeKeys.ADD_DIRECT_DEBIT_MANDATE,
  payload: api.addDirectDebitMandate(accountId),
});

export const handleAddDirectDebitMandate: THandleAddDirectDebitMandate = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const res = await dispatch(addDirectDebitMandate(accountId)) as any;
        const mandateId = res.value.mandate_id;

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Mandate was created',
            message: `Mandate ID: ${mandateId || '' }`,
          },
        }));
      },
      dispatch
    );
  };

/**
 * Get currency limits action
 */

export type TGetCurrencyLimit = (id: number) => IGetCurrencyLimitAction;
export type THandleGetCurrencyLimit = () => Thunk<void>;

export const getCurrencyLimit: TGetCurrencyLimit = id => ({
  type: ActionTypeKeys.GET_CURRENCY_LIMIT,
  payload: api.getCurrencyLimit(id),
});

export const handleGetCurrencyLimit: THandleGetCurrencyLimit = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);

        await dispatch(getCurrencyLimit(customerId));
      },
      dispatch
    );
  };

/**
 * Update currency limits action
 */

export const updateCurrencyLimit: TUpdateCurrencyLimit = data => ({
  type: ActionTypeKeys.UPDATE_CURRENCY_LIMIT,
  payload: api.updateCurrencyLimit(data),
});

export type TUpdateCurrencyLimit = (data: Partial<ICurrencyLimitData>) =>
  IUpdateCurrencyLimitAction;
export type THandleUpdateCurrencyLimit = (data: Partial<ICurrencyLimit>) => Thunk<void>;

export const handleUpdateCurrencyLimit: THandleUpdateCurrencyLimit = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);
        const preparedData = prepareCurrencyLimitToSend(data, customerId);

        await dispatch(updateCurrencyLimit(preparedData));
        await dispatch(handleGetCurrencyLimit());
      },
      dispatch
    );
  };

/**
 * Reset customers action
 */

export type TResetCustomers = () => void;

export const resetCustomers: TResetCustomers = () => ({
  type: ActionTypeKeys.RESET_CUSTOMERS,
});
