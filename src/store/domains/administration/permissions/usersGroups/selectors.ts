import { createSelector } from 'reselect';

import { permissionTypesOptions } from 'consts';

import { StoreState } from 'store';
import { institutionsOptionsSelector } from 'store/domains/administration/institutions';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';

/**
 * Users groups selectors
 */

export const defaultUsersGroupsSelector = (state: StoreState) =>
  state.administration.userGroups.groups;

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

export const isAddingUsersGroupSelector = createLoadingSelector([
  ActionTypeKeys.ADD_USERS_GROUP,
]);

export const isUpdatingUsersGroupSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_USERS_GROUP,
]);

export const isLoadingUsersGroupsSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_USERS_GROUP,
]);

/**
 * Users group members selectors
 */

export const defaultUsersGroupMembersSelector = (state: StoreState) =>
  state.administration.userGroups.members;

export const usersGroupMembersSelector = createSelector(
  defaultUsersGroupMembersSelector,
  data => data && data.map(el => {
    return {
      id: el.id,
      username: `${el.first_name} ${el.last_name} `,
    };
  })
);

export const defaultUsersGroupUsersSelector = (state: StoreState) =>
  state.administration.userGroups.users;

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

export const defaultUsersGroupPermissionsSelector = (state: StoreState) =>
  state.administration.userGroups.permissions;

export const defaultUsersGroupUiItemsSelector = (state: StoreState) =>
  state.administration.userGroups.uiItems;

export const usersGroupPermissionsSelector = createSelector(
  defaultUsersGroupPermissionsSelector,
  items => items && items.map(item => {
    const permission = permissionTypesOptions.find(el => el.value === item.permission);

    return {
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
      permission: permission && permission.label,
    };
  })
);

export const usersGroupUiItemsSelector = createSelector(
  defaultUsersGroupUiItemsSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.ui_item,
      label: el.ui_item,
    };
  })
);

export const isLoadingUsersGroupPermissionsSelector = createLoadingSelector([
  ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS,
]);

export const isAddingUsersGroupPermissionsSelector = createLoadingSelector([
  ActionTypeKeys.ADD_USERS_GROUP_PERMISSIONS,
]);
