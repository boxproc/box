import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectAdminEventsItems = (state: StoreState) =>
  state.administration.events.events.asMutable();

export const selectAdminEventsOptions = createSelector(
  selectAdminEventsItems,
  items => items.map(item => {
    return {
      value: item.id, label: item.name,
    };
  })
);
