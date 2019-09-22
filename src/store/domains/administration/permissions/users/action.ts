import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';
import * as api from './api';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminUserAction,
  FilterUsersAction,
  GetAccessUsersAction,
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

export const getAccessUsers: GetAccessUsers = () => ({
  type: ActionTypeKeys.GET_ADMIN_ACCESS_USERS,
  payload: api.getAdminAccessUsers(),
});

export const handleFilterUsers: HandleFilterUsers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.USER);
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
        await dispatch(closeModal(modalNamesConst.ADD_ADMIN_USER));
        await dispatch(handleFilterUsers());
        await dispatch(resetForm(formNamesConst.DEFINE_ADMIN_USER));
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
        await dispatch(closeModal(modalNamesConst.EDIT_ADMIN_USER));
        await dispatch(handleFilterUsers());
      },
      dispatch
    );
  };

export const handleGetAccessUsers: HandleGetAccessUsers = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAccessUsers());
      },
      dispatch
    );
  };
