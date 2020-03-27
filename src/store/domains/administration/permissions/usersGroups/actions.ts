import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store';
import {
  ActionTypeKeys,
  IAddUsersGroupAction,
  IAddUsersGroupPermissionsAction,
  IAddUsersGroupUserAction,
  IDeleteUsersGroupMemberAction,
  IDeleteUsersGroupPermissionAction,
  IGetUsersGroupMembersAction,
  IGetUsersGroupPermissionsAction,
  IGetUsersGroupsAction,
  IGetUsersGroupUiItemsAction,
  IGetUsersGroupUsersAction,
  IUpdateUsersGroupAction,
} from './actionTypes';
import * as api from './api';
import {
  IUsersGroup,
  IUsersGroupEditable,
  IUsersGroupMemberDeleteReq,
  IUsersGroupMemberDeleteReqToSend,
  IUsersGroupPermissionEditable,
  IUsersGroupPermissionReq,
} from './types';

import { Thunk, VoidPromiseThunk } from 'types';

import { preparePermissionToSend, prepareUsersGroupData } from './utils';

import { errorDecoratorUtil } from 'utils';

export type TGetUsersGroup = () => IGetUsersGroupsAction;
export type THandleGetUsersGroup = VoidPromiseThunk;

export type TGetUserGroupMembers = (id: number) => IGetUsersGroupMembersAction;
export type THandleGetUserGroupMembers = (id: number) => Thunk<void>;

export type TGetUsersGroupUiItems = (id: number) => IGetUsersGroupUiItemsAction;
export type THandleGetUsersGroupUiItems = (id: number) => Thunk<void>;

export type TGetUserGroupPermissions = (id: number) => IGetUsersGroupPermissionsAction;
export type THandleGetGroupPermissions = (id: number) => Thunk<void>;

export type TGetActiveUsers = (id: number) => IGetUsersGroupUsersAction;
export type THandleGetActiveUsers = (id: number) => Thunk<void>;

export type TDeleteUserGroupMembers = (id: number, userId: number) => IDeleteUsersGroupMemberAction;
export type THandleDeleteUserGroupMembers = (id: number, userId: number) => Thunk<void>;

export type TDeleteGroupPermissions = (id: number, uiItem: string) =>
  IDeleteUsersGroupPermissionAction;
export type THandleDeleteGroupPermissions = (id: number, uiItem: string) => Thunk<void>;

export type TAddUsersGroups = (data: Partial<IUsersGroup>) => IAddUsersGroupAction;
export type THandleAddUsersGroups = (data: Partial<IUsersGroupEditable>) => Thunk<void>;

export type TAddActiveUsers = (data: Partial<IUsersGroupMemberDeleteReqToSend>) =>
  IAddUsersGroupUserAction;
export type THandleAddActiveUsers = (data: Partial<IUsersGroupMemberDeleteReq>) => Thunk<void>;

export type TAddGroupPermissions = (data: Partial<IUsersGroupPermissionReq>) =>
  IAddUsersGroupPermissionsAction;
export type THandleAddGroupPermissions = (data: Partial<IUsersGroupPermissionEditable>) =>
  Thunk<void>;

export type TUpdateUsersGroup = (data: Partial<IUsersGroup>) => IUpdateUsersGroupAction;
export type THandleUpdateUsersGroup = (data: Partial<IUsersGroupEditable>) => Thunk<void>;

export type TResetUsersGroup = () => void;

export const getUsersGroup: TGetUsersGroup = () => ({
  type: ActionTypeKeys.GET_USERS_GROUPS,
  payload: api.getUsersGroup(),
});

export const getActiveUsers: TGetActiveUsers = id => ({
  type: ActionTypeKeys.GET_ACTIVE_USERS,
  payload: api.getActiveUsers(id),
});

export const getUserGroupMembers: TGetUserGroupMembers = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_MEMBERS,
  payload: api.getUserGroupMembers(id),
});

export const getUsersGroupUiItems: TGetUsersGroupUiItems = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS,
  payload: api.getUiItems(id),
});

export const getUserGroupPermissions: TGetUserGroupPermissions = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS,
  payload: api.getUserGroupPermissions(id),
});

