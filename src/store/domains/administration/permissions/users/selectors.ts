import { createSelector } from 'reselect';

import { userStatusWith2faOptions } from 'consts';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { selectInstitutionsOptions } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultUsersSelector = (state: StoreState) => state.administration.users.users;

export const usersSelector = createSelector(
  defaultUsersSelector,
  selectInstitutionsOptions,
  (users, institutions) => users && users.map(user => {
    const institution = institutions.find(el => el.value === user.institution_id);

    return prepareDataToRender(user, institution);
  })
);

/**
 * Current user selectors
 */

export const currentUserSelector = createSelector(
  defaultUsersSelector,
  activeItemIdSelector,
  selectInstitutionsOptions,
  (users, currentId, institutions) => {
    const currentUser = users && users.find(user => user.id === currentId);
    const institution = institutions.find(el => el.value === currentUser.institution_id);

    return {
      ...prepareDataToRender(currentUser),
      status: currentUser && userStatusWith2faOptions.find(el => el.value === currentUser.status),
      institution,
    };
  }
);

export const currentUsernameSelector = createSelector(
  currentUserSelector,
  data => data && data.username
);

/**
 * Usernames selectors
 */

export const defaultUsernamesSelector = (state: StoreState) => state.administration.users.usernames;

export const usernamesOptionsSelector = createSelector(
  defaultUsernamesSelector,
  users => users && users.asMutable().map(user => {
    return {
      value: user.id,
      label: user.username,
    };
  })
);

/**
 * Users loading selectors
 */

export const isAddingUserSelector = createLoadingSelector([
  ActionTypeKeys.ADD_USER,
]);

export const isUpdatingUserSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_USER,
]);

export const isDeletingUserSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_USER,
]);

export const isFilteringUsersSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_USERS,
]);

export const isLoadingUsernamesSelector = createLoadingSelector([
  ActionTypeKeys.GET_USERNAMES,
]);
