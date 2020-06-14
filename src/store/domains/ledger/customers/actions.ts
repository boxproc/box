import { push } from 'react-router-redux';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';
import {
  activeItemIdSelector,
  closeModal,
  isAccessibleFilterSelector,
  openModal,
} from 'store';
import {
  ActionTypeKeys,
  IAddCustomerAction,
  IAddDirectDebitAccountAction,
  IAddRepaymentDebitCardAction,
  IChangeDirectDebitMandateAction,
  IFilterCustomersAction,
  IFilterCustomersByIdAction,
  IGetCurrencyLimitAction,
  IGetDirectDebitMandatesAction,
  IGetRepaymentDebitCardsAction,
  IUpdateCurrencyLimitAction,
  IUpdateCustomerAction,
} from './actionTypes';
import * as api from './api';
import {
  ICurrencyLimit,
  ICurrencyLimitData,
  ICustomerData,
  ICustomerDetails,
  ICustomersFilterToSend,
  IDirectDebitAccountForm,
  IDirectDebitAccountFormData,
  ILedgerId,
  IRepaymentDebitCardData,
  IRepaymentDebitCardFormValues,
} from './types';
import {
  prepareCurrencyLimitToSend,
  prepareDataToSend,
  prepareFilterToSend,
  prepareFilterToSet,
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

        dispatch(closeModal(modalNamesConst.EDIT_CUSTOMER));
        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Customer was updated',
            message: `Customer ID: ${data.id}`,
          },
        }));
      },
      dispatch
    );
  };

/**
 * Filter customers by ID action
 */

export type TFilterCustomersById = (id: ILedgerId) => IFilterCustomersByIdAction;
export type THandleFilterCustomersById = (id: ILedgerId) => Thunk<void>;

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

        const res = await dispatch(filterCustomersById(id)) as any;
        const filterData = prepareFilterToSet(res.value.customers[0]);

        cookiesUtil.set(
          `${basePath}${uiItemsConst.CUSTOMERS}-${loggedInUsername}`,
          JSON.stringify(filterData)
        );

        dispatch(push(`${basePath}${uiItemsConst.CUSTOMERS}`));
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
 * Get direct debit mandates action
 */

export type TGetDirectDebitMandates = (data: {
  accountId?: number;
  customerId?: number;
  productId?: number;
  forAccount?: boolean;
}) => IGetDirectDebitMandatesAction;

export type THandleGetDirectDebitMandates = (data: {
  accountId?: number;
  customerId?: number;
  productId?: number;
  forAccount?: boolean;
}) => Thunk<void>;

export const getDirectDebitMandates: TGetDirectDebitMandates = data => ({
  type: ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES,
  payload: api.getDirectDebitMandates(data),
});

export const handleGetDirectDebitMandates: THandleGetDirectDebitMandates = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getDirectDebitMandates(data));
      },
      dispatch
    );
  };

/**
 * Reset direct debit mandate action
 */

export type TResetDirectDebitMandates = () => void;

export const resetDirectDebitMandates: TResetDirectDebitMandates = () => ({
  type: ActionTypeKeys.RESET_DIRECT_DEBIT_MANDATES,
});

/**
 * Change direct debit mandate action
 */

export type TChangeDirectDebitMandate = (data: {
  cancel?: boolean;
  reinstate?: boolean;
  id: number;
}) => IChangeDirectDebitMandateAction;

export type THandleChangeDirectDebitMandate = (data: {
  cancel?: boolean;
  reinstate?: boolean;
  id: number;
}) => Thunk<void>;

export const changeDirectDebitMandate: TChangeDirectDebitMandate = data => ({
  type: ActionTypeKeys.CHANGE_DIRECT_DEBIT_MANDATE,
  payload: api.changeDirectDebitMandate(data),
  meta: { id: data.id },
});

export const handleChangeDirectDebitMandate: THandleChangeDirectDebitMandate = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const res = await dispatch(changeDirectDebitMandate(data)) as any;
        const statusMessage = res.value.status ? `Status: ${res.value.status}` : '';
        const isCancelling = data.cancel;

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: isCancelling ? 'Mandate was cancelled' : 'Mandate was reinstated',
            message: statusMessage,
          },
        }));
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
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = activeItemIdSelector(state);
        const preparedData = prepareFormDataDirectDebitAccountToSend(data);

        await dispatch(addDirectDebitAccount(preparedData));
        await dispatch(getDirectDebitMandates({ customerId }));
        dispatch(resetForm(formNamesConst.DIRECT_DEBIT_ACCOUNTS));
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
