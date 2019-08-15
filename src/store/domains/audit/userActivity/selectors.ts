import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';
import { AuditUserActivitiesFilter } from './types';
import { preparedValuesToRender } from './utils';

export const selectDefaultAuditUsers = (state: StoreState) =>
  state.audit.userActivities.users_activity.asMutable();

export const selectDefaultAuditUserActivities = (state: StoreState) =>
  state.audit.userActivities.filtered_users.asMutable();

export const selectAuditUsers = createSelector(
  selectDefaultAuditUsers,
  data => {
    if (!data || !data.length) {
      return [];
    }

    return data.map(el => {
      return {
        value: el.username,
        label: `${el.first_name} ${el.last_name}`,
      };
    });
  }
);

export const preparedFilterParamsToSend = (params: Partial<AuditUserActivitiesFilter>) => {
  if (!params) {
    return null;
  }

  const { institutionId, username, datetimeFrom, datetimeTo } = params;

  return {
    institution_id: institutionId && institutionId.value,
    username: username && username.value,
    datetime_from: datetimeFrom && datetimeFrom,
    datetime_to: datetimeTo && datetimeTo,
  };
};

export const selectAuditUserActivities = createSelector(
  selectDefaultAuditUserActivities,

  items => items && items.map(item => {
    return {
      ...preparedValuesToRender(item),
      username: `${item.first_name} ${item.last_name}` ,
    };
  })
);
