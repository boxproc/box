import { push } from 'react-router-redux';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import * as api from './api';

import {
  activeItemIdSelector,
  closeModal,
  isAccessibleFilterSelector,
  setIsOpenFilter,
} from 'store';
import {
  ActionTypeKeys,
  IAddCustomerAction,
  IAddRepaymentDebitCardAction,
  IAddRepaymentDirectDebitAction,
  IDeleteCustomerAction,
  IFilterCustomersAction,
  IFilterCustomersByIdAction,
  IGetCurrencyLimitAction,
  IGetRepaymentDebitCardsAction,
  IGetRepaymentDirectDebitsAction,
  IUpdateCurrencyLimitAction,
  IUpdateCustomerAction,
} from './actionTypes';
import {
  ICurrencyLimit,
  ICurrencyLimitData,
  ICustomerData,
  ICustomerDetails,
  ICustomersFilterToSend,
  IRepaymentDebitCardData,
  IRepaymentDebitCardFormValues,
  IRepaymentDirectDebitData,
  IRepaymentDirectDebitFormValues,
  TLedgerId,
} from './types';
import {
  prepareCurrencyLimitToSend,
  prepareDataToSend,
  prepareFilterToSend,
  prepareFormDataRepaymentDebitCardToSend,
  prepareFormDataRepaymentDirectDebitToSend,
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
 * Delete customer action
 */

export type TDeleteCustomer = (id: number) => IDeleteCustomerAction;
export type THandleDeleteCustomer = (id: number) => Thunk<void>;

export const deleteCustomer: TDeleteCustomer = id => ({
  type: ActionTypeKeys.DELETE_CUSTOMER,
  payload: api.deleteCustomer(id),
  meta: { id },
});

export const handleDeleteCustomer: THandleDeleteCustomer = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteCustomer(id));
        dispatch(closeModal(modalNamesConst.EDIT_CUSTOMER));
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

        await dispatch(addCustomer(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_CUSTOMER));

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
 * Get repayment direct debits action
 */

export type TGetRepaymentDirectDebits = (id: number) => IGetRepaymentDirectDebitsAction;
export type THandleGetRepaymentDirectDebits = () => Thunk<void>;

export const getRepaymentDirectDebits: TGetRepaymentDirectDebits = id => ({
  type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS,
  payload: api.getRepaymentDirectDebits(id),
});

export const handleGetRepaymentDirectDebits: THandleGetRepaymentDirectDebits = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);

        await dispatch(getRepaymentDirectDebits(customerId));
      },
      dispatch
    );
  };

/**
 * Add repayment direct debit action
 */

export type TAddRepaymentDirectDebit = (data: Partial<IRepaymentDirectDebitData>) =>
  IAddRepaymentDirectDebitAction;
export type THandleAddRepaymentDirectDebit = (data: Partial<IRepaymentDirectDebitFormValues>) =>
  Thunk<void>;

export const addRepaymentDirectDebit: TAddRepaymentDirectDebit = data => ({
  type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT,
  payload: api.addRepaymentDirectDebit(data),
});

export const handleAddRepaymentDirectDebit: THandleAddRepaymentDirectDebit = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);
        const preparedData = prepareFormDataRepaymentDirectDebitToSend(data);

        await dispatch(addRepaymentDirectDebit({
          ...preparedData,
          customer_id: customerId,
        }));
        await dispatch(handleGetRepaymentDirectDebits());
        dispatch(resetForm(formNamesConst.REPAYMENT_DIRECT_DEBITS));
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
