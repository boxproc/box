import { createSelector } from 'reselect';

import { permissionTypesOptions } from 'consts';

import { StoreState } from 'store';
import { selectAdminInstitutionsOptions } from 'store/domains/administration/institutions';
import { selectActiveItemId } from 'store/domains/utils';

export const selectDefaultAdminUsersGroupItems = (state: StoreState) =>
  state.administration.userGroups.usersGroups;

export const selectDefaultAdminUserGroupMembers = (state: StoreState) =>
  state.administration.userGroups.userGroupMembers;

export const selectAdminGroupPermissions = (state: StoreState) =>
  state.administration.userGroups.groupPermissions;

export const selectDefaultAdminActiveUsers = (state: StoreState) =>
  state.administration.userGroups.allActiveUsers;

export const selectDefaultAdminUiItems = (state: StoreState) =>
  state.administration.userGroups.uiItems;

export const selectUsersGroupEditorItems = createSelector(
  selectDefaultAdminUsersGroupItems,
  items => items && items.map(item => {

    const {
      id,
      name,
      institution_id,
      institution_name,
    } = item;

    return {
      id,
      institutionName: institution_name,
      name,
      institutionId: institution_id,
    };
  })
);

export const selectActiveUsersItems = createSelector(
  selectDefaultAdminActiveUsers,
  data => data && data.asMutable().map(el => {
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
    const permission = permissionTypesOptions.find(el => el.value === item.permission);

    return {
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
      permission: permission && permission.label,
    };
  })
);

export const selectAdminGroupPermissionsUiItems = createSelector(
  selectDefaultAdminUiItems,
  data => data && data.asMutable().map(el => {
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

export const selectUsersGroupInstitutionName = createSelector(
  selectUsersGroupValues,
  group => group.institutionId && group.institutionId.label
);

export const selectUsersGroupName = createSelector(
  selectUsersGroupValues,
  group => group && group.name
);
