import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store';
import {
  ActionTypeKeys,
  IAddUsersGroupAction,
  IAddUsersGroupMemberAction,
  IAddUsersGroupPermissionsAction,
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
  IUsersGroupMemberReq,
  IUsersGroupMemberReqToSend,
  IUsersGroupPermission,
  IUsersGroupPermissionEditable,
  IUsersGroupPermissionReq,
} from './types';

import { Thunk, VoidPromiseThunk } from 'types';

import { preparePermissionToSend, prepareUsersGroupData } from './utils';

import { errorDecoratorUtil } from 'utils';

/** Get users groups action */

export type TGetUsersGroups = () => IGetUsersGroupsAction;
export type THandleGetUsersGroups = VoidPromiseThunk;

export const getUsersGroups: TGetUsersGroups = () => ({
  type: ActionTypeKeys.GET_USERS_GROUPS,
  payload: api.getUsersGroups(),
});

export const handleGetUsersGroups: THandleGetUsersGroups = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroups());
      },
      dispatch
    );
  };

/** Add users group action */

export type TAddUsersGroup = (data: Partial<IUsersGroup>) => IAddUsersGroupAction;
export type THandleAddUsersGroup = (data: Partial<IUsersGroupEditable>) => Thunk<void>;

export const addUserUsersGroup: TAddUsersGroup = data => ({
  type: ActionTypeKeys.ADD_USERS_GROUP,
  payload: api.addUsersGroup(data),
});

export const handleAddUsersGroup: THandleAddUsersGroup = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareUsersGroupData(data);

        await dispatch(addUserUsersGroup(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_USERS_GROUP));
        await dispatch(handleGetUsersGroups());
      },
      dispatch
    );
  };

/** Update users group action */

export type TUpdateUsersGroup = (data: Partial<IUsersGroup>) => IUpdateUsersGroupAction;
export type THandleUpdateUsersGroup = (data: Partial<IUsersGroupEditable>) => Thunk<void>;

export const updateUsersGroup: TUpdateUsersGroup = data => ({
  type: ActionTypeKeys.UPDATE_USERS_GROUP,
  payload: api.updateUsersGroup(data),
});

export const handleUpdateUsersGroup: THandleUpdateUsersGroup = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareUsersGroupData(data);

        await dispatch(updateUsersGroup(preparedData));
        await dispatch(handleGetUsersGroups());
      },
      dispatch
    );
  };

/** Get users group UI items action */

export type TGetUsersGroupUiItems = (id: number) => IGetUsersGroupUiItemsAction;
export type THandleGetUsersGroupUiItems = (id: number) => Thunk<void>;

export const getUsersGroupUiItems: TGetUsersGroupUiItems = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS,
  payload: api.getUiItems(id),
});

export const handleGetUsersGroupUiItems: THandleGetUsersGroupUiItems = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroupUiItems(id));
      },
      dispatch
    );
  };

/** Get users group members action */

export type TGetUsersGroupMembers = (id: number) => IGetUsersGroupMembersAction;
export type THandleGetUsersGroupMembers = (id: number) => Thunk<void>;

export const getUsersGroupMembers: TGetUsersGroupMembers = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_MEMBERS,
  payload: api.getUsersGroupMembers(id),
});

export const handleGetUsersGroupMembers: THandleGetUsersGroupMembers = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroupMembers(id));
      },
      dispatch
    );
  };

/** Get users group users action */

export type TGetUsersGroupUsers = (id: number) => IGetUsersGroupUsersAction;
export type THandleUsersGroupUsers = (id: number) => Thunk<void>;

export const getUsersGroupUsers: TGetUsersGroupUsers = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_USERS,
  payload: api.getUsersGroupUsers(id),
});

export const handleGetUsersGroupUsers: THandleUsersGroupUsers = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroupUsers(id));
      },
      dispatch
    );
  };

/** Get users group permissions action */

export type TGetUsersGroupPermissions = (id: number) => IGetUsersGroupPermissionsAction;
export type THandleGetUsersGroupPermissions = (id: number) => Thunk<void>;

export const getUsersGroupPermissions: TGetUsersGroupPermissions = id => ({
  type: ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS,
  payload: api.getUsersGroupPermissions(id),
});

export const handleGetUsersGroupPermissions: THandleGetUsersGroupPermissions = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersGroupPermissions(id));
      },
      dispatch
    );
  };

/** Delete member from the users group action */

