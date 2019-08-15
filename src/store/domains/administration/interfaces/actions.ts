import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames, } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminInterfaceAction,
  DeleteAdminInterfaceAction,
  FilterAdminInterfaceAction,
  GetAdminInterfaceAction,
  SetInterfaceIdAction,
  UpdateAdminInterfaceAction,
} from './actionTypes';
import * as api from './api';

import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';
import {
    AdminInterfaceFilterParams,
    AdminInterfaceFilterParamsPrepared,
    AdminInterfaceItem,
    AdminInterfaceItemDetailsPrepared
} from './types';

export type GetAdminInterface = () => GetAdminInterfaceAction;
export type HandleGetAdminInterface = VoidPromiseThunk;

export type AddAdminInterface = (values: Partial<AdminInterfaceItem>) =>
  AddAdminInterfaceAction;
export type HandleAddAdminInterface = (values: Partial<AdminInterfaceItemDetailsPrepared>) =>
  Thunk<void>;

export type SetInterfaceId = (id: number) => SetInterfaceIdAction;
export type HandleSetInterfaceId = (id: number) => void;

export type DeleteAdminInterface = (id: number) => DeleteAdminInterfaceAction;
export type HandleDeleteAdminInterface = (id: number) => Thunk<void>;

export type UpdateAdminInterface =
  (propValues: Partial<AdminInterfaceItem>) => UpdateAdminInterfaceAction;
export type HandleUpdateAdminInterface =
  (propValues: Partial<AdminInterfaceItemDetailsPrepared>) => Thunk<void>;

export type FilterAdminInterface = (params: Partial<AdminInterfaceFilterParamsPrepared>) =>
  FilterAdminInterfaceAction;
export type HandleFilterAdminInterface = (params: Partial<AdminInterfaceFilterParams>) =>
  Thunk<void>;

export const getAdminInterface: GetAdminInterface = () => ({
  type: ActionTypeKeys.GET_ADMIN_INTERFACE,
  payload: api.getAdminInterface(),
});

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
  meta: filterParams,
});

export const updateAdminInterface: UpdateAdminInterface = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE,
  payload: api.updateAdminInterface(values),
});

export const handleGetAdminInterface: HandleGetAdminInterface = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        await dispatch(getAdminInterface());
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
        await dispatch(handleGetAdminInterface());
        await dispatch(resetForm(formNames.ADMIN_INTERFACE));
      },
      dispatch
    );
  };

export const handleDeleteAdminInterface: HandleDeleteAdminInterface = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminInterface(id));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_INTERFACE));
        await dispatch(closeModal(modalNames.CONFIRMATION_MODAL));
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
        await dispatch(handleGetAdminInterface());
      },
      dispatch
    );
  };

export const handleFilterAdminInterface: HandleFilterAdminInterface = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterAdminInterface(preparedValues));
      },
      dispatch
    );
  };
