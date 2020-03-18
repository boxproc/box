import { createSelector } from 'reselect';
import { StoreState } from 'store';

export const selectDictionaryEventsItems = (state: StoreState) =>
  state.administration.events.events;

export const selectDictionaryEventsOptions = createSelector(
  selectDictionaryEventsItems,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.name,
    };
  })
);
