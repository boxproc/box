import { getFormValues, reset as resetForm } from 'redux-form';

import { formNames, modalNames, } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminInterfaceAction,
  DeleteAdminInterfaceAction,
  FilterAdminInterfaceAction,
  SetInterfaceIdAction,
  UpdateAdminInterfaceAction,
} from './actionTypes';
import * as api from './api';

import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import {
  AdminInterfaceFilterParamsPrepared,
  AdminInterfaceItem,
  AdminInterfaceItemDetailsPrepared
} from './types';

import { selectAdminCurrentInterfaceId } from './selectors';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type AddAdminInterface = (values: Partial<AdminInterfaceItem>) => AddAdminInterfaceAction;
export type HandleAddAdminInterface = (values: Partial<AdminInterfaceItemDetailsPrepared>) =>
  Thunk<void>;

export type SetInterfaceId = (id: number) => SetInterfaceIdAction;
export type HandleSetInterfaceId = (id: number) => void;

export type DeleteAdminInterface = (id: number) => DeleteAdminInterfaceAction;
export type HandleDeleteAdminInterface = () => Thunk<void>;

export type UpdateAdminInterface = (propValues: Partial<AdminInterfaceItem>) =>
  UpdateAdminInterfaceAction;
export type HandleUpdateAdminInterface = (propValues: Partial<AdminInterfaceItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterAdminInterface = (params: Partial<AdminInterfaceFilterParamsPrepared>) =>
  FilterAdminInterfaceAction;
export type HandleFilterAdminInterface = () => Thunk<void>;

export const setAdminInterfaceId: SetInterfaceId = id => ({
  type: ActionTypeKeys.SET_ADMIN_INTERFACE_ID,
  payload: id,
});

export const addAdminInterface: AddAdminInterface = values => ({
  type: ActionTypeKeys.ADD_ADMIN_INTERFACE,
  payload: api.addAdminInterface(values),
});

export const deleteAdminInterface: DeleteAdminInterface = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_INTERFACE,
  payload: api.deleteAdminInterface(id),
  meta: id,
});

export const filterAdminInterface: FilterAdminInterface = filterParams => ({
  type: ActionTypeKeys.FILTER_ADMIN_INTERFACE,
  payload: api.filterAdminInterface(filterParams),
});

export const updateAdminInterface: UpdateAdminInterface = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE,
  payload: api.updateAdminInterface(values),
});

export const handleFilterAdminInterface: HandleFilterAdminInterface = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNames.ADMIN_INTERFACE_FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAdminInterface(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleSetAdminInterfaceId: HandleSetInterfaceId = id =>
  setAdminInterfaceId(id);

export const handleAddAdminInterface: HandleAddAdminInterface = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(addAdminInterface(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_INTERFACE));
        await dispatch(handleFilterAdminInterface());
        await dispatch(resetForm(formNames.ADMIN_INTERFACE));
      },
      dispatch
    );
  };

export const handleDeleteAdminInterface: HandleDeleteAdminInterface = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectAdminCurrentInterfaceId(state);

        await dispatch(deleteAdminInterface(id));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_INTERFACE));
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
