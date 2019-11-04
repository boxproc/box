import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';
import { selectActiveItemId } from 'store/domains/utils';
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
  AdminGroupPermissionItemEditable,
  AdminGroupPermissionItemResp,
  AdminUserGroupMembersDelete,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupInfoEditable,
  AdminUsersGroupInfoPlainResp,
} from './types';

import { Thunk, VoidPromiseThunk } from 'types';

import {
  AdminGroupPermissionPreparedToSend,
  prepareAdminUsersGroupValuesUnderscore,
} from './utils';

import { errorDecoratorUtil } from 'utils';

export type GetAdminUsersGroup = () => GetAdminUsersGroupAction;
export type HandleGetAdminUsersGroup = VoidPromiseThunk;

export type GetAdminUserGroupMembers = (id: number) => GetAdminUserGroupMembersAction;
export type HandleGetAdminUserGroupMembers = (id: number) => Thunk<void>;

export type GetAdminUiItems = (id: number) => GetAdminUiItemsAction;
export type HandleGetAdminUiItems = (id: number) => Thunk<void>;

export type GetAdminUserGroupPermissions = (userGroupId: number) => GetAdminGroupPermissionsAction;
export type HandleGetAdminGroupPermissions = (userGroupId: number) => Thunk<void>;

export type GetAdminActiveUsers = (userGroupId: number) => GetAdminActiveUsersAction;
export type HandleGetAdminActiveUsers = (userGroupId: number) => Thunk<void>;

export type DeleteAdminUserGroupMembers = (groupId: number, userId: number) =>
  DeleteAdminUserGroupMembersAction;
export type HandleDeleteAdminUserGroupMembers = (groupId: number, userId: number) => Thunk<void>;

export type DeleteAdminGroupPermissions = (groupId: number, uiItem: string) =>
  DeleteAdminGroupPermissionsAction;
export type HandleDeleteAdminGroupPermissions = (groupId: number, uiItem: string) => Thunk<void>;

export type AddAdminUsersGroups = (values: Partial<AdminUsersGroupInfoPlainResp>) =>
  AddAdminUsersGroupAction;
export type HandleAddAdminUsersGroups = (values: Partial<AdminUsersGroupInfoEditable>) =>
  Thunk<void>;

export type AddAdminActiveUsers = (values: Partial<AdminUserGroupMembersDeleteResp>) =>
  AddAdminActiveUsersAction;
export type HandleAddAdminActiveUsers = (values: Partial<AdminUserGroupMembersDelete>) =>
  Thunk<void>;

export type AddAdminGroupPermissions = (values: Partial<AdminGroupPermissionItemResp>) =>
  AddAdminGroupPermissionsAction;
export type HandleAddAdminGroupPermissions = (values: Partial<AdminGroupPermissionItemEditable>) =>
  Thunk<void>;

export type UpdateAdminUsersGroup = (propValues: Partial<AdminUsersGroupInfoPlainResp>) =>
  UpdateAdminUsersGroupAction;
export type HandleUpdateAdminUsersGroup = (propValues: Partial<AdminUsersGroupInfoEditable>) =>
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

export const deleteAdminUserGroupMembers: DeleteAdminUserGroupMembers = (groupId, userId) => ({
  type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS,
  payload: api.deleteAdminUserGroupMembers(groupId, userId),
  meta: userId,
});

export const deleteAdminUserGroupPermissions: DeleteAdminGroupPermissions = (groupId, uiItem) => ({
  type: ActionTypeKeys.DELETE_ADMIN_GROUP_PERMISSIONS,
  payload: api.deleteAdminUserGroupPermissions(groupId, uiItem),
  meta: uiItem,
});

export const addAdminUserUsersGroup: AddAdminUsersGroups = values => ({
  type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP,
  payload: api.addAdminUsersGroup(values),
});

export const addAdminActiveUsers: AddAdminActiveUsers = values => ({
  type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS,
  payload: api.addAdminActiveUsers(values),
});

export const addAdminGroupPermission: AddAdminGroupPermissions = values => ({
  type: ActionTypeKeys.ADD_ADMIN_GROUP_PERMISSIONS,
  payload: api.addAdminGroupPermission(values),
});

export const updateAdminUsersGroup: UpdateAdminUsersGroup = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP,
  payload: api.updateAdminUsersGroup(values),
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
        await dispatch(resetForm(formNamesConst.EDIT_USER_GROUP_MEMBERS));
      },
      dispatch
    );
  };

export const handleDeleteAdminUserGroupMembers: HandleDeleteAdminUserGroupMembers =
  (groupId, userId) =>
    async (dispatch, getState) => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const state = getState();
          const currentGroupId = selectActiveItemId(state);

          await dispatch(deleteAdminUserGroupMembers(groupId, userId));
          await dispatch(getAdminActiveUsers(currentGroupId));
          await dispatch(getAdminUserGroupMembers(currentGroupId));
        },
        dispatch
      );
    };

export const handleDeleteAdminGroupPermissions: HandleDeleteAdminGroupPermissions =
  (groupId, uiItem) =>
    async (dispatch, getState) => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const state = getState();
          const currentGroupId = selectActiveItemId(state);

          await dispatch(deleteAdminUserGroupPermissions(groupId, uiItem));
          await dispatch(getAdminUserGroupPermissions(currentGroupId));
          await dispatch(getAdminUiItems(currentGroupId));
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
        dispatch(closeModal(modalNamesConst.ADD_USERS_GROUP));
        await dispatch(handleGetAdminUsersGroup());
        await dispatch(resetForm(formNamesConst.DEFINE_USER));
      },
      dispatch
    );
  };

export const handleAddGroupPermission: HandleAddAdminGroupPermissions =
  (values) =>
    async (dispatch, getState) => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const state = getState();
          const currentGroupId = selectActiveItemId(state);
          const preparedValues = AdminGroupPermissionPreparedToSend(values);

          await dispatch(addAdminGroupPermission(preparedValues));
          await dispatch(getAdminUserGroupPermissions(currentGroupId));
          await dispatch(getAdminUiItems(currentGroupId));
          await dispatch(resetForm(formNamesConst.EDIT_GROUP_PERMISSION));
        },
        dispatch
      );
    };

export const handleAddAdminActiveUsers: HandleAddAdminActiveUsers = (values) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentGroupId = selectActiveItemId(state);

        await dispatch(addAdminActiveUsers({
          user_group_id: currentGroupId,
          user_id: values.username && values.username.value,
        }));
        await dispatch(getAdminActiveUsers(currentGroupId));
        await dispatch(getAdminUserGroupMembers(currentGroupId));
        await dispatch(resetForm(formNamesConst.EDIT_USER_GROUP_MEMBERS));
      },
      dispatch
    );
  };

export const handleUpdateAdminUsersGroup: HandleUpdateAdminUsersGroup = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminUsersGroupValuesUnderscore(values);

        await dispatch(updateAdminUsersGroup(preparedValues));
        await dispatch(handleGetAdminUsersGroup());
      },
      dispatch
    );
  };
