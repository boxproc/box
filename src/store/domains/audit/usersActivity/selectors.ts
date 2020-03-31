import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultUsersActivityUsersSelector = (state: IStoreState) =>
  state.audit.usersActivity.usersActivity;

export const defaultUsersActivitySelector = (state: IStoreState) =>
  state.audit.usersActivity.filteredUsers;

export const usersActivityUsersSelector = createSelector(
  defaultUsersActivityUsersSelector,
  data => {
    if (!data) {
      return null;
    }

    return data.asMutable().map(el => {
      return {
        value: el.username,
        label: `${el.first_name} ${el.last_name}`,
      };
    });
  }
);

export const usersActivitySelector = createSelector(
  defaultUsersActivitySelector,
  data => data && data.map(el => prepareDataToRender(el))
);

export const isUsersActivityLoadingSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_USERS_ACTIVITY,
]);

export const isFilteringUsersActivityByIDSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_USERS_ACTIVITY_BY_ID,
]);

export const isUsersActivityUsersLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_USERS,
]);
