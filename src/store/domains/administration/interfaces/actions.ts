import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';

import { closeModal } from 'store/domains/modals';

import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddAdminInterfaceAction,
  DeleteAdminInterfaceAction,
  FilterAdminInterfaceAction,
  UpdateAdminInterfaceAction,
} from './actionTypes';
import * as api from './api';
import {
  AdminInterfaceFilterPrepared,
  AdminInterfaceItem,
  AdminInterfaceItemDetailsPrepared
} from './types';
import { preparedFilterToSend, preparedValuesToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type AddAdminInterface = (values: Partial<AdminInterfaceItem>) => AddAdminInterfaceAction;
export type HandleAddAdminInterface = (values: Partial<AdminInterfaceItemDetailsPrepared>) =>
  Thunk<void>;

export type DeleteAdminInterface = (id: number) => DeleteAdminInterfaceAction;
export type HandleDeleteAdminInterface = () => Thunk<void>;

export type UpdateAdminInterface = (propValues: Partial<AdminInterfaceItem>) =>
  UpdateAdminInterfaceAction;
export type HandleUpdateAdminInterface = (propValues: Partial<AdminInterfaceItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterAdminInterface = (params: Partial<AdminInterfaceFilterPrepared>) =>
  FilterAdminInterfaceAction;
export type HandleFilterAdminInterface = () => Thunk<void>;

export type ResetInterfaces = () => void;

export const addAdminInterface: AddAdminInterface = values => ({
  type: ActionTypeKeys.ADD_ADMIN_INTERFACE,
  payload: api.addAdminInterface(values),
});

export const deleteAdminInterface: DeleteAdminInterface = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_INTERFACE,
  payload: api.deleteAdminInterface(id),
  meta: id,
});

export const filterAdminInterface: FilterAdminInterface = filter => ({
  type: ActionTypeKeys.FILTER_ADMIN_INTERFACE,
  payload: api.filterAdminInterface(filter),
});

export const updateAdminInterface: UpdateAdminInterface = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE,
  payload: api.updateAdminInterface(values),
});

export const resetInterfaces: ResetInterfaces = () => ({
  type: ActionTypeKeys.RESET_INTERFACES,
});

export const handleFilterAdminInterface: HandleFilterAdminInterface = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAdminInterface(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleAddAdminInterface: HandleAddAdminInterface = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(addAdminInterface(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_INTERFACE));
      },
      dispatch
    );
  };

export const handleDeleteAdminInterface: HandleDeleteAdminInterface = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(deleteAdminInterface(id));
        dispatch(closeModal(modalNamesConst.EDIT_INTERFACE));
        await dispatch(handleFilterAdminInterface());
      },
      dispatch
    );
  };

export const handleUpdateInterface: HandleUpdateAdminInterface = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(updateAdminInterface(preparedValues));
        await dispatch(handleFilterAdminInterface());
      },
      dispatch
    );
  };
