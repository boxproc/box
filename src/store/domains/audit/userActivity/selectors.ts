import { StoreState } from 'store/StoreState';

export const selectDefaultAuditUserActivities = (state: StoreState) =>
  state.userActivities.users_activity.asMutable();
