import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultAdminUsersGroupItems = (state: StoreState) =>
  state.administration.adminUsersGroup.users_group.asMutable();

// export const selectDefaultFilterUsers = (state: StoreState) =>
//  state.administration.adminUsers.filterUsers;

export const selectUsersGroupEditorItems = createSelector(
    selectDefaultAdminUsersGroupItems,
    selectInstitutionsOptions,
    (items, institutions) => items && items.map(item => {
    return {
      ...item,
      institutionId: item && institutions.find(el => el.value === item.institution_id).label,
    };
  })
);
