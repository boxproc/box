import { getFormValues, reset as resetForm } from 'redux-form';

import { formNames, modalNames, } from 'consts';
import * as api from './api';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminUserAction,
  FilterUsersAction,
  GetAccessUsersAction,
  SetAdminUserIdAction,
  UpdateAdminUserAction,
} from './actionType';

import { Thunk } from 'types';

import { prepareAdminUserValuesToSend, prepareUsersFiltersParamsToSend } from './utils';

import {
  AdminUserItem,
  AdminUserItemDetails,
  UsersFilterParamsPrepared
} from './types';

import { errorDecoratorUtil } from 'utils';

export type AddAdminUser = (values: Partial<AdminUserItem>) => AddAdminUserAction;
export type HandleAddAdminUser = (values: Partial<AdminUserItemDetails>) => Thunk<void>;

export type FilterUsers = (params: Partial<UsersFilterParamsPrepared>) => FilterUsersAction;
export type HandleFilterUsers = () => Thunk<void>;

export type UpdateAdminUser = (values: Partial<AdminUserItem>) => UpdateAdminUserAction;
export type HandleUpdateAdminUser = (values: Partial<AdminUserItemDetails>) => Thunk<void>;

export type SetAdminUserId = (id: number) => SetAdminUserIdAction;
export type HandleSetAdminUserId = (id: number) => void;

export type GetAccessUsers = () => GetAccessUsersAction;
export type HandleGetAccessUsers = () => Thunk<void>;

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

export const getAccessUsers: GetAccessUsers = () => ({
  type: ActionTypeKeys.GET_ADMIN_ACCESS_USERS,
  payload: api.getAdminAccessUsers(),
});

export const handleFilterUsers: HandleFilterUsers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNames.USER);
        const state = getState();
        const preparedValues = prepareUsersFiltersParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterUsers(preparedValues));
        }
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
        await dispatch(handleFilterUsers());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_USER));
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
        await dispatch(handleFilterUsers());
      },
      dispatch
    );
  };

export const handleSetAdminUserId: HandleSetAdminUserId = id =>
  setAdminUserId(id);

export const handleGetAccessUsers: HandleGetAccessUsers = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAccessUsers());
      },
      dispatch
    );
  };
