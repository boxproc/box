import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

import { permissionTypesOptions } from 'consts';

import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultAdminUsersGroupItems = (state: StoreState) =>
  state.administration.adminUsersGroup.usersGroups;

export const selectAdminUserGroupMembers = (state: StoreState) =>
  state.administration.adminUsersGroup.userGroupMembers.asMutable();

export const selectAdminGroupPermissions = (state: StoreState) =>
  state.administration.adminUsersGroup.groupPermissions.asMutable();

export const selectDefaultAdminActiveUsers = (state: StoreState) =>
  state.administration.adminUsersGroup.allActiveUsers.asMutable();

export const selectDefaultAdminUiItems = (state: StoreState) =>
  state.administration.adminUsersGroup.uiItems.asMutable();

export const selectUsersGroupEditorItems = createSelector(
  selectDefaultAdminUsersGroupItems,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...item,
      institutionId: item && institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectActiveUsersItems = createSelector(
  selectDefaultAdminActiveUsers,
  data => data && data.map(el => {
    return {
      value: el.id,
      label: el.username,
    };
  })
);

export const selectAdminGroupPermissionsItems = createSelector(
  selectAdminGroupPermissions,
  items => items && items.map(item => {
    return {
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
      permission: permissionTypesOptions.find(el => el.value === item.permission).label,
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
