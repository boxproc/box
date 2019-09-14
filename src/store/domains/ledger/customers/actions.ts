import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import {
  ActionTypeKeys,
  AddLedgerCustomerAction,
  DeleteLedgerCustomerAction,
  FilterLedgerCustomersAction,
  GetLedgerCustomerIdAction,
  UpdateLedgerCustomerAction,
} from './actionTypes';
import { selectLedgerCustomerCurrentId } from './selectors';
import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomersFilterParamsPrepared,
} from './types';
import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetLedgerCustomerId = (id: number) => GetLedgerCustomerIdAction;
export type HandleGetLedgerCustomerId = (id: number) => void;

export type DeleteLedgerCustomer = (id: number) => DeleteLedgerCustomerAction;
export type HandleDeleteLedgerCustomer = () => Thunk<void>;

export type AddLedgerCustomer = (values: Partial<LedgerCustomerItem>) =>
  AddLedgerCustomerAction;
export type HandleAddLedgerCustomer = (values: Partial<LedgerCustomerItemDetailsPrepared>) =>
  Thunk<void>;

export type UpdateLedgerCustomer = (values: Partial<LedgerCustomerItem>) =>
  UpdateLedgerCustomerAction;
export type HandleUpdateLedgerCustomer = (values: Partial<LedgerCustomerItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterLedgerCustomers = (params: Partial<LedgerCustomersFilterParamsPrepared>) =>
  FilterLedgerCustomersAction;
export type HandleFilterLedgerCustomers = () => Thunk<void>;

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

export const handleGetLedgerCustomerId: HandleGetLedgerCustomerId = id =>
  getLedgerCustomerId(id);

export const handleDeleteLedgerCustomer: HandleDeleteLedgerCustomer = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectLedgerCustomerCurrentId(state);

        await dispatch(deleteLedgerCustomer(id));
        await dispatch(closeModal(modalNamesConst.EDIT_LEDGER_CUSTOMER));
      },
      dispatch
    );
  };

export const handleAddLedgerCustomer: HandleAddLedgerCustomer = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(addLedgerCustomer(preparedValues));
        await dispatch(closeModal(modalNamesConst.ADD_LEDGER_CUSTOMER));
        await dispatch(handleFilterLedgerCustomers());
        await dispatch(resetForm(formNamesConst.ADD_LEDGER_CUSTOMER));
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
        await dispatch(handleFilterLedgerCustomers());
      },
      dispatch
    );
  };

export const handleFilterLedgerCustomers: HandleFilterLedgerCustomers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.LEDGER_CUSTOMERS_FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerCustomers(preparedValues));
        }
      },
      dispatch
    );
  };
