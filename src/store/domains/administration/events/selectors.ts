import { StoreState } from 'store/StoreState';

export const selectAdminEventsItems = (state: StoreState) =>
  state.administration.adminEvents.events.asMutable();
