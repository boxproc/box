import { push } from 'react-router-redux';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import * as api from './api';

import {
  closeModal,
  selectActiveItemId,
  selectIsAccessibleFiltering,
  setIsOpenFilter,
} from 'store';
import {
  ActionTypeKeys,
  AddLedgerCustomerAction,
  AddRepaymentDebitCardAction,
  AddRepaymentDirectDebitAction,
  DeleteLedgerCustomerAction,
  FilterLedgerCustomersAction,
  FilterLedgerCustomersByIdAction,
  GetRepaymentDebitCardsAction,
  GetRepaymentDirectDebitsAction,
  UpdateLedgerCustomerAction,
} from './actionTypes';
import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomersFilterPrepared,
  LedgerId,
  RepaymentDebitCardsItem,
  RepaymentDebitCardsItemFormValues,
  RepaymentDirectDebitsItem,
  RepaymentDirectDebitsItemFormValues,
} from './types';
import {
  preparedDataToSend,
  preparedFilterToSend,
  prepareFormDataRepaymentDebitCardToSend,
  prepareFormDataRepaymentDirectDebitToSend,
} from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

export type DeleteLedgerCustomer = (id: number) => DeleteLedgerCustomerAction;
export type HandleDeleteLedgerCustomer = (id: number) => Thunk<void>;

export type AddLedgerCustomer = (values: Partial<LedgerCustomerItem>) =>
  AddLedgerCustomerAction;
export type HandleAddLedgerCustomer = (values: Partial<LedgerCustomerItemDetailsPrepared>) =>
  Thunk<void>;

export type UpdateLedgerCustomer = (values: Partial<LedgerCustomerItem>) =>
  UpdateLedgerCustomerAction;
export type HandleUpdateLedgerCustomer = (values: Partial<LedgerCustomerItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterLedgerCustomers = (params: Partial<LedgerCustomersFilterPrepared>) =>
  FilterLedgerCustomersAction;
export type HandleFilterLedgerCustomers = () => Thunk<void>;

export type FilterLedgerCustomersById = (id: LedgerId) => FilterLedgerCustomersByIdAction;
export type HandleFilterLedgerCustomersById = (id: LedgerId) => Thunk<void>;

export type GetRepaymentDebitCards = (id: number) => GetRepaymentDebitCardsAction;
export type HandleGetRepaymentDebitCards = () => Thunk<void>;

export type AddRepaymentDebitCard = (data: Partial<RepaymentDebitCardsItem>) =>
  AddRepaymentDebitCardAction;
export type HandleAddRepaymentDebitCard = (data: Partial<RepaymentDebitCardsItemFormValues>) =>
  Thunk<void>;

export type GetRepaymentDirectDebits = (id: number) => GetRepaymentDirectDebitsAction;
export type HandleGetRepaymentDirectDebits = () => Thunk<void>;

export type AddRepaymentDirectDebit = (data: Partial<RepaymentDirectDebitsItem>) =>
  AddRepaymentDirectDebitAction;
export type HandleAddRepaymentDirectDebit = (data: Partial<RepaymentDirectDebitsItemFormValues>) =>
  Thunk<void>;

export type ResetCustomers = () => void;

export const deleteLedgerCustomer: DeleteLedgerCustomer = id => ({
  type: ActionTypeKeys.DELETE_LEDGER_CUSTOMER,
  payload: api.deleteLedgerCustomer(id),
  meta: { id },
});

export const addLedgerCustomer: AddLedgerCustomer = values => ({
  type: ActionTypeKeys.ADD_LEDGER_CUSTOMER,
  payload: api.addLedgerCustomer(values),
});

export const updateLedgerCustomers: UpdateLedgerCustomer = values => ({
  type: ActionTypeKeys.UPDATE_LEDGER_CUSTOMER,
  payload: api.updateLedgerCustomer(values),
});

export const filterLedgerCustomers: FilterLedgerCustomers = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS,
  payload: api.filterLedgerCustomers(filter),
});

export const filterLedgerCustomersById: FilterLedgerCustomersById = data => ({
  type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_BY_ID,
  payload: api.filterLedgerCustomersById(data),
});

export const resetCustomers: ResetCustomers = () => ({
  type: ActionTypeKeys.RESET_CUSTOMERS,
});

export const getRepaymentDebitCards: GetRepaymentDebitCards = id => ({
  type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS,
  payload: api.getRepaymentDebitCards(id),
});

export const addRepaymentDebitCard: AddRepaymentDebitCard = data => ({
  type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD,
  payload: api.addRepaymentDebitCard(data),
});

export const getRepaymentDirectDebits: GetRepaymentDirectDebits = id => ({
  type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS,
  payload: api.getRepaymentDirectDebits(id),
});

export const addRepaymentDirectDebit: AddRepaymentDirectDebit = data => ({
  type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT,
  payload: api.addRepaymentDirectDebit(data),
});

export const handleDeleteLedgerCustomer: HandleDeleteLedgerCustomer = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteLedgerCustomer(id));
        dispatch(closeModal(modalNamesConst.EDIT_CUSTOMER));
      },
      dispatch
    );
  };

export const handleAddLedgerCustomer: HandleAddLedgerCustomer = values =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedDataToSend(values);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        await dispatch(addLedgerCustomer(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_CUSTOMER));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterLedgerCustomers());
        }
      },
      dispatch
    );
  };

export const handleUpdateLedgerCustomer: HandleUpdateLedgerCustomer = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedDataToSend(values);

        await dispatch(updateLedgerCustomers(preparedValues));
        await dispatch(handleFilterLedgerCustomers());
      },
      dispatch
    );
  };

export const handleFilterLedgerCustomers: HandleFilterLedgerCustomers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerCustomers(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdLedgerCustomers: HandleFilterLedgerCustomersById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.LEDGER_CUSTOMERS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.LEDGER_CUSTOMERS}`));
        await dispatch(filterLedgerCustomersById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

export const handleGetRepaymentDebitCards: HandleGetRepaymentDebitCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = selectActiveItemId(state);

        await dispatch(getRepaymentDebitCards(customerId));
      },
      dispatch
    );
  };

export const handleAddRepaymentDebitCard: HandleAddRepaymentDebitCard = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = selectActiveItemId(state);
        const preparedValues = prepareFormDataRepaymentDebitCardToSend(data);

        await dispatch(addRepaymentDebitCard({
          ...preparedValues,
          customer_id: customerId,
        }));
        await dispatch(handleGetRepaymentDebitCards());
        dispatch(resetForm(formNamesConst.REPAYMENT_DEBIT_CARDS));
      },
      dispatch
    );
  };

export const handleGetRepaymentDirectDebits: HandleGetRepaymentDirectDebits = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = selectActiveItemId(state);

        await dispatch(getRepaymentDirectDebits(customerId));
      },
      dispatch
    );
  };

export const handleAddRepaymentDirectDebit: HandleAddRepaymentDirectDebit = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const customerId = selectActiveItemId(state);
        const preparedValues = prepareFormDataRepaymentDirectDebitToSend(data);

        await dispatch(addRepaymentDirectDebit({
          ...preparedValues,
          customer_id: customerId,
        }));
        await dispatch(handleGetRepaymentDirectDebits());
        dispatch(resetForm(formNamesConst.REPAYMENT_DIRECT_DEBITS));
      },
      dispatch
    );
  };
