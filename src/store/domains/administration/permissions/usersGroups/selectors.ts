import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

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

// export const selectDefaultFilterUsers = (state: StoreState) =>
//  state.administration.adminUsers.filterUsers;

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
//    selectAdminUserGroupMembers,
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
     ...item,
      userGroupId: item.user_group_id,
      uiItem: item.ui_item,
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
