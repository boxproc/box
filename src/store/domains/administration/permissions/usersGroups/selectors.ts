import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultAdminUsersGroupItems = (state: StoreState) =>
  state.administration.adminUsersGroup.usersGroups;

export const selectAdminUserGroupMembers = (state: StoreState) =>
  state.administration.adminUsersGroup.userGroupMembers.asMutable();

export const selectDefaultAdminActiveUsers = (state: StoreState) =>
  state.administration.adminUsersGroup.allActiveUsers.asMutable();

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
