import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import { formNamesConst, permissionTypesOptions } from 'consts';

import { IStoreState } from 'store';
import { institutionsOptionsSelector } from 'store/domains/admin/institutions';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareUiItemLabel } from './utils';

import { ISelectValue } from 'types';

/**
 * Users groups selectors
 */

export const defaultUsersGroupsSelector = (state: IStoreState) => state.admin.userGroups.groups;

export const usersGroupsSelector = createSelector(
  defaultUsersGroupsSelector,
  data => data && data.map(el => {

    const { id, name, institution_id, institution_name } = el;

    return {
      id,
      institutionName: institution_name,
      name,
      institutionId: institution_id,
    };
  })
);

export const currentUsersGroupSelector = createSelector(
  defaultUsersGroupsSelector,
  institutionsOptionsSelector,
  activeItemIdSelector,
  (groups, institutions, currentId) => {
    if (!groups) {
      return null;
    }

    const currentGroup = groups.find(group => group.id === currentId);

    return {
      id: currentGroup && currentGroup.id,
      name: currentGroup && currentGroup.name,
      institutionId: currentGroup
        && institutions.find(el => el.value === currentGroup.institution_id),
    };
  }
);

export const currentUsersGroupInstNameSelector = createSelector(
  currentUsersGroupSelector,
  data => data.institutionId && data.institutionId.label
);

export const currentUsersGroupNameSelector = createSelector(
  currentUsersGroupSelector,
  data => data && data.name
);

export const isLoadingUsersGroupsSelector = createLoadingSelector([
  ActionTypeKeys.GET_USERS_GROUPS,
]);

export const isAddingUsersGroupSelector = createLoadingSelector([
  ActionTypeKeys.ADD_USERS_GROUP,
]);

export const isUpdatingUsersGroupSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_USERS_GROUP,
]);

/**
 * Users group members selectors
 */

export const defaultUsersGroupMembersSelector = (state: IStoreState) =>
  state.admin.userGroups.members;

export const usersGroupMembersSelector = createSelector(
  defaultUsersGroupMembersSelector,
  data => data && data.map(el => {
    return {
      id: el.id,
      username: `${el.first_name} ${el.last_name} `,
    };
  })
);

export const defaultUsersGroupUsersSelector = (state: IStoreState) =>
  state.admin.userGroups.users;

export const usersGroupUsersSelector = createSelector(
  defaultUsersGroupUsersSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id,
      label: `${el.first_name} ${el.last_name}`,
    };
  })
);

export const isLoadingUsersGroupMembers = createLoadingSelector([
  ActionTypeKeys.GET_USERS_GROUP_MEMBERS,
]);

export const isAddingUsersGroupMember = createLoadingSelector([
  ActionTypeKeys.ADD_USERS_GROUP_MEMBER,
]);

/**
 * Users group permissions selectors
 */

export const defaultUsersGroupPermissionsSelector = (state: IStoreState) =>
  state.admin.userGroups.permissions;

export const defaultUsersGroupUiItemsSelector = (state: IStoreState) =>
  state.admin.userGroups.uiItems;

export const usersGroupPermissionsSelector = createSelector(
  defaultUsersGroupPermissionsSelector,
  items => items && items.map(item => {
    const permission = permissionTypesOptions.find(el => el.value === item.permission);
    const uiItemLabel = prepareUiItemLabel(item.ui_item);

    return {
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
      uiItemLabel,
      permission: permission && permission.label,
    };
  })
);

export const usersGroupUiItemsSelector = createSelector(
  defaultUsersGroupUiItemsSelector,
  getFormValues(formNamesConst.ADD_USERS_GROUP_PERMISSIONS),
  (data, formData) => data && data.length && data.asMutable().map(el => {
    const itemValue = el.ui_item;
    const itemLabel = prepareUiItemLabel(el.ui_item);

    const arr = el.ui_item.split('/');
    const parentItem = arr.slice(0, arr.length - 1).join('/');

    const isParentChosen = formData && formData['uiItems']
      && formData['uiItems'].find((item: ISelectValue) => item.value === parentItem);
    const isParentNotInGroup = data.find(item => item.ui_item === parentItem);
    const isDisabled = isParentNotInGroup && !isParentChosen;

    return {
      value: itemValue,
      label: itemLabel,
      isDisabled,
    };
  }));

export const isLoadingUsersGroupPermissionsSelector = createLoadingSelector([
  ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS,
]);

export const isAddingUsersGroupPermissionsSelector = createLoadingSelector([
  ActionTypeKeys.ADD_USERS_GROUP_PERMISSIONS,
]);
