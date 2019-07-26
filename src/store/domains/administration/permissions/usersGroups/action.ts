import { cookiesNames, formNames, modalNames, } from 'consts';
import { reset as resetForm } from 'redux-form';
import * as api from './api';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminUsersGroupAction,
  GetAdminUsersGroupAction,
  UpdateAdminUsersGroupAction,
} from './actionType';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { prepareAdminUsersGroupValuesCamel } from './utils';

import {
   AdminUsersGroupEditableItem,
   AdminUsersGroupEditableItemPrepared,
} from './types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminUser = () => GetAdminUsersGroupAction;
export type HandleGetAdminUser = VoidPromiseThunk;

export type AddAdminUser = (values: AdminUsersGroupEditableItemPrepared) =>
AddAdminUsersGroupAction;
export type HandleAddAdminUser = (values: AdminUsersGroupEditableItem) =>
  Thunk<void>;

// export type FilterUsers = (params: UsersFilterParamsPrepared) => FilterUsersAction;
// export type HandleFilterUsers = (params: UsersFilterParams) => Thunk<void>;

export type UpdateAdminUsersGroup = (propValues: AdminUsersGroupEditableItemPrepared) =>
UpdateAdminUsersGroupAction;
export type HandleUpdateAdminUser =
 (propValues: AdminUsersGroupEditableItem) => Thunk<void>;

export const getAdminUsersGroup: GetAdminUser = () => ({
  type: ActionTypeKeys.GET_ADMIN_USERS_GROUP,
  payload: api.getAdminUsersGroup(),
});

export const addAdminUserUsersGroup: AddAdminUser = values => ({
  type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP,
  payload: api.addAdminUsersGroup(values),
  meta: values,
});

// export const filterUsers: FilterUsers = params => ({
//   type: ActionTypeKeys.FILTER_USERS,
//   payload: api.filterAdminUsers(params),
//   meta: params,
// });

export const updateAdminUser: UpdateAdminUsersGroup = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP,
  payload: api.updateAdminUsersGroup(values),
  meta: values,
});

export const handleGetAdminUsersGroup: HandleGetAdminUser = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);
        await dispatch(getAdminUsersGroup());
      },
      dispatch
    );
  };

export const handleAddAdminUser: HandleAddAdminUser = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupValuesCamel(values);
        await dispatch(api.addAdminUsersGroup(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_USERS_GROUP));
        await dispatch(getAdminUsersGroup());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_USER));
      },
      dispatch
    );
  };

// export const handleFilterUsers: HandleFilterUsers = params =>
//   async dispatch => {
//     errorDecoratorUtil.withErrorHandler(
//       async () => {
//         console.log('params', params);

//         const preparedValues = prepareUsersFiltersParamsToSend(params);
//         console.log('preparedValues', preparedValues);
//         await dispatch(filterUsers(preparedValues));
//       },
//       dispatch
//     );
//   };

export const handleUpdateAdminUser: HandleUpdateAdminUser = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupValuesCamel(values);
        await dispatch(updateAdminUser(preparedValues));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_USER));

      },
      dispatch
    );
  };
