import { createSelector } from 'reselect';

import { permissionTypesOptions } from 'consts';

import { selectAdminInstitutionsOptions } from 'store/domains/administration/institutions';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

export const selectDefaultAdminUsersGroupItems = (state: StoreState) =>
  state.administration.userGroups.usersGroups.asMutable();

export const selectDefaultAdminUserGroupMembers = (state: StoreState) =>
  state.administration.userGroups.userGroupMembers.asMutable();

export const selectAdminGroupPermissions = (state: StoreState) =>
  state.administration.userGroups.groupPermissions.asMutable();

export const selectDefaultAdminActiveUsers = (state: StoreState) =>
  state.administration.userGroups.allActiveUsers.asMutable();

export const selectDefaultAdminUiItems = (state: StoreState) =>
  state.administration.userGroups.uiItems.asMutable();

export const selectUsersGroupEditorItems = createSelector(
  selectDefaultAdminUsersGroupItems,
  items => items && items.map(item => {

    return {
      ...item,
      institutionId: item.institution_id,
      institutionName: item.institution_name,
    };
  })
);

export const selectActiveUsersItems = createSelector(
  selectDefaultAdminActiveUsers,
  data => data && data.map(el => {
    return {
      value: el.id,
      label: `${el.first_name} ${el.last_name}`,
    };
  })
);

export const selectAdminUserGroupMembers = createSelector(
  selectDefaultAdminUserGroupMembers,
  data => data && data.map(el => {
    return {
      id: el.id,
      username: `${el.first_name} ${el.last_name} `,

    };
  })
);

export const selectAdminGroupPermissionsItems = createSelector(
  selectAdminGroupPermissions,
  items => items && items.map(item => {
    return {
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
      permission:
        permissionTypesOptions.find(el => el.value === item.permission)
        && permissionTypesOptions.find(el => el.value === item.permission).label,
    };
  })
);

export const selectAdminGroupPermissionsItem = createSelector(
  selectAdminGroupPermissions,
  items => items && items.map(item => {
    return {
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
      permission: permissionTypesOptions.find(el => el.value === item.permission).value,
    };
  })
);

export const selectAdminGroupPermissionsUiItems = createSelector(
  selectDefaultAdminUiItems,
  data => data && data.map(el => {
    return {
      value: el.ui_item,
      label: el.ui_item,
    };
  })
);

export const selectUsersGroupValues = createSelector(
  selectDefaultAdminUsersGroupItems,
  selectAdminInstitutionsOptions,
  selectActiveItemId,
  (items, institutions, currentId) => {
    if (!items) {
      return null;
    }

    const current = items.find(item => item.id === currentId);

    return {
      id: current && current.id,
      name: current && current.name,
      institutionId: current && institutions.find(el => el.value === current.institution_id),
    };
  }
);

export const selectUsersGroupName = createSelector(
  selectUsersGroupValues,
  group => group && group.name
);