export type TDeleteUsersGroupMember = (id: number, userId: number) => IDeleteUsersGroupMemberAction;
export type THandleDeleteUsersGroupMember = (id: number, userId: number) => Thunk<void>;

export const deleteUsersGroupMember: TDeleteUsersGroupMember = (id, userId) => ({
  type: ActionTypeKeys.DELETE_USERS_GROUP_MEMBER,
  payload: api.deleteUsersGroupMember(id, userId),
});

export const handleDeleteUsersGroupMember: THandleDeleteUsersGroupMember = (id, userId) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteUsersGroupMember(id, userId));

        await Promise.all([
          dispatch(getUsersGroupUsers(id)),
          dispatch(getUsersGroupMembers(id)),
        ]);
      },
      dispatch
    );
  };

/** Delete permission from the users group action */

export type TDeleteUsersGroupPermission = (id: number, uiItem: string) =>
  IDeleteUsersGroupPermissionAction;
export type THandleDeleteUsersGroupPermission = (id: number, uiItem: string) => Thunk<void>;

export const deleteUsersGroupPermission: TDeleteUsersGroupPermission = (id, uiItem) => ({
  type: ActionTypeKeys.DELETE_USERS_GROUP_PERMISSION,
  payload: api.deleteUsersGroupPermission(id, uiItem),
});

export const handleDeleteUsersGroupPermission: THandleDeleteUsersGroupPermission = (id, uiItem) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteUsersGroupPermission(id, uiItem));

        await Promise.all([
          dispatch(getUsersGroupPermissions(id)),
          dispatch(getUsersGroupUiItems(id)),
        ]);
      },
      dispatch
    );
  };

/** Add permissions to the users group action */

export type TAddUsersGroupPermissions = (data: Partial<IUsersGroupPermissionReq>) =>
  IAddUsersGroupPermissionsAction;
export type THandleAddUsersGroupPermissions = (data: Partial<IUsersGroupPermissionEditable>) =>
  Thunk<void>;

export const addGroupPermission: TAddUsersGroupPermissions = data => ({
  type: ActionTypeKeys.ADD_USERS_GROUP_PERMISSIONS,
  payload: api.addGroupPermission(data),
});

export const handleAddUsersGroupPermission: THandleAddUsersGroupPermissions = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const id = data && data.userGroupId;
        const preparedData = preparePermissionToSend(data);

        await dispatch(addGroupPermission(preparedData));

        await Promise.all([
          dispatch(getUsersGroupPermissions(id)),
          dispatch(getUsersGroupUiItems(id)),
        ]);

        dispatch(resetForm(formNamesConst.ADD_USERS_GROUP_PERMISSIONS));
      },
      dispatch
    );
  };

/** Update permission action */

export type THandleUpdateUsersGroupPermission = (data: Partial<IUsersGroupPermission>) =>
  Thunk<void>;

export const handleUpdateUsersGroupPermission: THandleUpdateUsersGroupPermission = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const { uiItem, userGroupId, permission } = data;

        const preparedData = {
          user_group_id: userGroupId,
          ui_items: [uiItem],
          permission: permission && permission.value,
        };

        await dispatch(deleteUsersGroupPermission(userGroupId, uiItem));
        await dispatch(addGroupPermission(preparedData));
        await dispatch(getUsersGroupPermissions(userGroupId));
      },
      dispatch
    );
  };

/** Add member to the users group action */

export type TAddUsersGroupMember = (data: Partial<IUsersGroupMemberReqToSend>) =>
  IAddUsersGroupMemberAction;
export type THandleAddUsersGroupMember = (data: Partial<IUsersGroupMemberReq>) => Thunk<void>;

export const addUsersGroupMember: TAddUsersGroupMember = data => ({
  type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER,
  payload: api.addUsersGroupMember(data),
});

export const handleAddUsersGroupMember: THandleAddUsersGroupMember = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const id = data && data.userGroupId;
        const username = data.username && data.username.value;

        await dispatch(addUsersGroupMember({
          user_group_id: id,
          user_id: username,
        }));

        await Promise.all([
          dispatch(getUsersGroupUsers(id)),
          dispatch(getUsersGroupMembers(id)),
        ]);

        dispatch(resetForm(formNamesConst.EDIT_USERS_GROUP_MEMBERS));
      },
      dispatch
    );
  };

/** Reset users groups action */

export type TResetUsersGroups = () => void;

export const resetUsersGroups: TResetUsersGroups = () => ({
  type: ActionTypeKeys.RESET_USERS_GROUPS,
});
