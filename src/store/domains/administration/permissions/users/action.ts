import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames, } from 'consts';
import * as api from './api';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminUserAction,
  FilterUsersAction,
  GetAdminUserAction,
  SetAdminUserIdAction,
  UpdateAdminUserAction,
} from './actionType';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { prepareAdminUserValuesToSend, prepareUsersFiltersParamsToSend } from './utils';

import {
  AdminUserItem,
  AdminUserItemDetails,
  UsersFilterParams,
  UsersFilterParamsPrepared
} from './types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminUser = () => GetAdminUserAction;
export type HandleGetAdminUser = VoidPromiseThunk;

export type AddAdminUser = (values: Partial<AdminUserItem>) => AddAdminUserAction;
export type HandleAddAdminUser = (values: Partial<AdminUserItemDetails>) => Thunk<void>;

export type FilterUsers = (params: Partial<UsersFilterParamsPrepared>) => FilterUsersAction;
export type HandleFilterUsers = (params: Partial<UsersFilterParams>) => Thunk<void>;

export type UpdateAdminUser = (values: Partial<AdminUserItem>) => UpdateAdminUserAction;
export type HandleUpdateAdminUser = (values: Partial<AdminUserItemDetails>) => Thunk<void>;

export type SetAdminUserId = (id: number) => SetAdminUserIdAction;
export type HandleSetAdminUserId = (id: number) => void;

export const getAdminUser: GetAdminUser = () => ({
  type: ActionTypeKeys.GET_ADMIN_USER,
  payload: api.getAdminUser(),
});

export const addAdminUser: AddAdminUser = values => ({
  type: ActionTypeKeys.ADD_ADMIN_USER,
  payload: api.addAdminUser(values),
});

export const filterUsers: FilterUsers = params => ({
  type: ActionTypeKeys.FILTER_USERS,
  payload: api.filterAdminUsers(params),
});

export const updateAdminUser: UpdateAdminUser = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_USER,
  payload: api.updateAdminUser(values),
});

export const setAdminUserId: SetAdminUserId = id => ({
  type: ActionTypeKeys.SET_ADMIN_USER_ID,
  payload: id,
});

export const handleGetAdminUser: HandleGetAdminUser = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        await dispatch(getAdminUser());
      },
      dispatch
    );
  };

export const handleAddAdminUser: HandleAddAdminUser = cycleEditorRecords =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUserValuesToSend(cycleEditorRecords);

        await dispatch(addAdminUser(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_USER));
        await dispatch(getAdminUser());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_USER));
      },
      dispatch
    );
  };

export const handleFilterUsers: HandleFilterUsers = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareUsersFiltersParamsToSend(params);

        await dispatch(filterUsers(preparedValues));
      },
      dispatch
    );
  };

export const handleUpdateAdminUser: HandleUpdateAdminUser = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUserValuesToSend(values);

        await dispatch(updateAdminUser(preparedValues));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_USER));
        await dispatch(getAdminUser());
      },
      dispatch
    );
  };

export const handleSetAdminUserId: HandleSetAdminUserId = id =>
  setAdminUserId(id);
