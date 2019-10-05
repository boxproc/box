import { createSelector } from 'reselect';

import { statusTypesLoginOptions } from 'consts';

import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';
import { prepareAdminUserValuesToRender } from './utils';

export const selectDefaultAdminUsersItems = (state: StoreState) =>
  state.administration.users.users;

export const selectUserEditorItems = createSelector(
  selectDefaultAdminUsersItems,
  (items) => items && items.asMutable().map(item => {
    return {
      ...prepareAdminUserValuesToRender(item),
    };
  })
);

export const selectUsersDetails = createSelector(
  selectDefaultAdminUsersItems,
  selectActiveItemId,
  (items, currentId) => {
    const current = items && items.find(item => item.id === currentId);

    return {
      ...prepareAdminUserValuesToRender(current),
      status: current && statusTypesLoginOptions.find(el => el.value === current.status),
    };
  }
);

export const selectDefaultAdminAccessUsers = (state: StoreState) =>
  state.administration.users.adminAccessUsers;

export const selectAdminAccessUsersOptions = createSelector(
  selectDefaultAdminAccessUsers,
  users => users && users.asMutable().map(user => {
    return {
      value: user.id,
      label: user.username,
    };
  })
);

export const selectCurrentPermissionsUsername = createSelector(
  selectUsersDetails,
  item => item && item.username
);