export const deleteUserGroupMembers: TDeleteUserGroupMembers = (id, userId) => ({
  type: ActionTypeKeys.DELETE_USERS_GROUP_MEMBER,
  payload: api.deleteUserGroupMembers(id, userId),
});

export const deleteUserGroupPermissions: TDeleteGroupPermissions = (id, uiItem) => ({
  type: ActionTypeKeys.DELETE_USERS_GROUP_PERMISSION,
  payload: api.deleteUserGroupPermissions(id, uiItem),
});

export const addUserUsersGroup: TAddUsersGroups = data => ({
  type: ActionTypeKeys.ADD_USERS_GROUP,
  payload: api.addUsersGroup(data),
});

export const addActiveUsers: TAddActiveUsers = data => ({
  type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER,
  payload: api.addActiveUsers(data),
});

export const addGroupPermission: TAddGroupPermissions = data => ({
  type: ActionTypeKeys.ADD_USERS_GROUP_PERMISSIONS,
  payload: api.addGroupPermission(data),
});

export const updateUsersGroup: TUpdateUsersGroup = data => ({
  type: ActionTypeKeys.UPDATE_USERS_GROUP,
  payload: api.updateUsersGroup(data),
});

export const resetUsersGroup: TResetUsersGroup = () => ({
  type: ActionTypeKeys.RESET_USERS_GROUPS,
});

export const handleGetUsersGroup: THandleGetUsersGroup = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroup());
      },
      dispatch
    );
  };

export const handleGetActiveUsers: THandleGetActiveUsers = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getActiveUsers(id));
      },
      dispatch
    );
  };

export const handleDeleteUserGroupMembers: THandleDeleteUserGroupMembers =
  (id, userId) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(deleteUserGroupMembers(id, userId));

          await Promise.all([
            dispatch(getActiveUsers(id)),
            dispatch(getUserGroupMembers(id)),
          ]);
        },
        dispatch
      );
    };

export const handleDeleteGroupPermissions: THandleDeleteGroupPermissions =
  (id, uiItem) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(deleteUserGroupPermissions(id, uiItem));

          await Promise.all([
            dispatch(getUserGroupPermissions(id)),
            dispatch(getUsersGroupUiItems(id)),
          ]);
        },
        dispatch
      );
    };

export const handleGetUserGroupMembers: THandleGetUserGroupMembers = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUserGroupMembers(id));
      },
      dispatch
    );
  };

export const handleGetUsersGroupUiItems: THandleGetUsersGroupUiItems = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroupUiItems(id));
      },
      dispatch
    );
  };

export const handleGetGroupPermission: THandleGetGroupPermissions = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUserGroupPermissions(id));
      },
      dispatch
    );
  };

export const handleAddUsersGroup: THandleAddUsersGroups = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareUsersGroupData(data);

        await dispatch(addUserUsersGroup(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_USERS_GROUP));
        await dispatch(handleGetUsersGroup());
      },
      dispatch
    );
  };

export const handleAddGroupPermission: THandleAddGroupPermissions = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const id = data && data.userGroupId;
        const preparedData = preparePermissionToSend(data);

        await dispatch(addGroupPermission(preparedData));

        await Promise.all([
          dispatch(getUserGroupPermissions(id)),
          dispatch(getUsersGroupUiItems(id)),
        ]);

        dispatch(resetForm(formNamesConst.EDIT_GROUP_PERMISSION));
      },
      dispatch
    );
  };

export const handleAddActiveUsers: THandleAddActiveUsers = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const id = data && data.userGroupId;
        const username = data.username && data.username.value;

        await dispatch(addActiveUsers({
          user_group_id: id,
          user_id: username,
        }));

        await Promise.all([
          dispatch(getActiveUsers(id)),
          dispatch(getUserGroupMembers(id)),
        ]);

        dispatch(resetForm(formNamesConst.EDIT_USER_GROUP_MEMBERS));
      },
      dispatch
    );
  };

export const handleUpdateUsersGroup: THandleUpdateUsersGroup = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareUsersGroupData(data);

        await dispatch(updateUsersGroup(preparedData));
        await dispatch(handleGetUsersGroup());
      },
      dispatch
    );
  };
