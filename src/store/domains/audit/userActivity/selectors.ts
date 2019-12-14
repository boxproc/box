import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { preparedDataToRender } from './utils';

export const selectDefaultAuditUsers = (state: StoreState) =>
  state.audit.userActivity.usersActivity.asMutable();

export const selectDefaultAuditUserActivity = (state: StoreState) =>
  state.audit.userActivity.filteredUsers.asMutable();

export const selectAuditUsers = createSelector(
  selectDefaultAuditUsers,
  data => {
    if (!data) {
      return null;
    }

    return data.map(el => {
      return {
        value: el.username,
        label: `${el.first_name} ${el.last_name}`,
      };
    });
  }
);

export const selectAuditUserActivity = createSelector(
  selectDefaultAuditUserActivity,
  items => items && items.map(item => preparedDataToRender(item))
);
