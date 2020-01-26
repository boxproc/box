import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';
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
} from './actionTypes';
import * as api from './api';
import {
  AdminGroupPermissionItemEditable,
  AdminGroupPermissionItemResp,
  AdminUserGroupMembersDelete,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupInfoEditable,
  AdminUsersGroupItem,
} from './types';

import { Thunk, VoidPromiseThunk } from 'types';

import { AdminGroupPermissionPreparedToSend, prepareAdminUsersGroupData } from './utils';

import { errorDecoratorUtil } from 'utils';

export type GetAdminUsersGroup = () => GetAdminUsersGroupAction;
export type HandleGetAdminUsersGroup = VoidPromiseThunk;

export type GetAdminUserGroupMembers = (id: number) => GetAdminUserGroupMembersAction;
export type HandleGetAdminUserGroupMembers = (id: number) => Thunk<void>;

export type GetAdminUiItems = (id: number) => GetAdminUiItemsAction;
export type HandleGetAdminUiItems = (id: number) => Thunk<void>;

export type GetAdminUserGroupPermissions = (id: number) => GetAdminGroupPermissionsAction;
export type HandleGetAdminGroupPermissions = (id: number) => Thunk<void>;

export type GetAdminActiveUsers = (id: number) => GetAdminActiveUsersAction;
export type HandleGetAdminActiveUsers = (id: number) => Thunk<void>;

export type DeleteAdminUserGroupMembers = (id: number, userId: number) =>
  DeleteAdminUserGroupMembersAction;
export type HandleDeleteAdminUserGroupMembers = (id: number, userId: number) => Thunk<void>;

export type DeleteAdminGroupPermissions = (id: number, uiItem: string) =>
  DeleteAdminGroupPermissionsAction;
export type HandleDeleteAdminGroupPermissions = (id: number, uiItem: string) => Thunk<void>;

export type AddAdminUsersGroups = (data: Partial<AdminUsersGroupItem>) =>
  AddAdminUsersGroupAction;
export type HandleAddAdminUsersGroups = (data: Partial<AdminUsersGroupInfoEditable>) =>
  Thunk<void>;

export type AddAdminActiveUsers = (data: Partial<AdminUserGroupMembersDeleteResp>) =>
  AddAdminActiveUsersAction;
export type HandleAddAdminActiveUsers = (data: Partial<AdminUserGroupMembersDelete>) =>
  Thunk<void>;

export type AddAdminGroupPermissions = (data: Partial<AdminGroupPermissionItemResp>) =>
  AddAdminGroupPermissionsAction;
export type HandleAddAdminGroupPermissions = (data: Partial<AdminGroupPermissionItemEditable>) =>
  Thunk<void>;

export type UpdateAdminUsersGroup = (data: Partial<AdminUsersGroupItem>) =>
  UpdateAdminUsersGroupAction;
export type HandleUpdateAdminUsersGroup = (data: Partial<AdminUsersGroupInfoEditable>) =>
  Thunk<void>;

export type ResetUsersGroup = () => void;

export const getAdminUsersGroup: GetAdminUsersGroup = () => ({
  type: ActionTypeKeys.GET_ADMIN_USERS_GROUP,
  payload: api.getAdminUsersGroup(),
});

export const getAdminActiveUsers: GetAdminActiveUsers = id => ({
  type: ActionTypeKeys.GET_ADMIN_ACTIVE_USERS,
  payload: api.getAdminActiveUsers(id),
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

export const deleteAdminUserGroupMembers: DeleteAdminUserGroupMembers = (id, userId) => ({
  type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS,
  payload: api.deleteAdminUserGroupMembers(id, userId),
});

export const deleteAdminUserGroupPermissions: DeleteAdminGroupPermissions = (id, uiItem) => ({
  type: ActionTypeKeys.DELETE_ADMIN_GROUP_PERMISSIONS,
  payload: api.deleteAdminUserGroupPermissions(id, uiItem),
});

export const addAdminUserUsersGroup: AddAdminUsersGroups = data => ({
  type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP,
  payload: api.addAdminUsersGroup(data),
});

export const addAdminActiveUsers: AddAdminActiveUsers = data => ({
  type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS,
  payload: api.addAdminActiveUsers(data),
});

export const addAdminGroupPermission: AddAdminGroupPermissions = data => ({
  type: ActionTypeKeys.ADD_ADMIN_GROUP_PERMISSIONS,
  payload: api.addAdminGroupPermission(data),
});

export const updateAdminUsersGroup: UpdateAdminUsersGroup = data => ({
  type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP,
  payload: api.updateAdminUsersGroup(data),
});

export const resetUsersGroup: ResetUsersGroup = () => ({
  type: ActionTypeKeys.RESET_USERS_GROUP,
});

export const handleGetAdminUsersGroup: HandleGetAdminUsersGroup = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminUsersGroup());
      },
      dispatch
    );
  };

export const handleGetAdminActiveUsers: HandleGetAdminActiveUsers = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminActiveUsers(id));
      },
      dispatch
    );
  };

export const handleDeleteAdminUserGroupMembers: HandleDeleteAdminUserGroupMembers =
  (id, userId) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(deleteAdminUserGroupMembers(id, userId));

          await Promise.all([
            dispatch(getAdminActiveUsers(id)),
            dispatch(getAdminUserGroupMembers(id)),
          ]);
        },
        dispatch
      );
    };

export const handleDeleteAdminGroupPermissions: HandleDeleteAdminGroupPermissions =
  (id, uiItem) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(deleteAdminUserGroupPermissions(id, uiItem));

          await Promise.all([
            dispatch(getAdminUserGroupPermissions(id)),
            dispatch(getAdminUiItems(id)),
          ]);
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

export const handleAddAdminUsersGroup: HandleAddAdminUsersGroups = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupData(data);

        await dispatch(addAdminUserUsersGroup(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_USERS_GROUP));
        await dispatch(handleGetAdminUsersGroup());
      },
      dispatch
    );
  };

export const handleAddGroupPermission: HandleAddAdminGroupPermissions = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const id = data && data.userGroupId;
        const preparedValues = AdminGroupPermissionPreparedToSend(data);

        await dispatch(addAdminGroupPermission(preparedValues));

        await Promise.all([
          dispatch(getAdminUserGroupPermissions(id)),
          dispatch(getAdminUiItems(id)),
        ]);

        dispatch(resetForm(formNamesConst.EDIT_GROUP_PERMISSION));
      },
      dispatch
    );
  };

export const handleAddAdminActiveUsers: HandleAddAdminActiveUsers = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const id = data && data.userGroupId;
        const username = data.username && data.username.value;

        await dispatch(addAdminActiveUsers({
          user_group_id: id,
          user_id: username,
        }));

        await Promise.all([
          dispatch(getAdminActiveUsers(id)),
          dispatch(getAdminUserGroupMembers(id)),
        ]);

        dispatch(resetForm(formNamesConst.EDIT_USER_GROUP_MEMBERS));
      },
      dispatch
    );
  };

export const handleUpdateAdminUsersGroup: HandleUpdateAdminUsersGroup = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupData(data);

        await dispatch(updateAdminUsersGroup(preparedValues));
        await dispatch(handleGetAdminUsersGroup());
      },
      dispatch
    );
  };
