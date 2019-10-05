import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddLedgerCustomerAction,
  DeleteLedgerCustomerAction,
  FilterLedgerCustomersAction,
  UpdateLedgerCustomerAction,
} from './actionTypes';
import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomersFilterPrepared,
} from './types';
import { preparedFilterToSend, preparedValuesToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

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

export type FilterLedgerCustomers = (params: Partial<LedgerCustomersFilterPrepared>) =>
  FilterLedgerCustomersAction;
export type HandleFilterLedgerCustomers = () => Thunk<void>;

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

export const resetCustomers: ResetCustomers = () => ({
  type: ActionTypeKeys.RESET_CUSTOMERS,
});

export const handleDeleteLedgerCustomer: HandleDeleteLedgerCustomer = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(deleteLedgerCustomer(id));
        dispatch(closeModal(modalNamesConst.EDIT_LEDGER_CUSTOMER));
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
        dispatch(closeModal(modalNamesConst.ADD_LEDGER_CUSTOMER));
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
