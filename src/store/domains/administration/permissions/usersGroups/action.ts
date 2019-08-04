import { cookiesNames, formNames, modalNames, permissionTypes, } from 'consts';
import { reset as resetForm } from 'redux-form';

import { closeModal, selectUserGroupById } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminActiveUsersAction,
  AddAdminGroupPermissionsAction,
  AddAdminUsersGroupAction,
  DeleteAdminGroupPermissionsAction,
  DeleteAdminUserGroupMembersAction,
  GetAdminActiveUsersAction,
  GetAdminGroupPermissionsAction,
  GetAdminUiItemsAction,
  GetAdminUserGroupMembersAction,
  GetAdminUsersGroupAction,
  UpdateAdminUsersGroupAction,
} from './actionType';

import * as api from './api';

import {
  AdminGroupPermissionItem,
  AdminGroupPermissionItemResp,
  AdminUsersGroupEditableItem,
  AdminUsersGroupEditableItemPrepared,
} from './types';

import { apiClient } from 'services';

import { prepareAdminUsersGroupValuesUnderscore } from './utils';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminUsersGroup = () => GetAdminUsersGroupAction;
export type HandleGetAdminUsersGroup = VoidPromiseThunk;

export type GetAdminUserGroupMembers = (id: number) => GetAdminUserGroupMembersAction;
export type HandleGetAdminUserGroupMembers = (id: number) => Thunk<void>;

export type GetAdminUiItems = (id: number) => GetAdminUiItemsAction;
export type HandleGetAdminUiItems = (id: number) => Thunk<void>;

export type GetAdminUserGroupPermissions =
  (userGroupId: number) => GetAdminGroupPermissionsAction;
export type HandleGetAdminGroupPermissions =
  (userGroupId: number) => Thunk<void>;

export type GetAdminActiveUsers = () => GetAdminActiveUsersAction;
export type HandleGetAdminActiveUsers = VoidPromiseThunk;

export type DeleteAdminUserGroupMembers =
  (groupId: number, userId: number) => DeleteAdminUserGroupMembersAction;
export type HandleDeleteAdminUserGroupMembers = (groupId: number, userId: number) => Thunk<void>;

export type DeleteAdminGroupPermissions =
  (groupId: number, uiItem: string, permission: string) => DeleteAdminGroupPermissionsAction;
export type HandleDeleteAdminGroupPermissions =
  (groupId: number, uiItem: string, permission: string) => Thunk<void>;

export type AddAdminUsersGroups = (values: AdminUsersGroupEditableItemPrepared) =>
  AddAdminUsersGroupAction;
export type HandleAddAdminUsersGroups = (values: AdminUsersGroupEditableItem) =>
  Thunk<void>;

export type AddAdminActiveUsers = (groupId: number, userId: number | string) =>
  AddAdminActiveUsersAction;
export type HandleAddAdminActiveUsers = (groupId: number, userId: number | string) =>
  Thunk<void>;

export type AddAdminGroupPermissions = (values: Partial<AdminGroupPermissionItemResp>) =>
  AddAdminGroupPermissionsAction;
export type HandleAddAdminGroupPermissions = (values: Partial<AdminGroupPermissionItem>) =>
  Thunk<void>;

export type UpdateAdminUsersGroup = (propValues: AdminUsersGroupEditableItemPrepared) =>
  UpdateAdminUsersGroupAction;
export type HandleUpdateAdminUsersGroup =
  (propValues: AdminUsersGroupEditableItem) => Thunk<void>;

export const getAdminUsersGroup: GetAdminUsersGroup = () => ({
  type: ActionTypeKeys.GET_ADMIN_USERS_GROUP,
  payload: api.getAdminUsersGroup(),
});

export const getAdminActiveUsers: GetAdminActiveUsers = () => ({
  type: ActionTypeKeys.GET_ADMIN_ACTIVE_USERS,
  payload: api.getAdminActiveUsers(),
});

export const getAdminUserGroupMembers: GetAdminUserGroupMembers = id => ({
  type: ActionTypeKeys.GET_ADMIN_USER_GROUP_MEMBERS,
  payload: api.getAdminUserGroupMembers(id),
});

export const getAdminUiItems: GetAdminUiItems = id => ({
  type: ActionTypeKeys.GET_ADMIN_UI_ITEMS,
  payload: api.getAdminUiItems(id),
});
export const getAdminUserGroupPermissions: GetAdminUserGroupPermissions = id => ({
  type: ActionTypeKeys.GET_ADMIN_GROUP_PERMISSIONS,
  payload: api.getAdminUserGroupPermissions(id),
});

