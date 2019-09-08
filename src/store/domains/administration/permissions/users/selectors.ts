import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { statusTypesOptions } from 'consts';
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

export const selectCurrentUserId = (state: StoreState) =>
  state.administration.users.currentUserId;

export const selectUsersValues = createSelector(
  selectDefaultAdminUsersItems,
  selectCurrentUserId,
  (items, currentId) => {
    const current = items && items.find(item => item.id === currentId);

    return {
      ...prepareAdminUserValuesToRender(current),
      status: current && statusTypesOptions.find(el => el.value === current.status),
    };
  }
);
