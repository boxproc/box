import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

export const selectDefaultAdminUsersGroupItems = (state: StoreState) =>
  state.administration.adminUsersGroup.users_group.asMutable();

// export const selectDefaultFilterUsers = (state: StoreState) =>
//  state.administration.adminUsers.filterUsers;

export const selectUserEditorItems = createSelector(
    selectDefaultAdminUsersGroupItems,
    items => items && items.map(item => {
    return {
      ...item,
      institutionId: item.institution_id,
    };
  })
);
