import { StoreState } from 'store/StoreState';

import { statusTypesOptions } from 'consts';
import { createSelector } from 'reselect';

export const selectDefaultAdminUsersItems = (state: StoreState) =>
  state.administration.adminUsers.users.asMutable();

export const selectDefaultFilterUsers = (state: StoreState) =>
 state.administration.adminUsers.filterUsers;

export const selectUserEditorItems = createSelector(
  selectDefaultAdminUsersItems,
  items => items && items.map(item => {
    return {
      ...item,
      firstName: item.first_name,
      lastName: item.last_name,
      status : statusTypesOptions.find(el => el.value === item.status).label,
      passwordHash : item.password_hash,
      passwordEntryCounter : item.password_entry_counter,
      datetimeOfLastLogin : item.datetime_of_last_login,
      };
    })
 );