export const deleteAdminUserGroupMembers: DeleteAdminUserGroupMembers = (groupId, userId) => ({
  type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS,
  payload: api.deleteAdminUserGroupMembers(groupId, userId),
  meta: userId,
});

export const deleteAdminUserGroupPermissions: DeleteAdminGroupPermissions
  = (groupId, uiItem, permission) => ({
    type: ActionTypeKeys.DELETE_ADMIN_GROUP_PERMISSIONS,
    payload: api.deleteAdminUserGroupPermissions(groupId, uiItem, permission),
    meta: uiItem,
  });

export const addAdminUserUsersGroup: AddAdminUsersGroups = values => ({
  type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP,
  payload: api.addAdminUsersGroup(values),
  meta: values,
});

export const addAdminActiveUsers: AddAdminActiveUsers = (groupId, userId) => ({
  type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS,
  payload: api.addAdminActiveUsers(groupId, userId),
});

export const addAdminGroupPermission: AddAdminGroupPermissions =
  (values) => ({
    type: ActionTypeKeys.ADD_ADMIN_GROUP_PERMISSIONS,
    payload: api.addAdminGroupPermission(values),
  });

// export const filterUsers: FilterUsers = params => ({
//   type: ActionTypeKeys.FILTER_USERS,
//   payload: api.filterAdminUsers(params),
//   meta: params,
// });

export const updateAdminUsersGroup: UpdateAdminUsersGroup = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP,
  payload: api.updateAdminUsersGroup(values),
  meta: values,
});

export const handleGetAdminUsersGroup: HandleGetAdminUsersGroup = () =>
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

export const handleGetAdminActiveUsers: HandleGetAdminActiveUsers = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        await dispatch(getAdminActiveUsers());
      },
      dispatch
    );
  };

export const handleDeleteAdminUserGroupMembers: HandleDeleteAdminUserGroupMembers =
  (groupId, userId) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(deleteAdminUserGroupMembers(groupId, userId));
        },
        dispatch
      );
    };

export const handleDeleteAdminGroupPermissions: HandleDeleteAdminGroupPermissions =
  (groupId, uiItem, permission) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(deleteAdminUserGroupPermissions(groupId, uiItem, permission));
        },
        dispatch
      );
    };

export const handleGetAdminUserGroupMembers: HandleGetAdminUserGroupMembers = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminUserGroupMembers(id));
      },
      dispatch
    );
  };

export const handleGetAdminUiItems: HandleGetAdminUiItems = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminUiItems(id));
      },
      dispatch
    );
  };

export const handleGetAdminGroupPermission: HandleGetAdminGroupPermissions = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminUserGroupPermissions(id));
      },
      dispatch
    );
  };

export const handleAddAdminUsersGroup: HandleAddAdminUsersGroups = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupValuesUnderscore(values);
        await dispatch(addAdminUserUsersGroup(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_USERS_GROUP));
        await dispatch(getAdminUsersGroup());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_USER));
      },
      dispatch
    );
  };

export const handleAddGroupPermission: HandleAddAdminGroupPermissions =
  (values) =>
    async (dispatch) => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          // const state = getState();
          // const currentGroupId = selectUserGroupById(state);
          const {userGroupId, uiItem, permission} = values;
          await dispatch(addAdminGroupPermission({
            user_group_id: userGroupId,
            ui_item: uiItem.value,
            permission: permission ? permissionTypes.READ_WRITE : permissionTypes.READ_ONLY,
          }));
          // await dispatch(handleGetAdminUiItems(currentGroupId));
          await dispatch(resetForm(formNames.ADD_GROUP_PERMISSIONS));
        },
        dispatch
      );
    };

export const handleAddAdminActiveUsers: HandleAddAdminActiveUsers = (groupId, userId) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentGroupId = selectUserGroupById(state);

        await dispatch(addAdminActiveUsers(groupId, userId));
        await dispatch(getAdminUserGroupMembers(currentGroupId));
        await dispatch(resetForm(formNames.EDIT_USER_GROUP_MEMBERS_FORM));
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

export const handleUpdateAdminUsersGroup: HandleUpdateAdminUsersGroup = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupValuesUnderscore(values);
        await dispatch(updateAdminUsersGroup(preparedValues));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_USERS_GROUP));
        await dispatch(getAdminUsersGroup());

      },
      dispatch
    );
  };
