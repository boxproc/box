import { getFormValues, reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import {
  ActionTypeKeys,
  AddLedgerCustomerAction,
  DeleteLedgerCustomerAction,
  FilterLedgerCustomersAction,
  GetLedgerCustomerIdAction,
  GetLedgerCustomersAction,
  UpdateLedgerCustomerAction,
} from './actionTypes';
import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomerItemPrepared,
  LedgerCustomersFilterParams,
  LedgerCustomersFilterParamsPrepared,
} from './types';
import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetLedgerCustomers = () => GetLedgerCustomersAction;
export type HandleGetLedgerCustomers = VoidPromiseThunk;

export type GetLedgerCustomerId = (id: number) => GetLedgerCustomerIdAction;
export type HandleGetLedgerCustomerId = (id: number) => void;

export type DeleteLedgerCustomer = (id: number) => DeleteLedgerCustomerAction;
export type HandleDeleteLedgerCustomer = (id: number) => Thunk<void>;

export type AddLedgerCustomer = (values: Partial<LedgerCustomerItem>) =>
  AddLedgerCustomerAction;
export type HandleAddLedgerCustomer = (values: Partial<LedgerCustomerItemPrepared>) =>
  Thunk<void>;

export type UpdateLedgerCustomer = (values: Partial<LedgerCustomerItem>) =>
  UpdateLedgerCustomerAction;
export type HandleUpdateLedgerCustomer = (values: Partial<LedgerCustomerItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterLedgerCustomers = (params: Partial<LedgerCustomersFilterParamsPrepared>) =>
  FilterLedgerCustomersAction;
export type HandleFilterLedgerCustomers = (params: Partial<LedgerCustomersFilterParams>) =>
  Thunk<void>;

export const getLedgerCustomers: GetLedgerCustomers = () => ({
  type: ActionTypeKeys.GET_LEDGER_CUSTOMERS,
  payload: api.getLedgerCustomers(),
});

export const getLedgerCustomerId: GetLedgerCustomerId = id => ({
  type: ActionTypeKeys.GET_LEDGER_CUSTOMER_ID,
  payload: id,
});

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

export const filterLedgerCustomers: FilterLedgerCustomers = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS,
  payload: api.filterLedgerCustomers(filterParams),
  meta: filterParams,
});

export const handleGetLedgerCustomers: HandleGetLedgerCustomers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.LEDGER_CUSTOMERS_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = preparedFilterParamsToSend(formValues(state));
          await dispatch(filterLedgerCustomers(preparedValues));
        } else {
          await dispatch(getLedgerCustomers());
        }
      },
      dispatch
    );
  };

export const handleGetLedgerCustomerId: HandleGetLedgerCustomerId = id =>
  getLedgerCustomerId(id);

export const handleDeleteLedgerCustomer: HandleDeleteLedgerCustomer = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteLedgerCustomer(id));
        await dispatch(closeModal(modalNames.CONFIRMATION_MODAL));
        await dispatch(closeModal(modalNames.EDIT_LEDGER_CUSTOMER));
      },
      dispatch
    );
  };

export const handleAddLedgerCustomer: HandleAddLedgerCustomer = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = values;

        await dispatch(addLedgerCustomer(preparedValues));
        await dispatch(closeModal(modalNames.ADD_LEDGER_CUSTOMER));
        await dispatch(handleGetLedgerCustomers());
        await dispatch(resetForm(formNames.ADD_LEDGER_CUSTOMER));
      },
      dispatch
    );
  };

export const handleUpdateLedgerCustomer: HandleUpdateLedgerCustomer = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(updateLedgerCustomers(preparedValues));
        await dispatch(handleGetLedgerCustomers());
      },
      dispatch
    );
  };

export const handleFilterLedgerCustomers: HandleFilterLedgerCustomers = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterLedgerCustomers(preparedValues));
      },
      dispatch
    );
  };
