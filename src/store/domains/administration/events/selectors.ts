import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectAdminEventsItems = (state: StoreState) =>
  state.administration.adminEvents.events.asMutable();

export const selectAdminEventsOptions = createSelector(
  selectAdminEventsItems,
  items => items.map(item => {
    return {
      value: item.id, label: item.name,
    };
  })
);
