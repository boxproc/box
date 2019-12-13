import { createSelector } from 'reselect';

import { statusTypes2faLoginOptions } from 'consts';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';
import { prepareAdminUserDataToRender } from './utils';

export const selectDefaultAdminUsersItems = (state: StoreState) =>
  state.administration.users.users;

export const selectUserEditorItems = createSelector(
  selectDefaultAdminUsersItems,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return prepareAdminUserDataToRender(item, institution);
  })
);

export const selectUsersDetails = createSelector(
  selectDefaultAdminUsersItems,
  selectActiveItemId,
  selectInstitutionsOptions,
  (items, currentId, institutions) => {
    const current = items && items.find(item => item.id === currentId);
    const institution = institutions.find(el => el.value === current.institution_id);

    return {
      ...prepareAdminUserDataToRender(current),
      status: current && statusTypes2faLoginOptions.find(el => el.value === current.status),
      institution,
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
