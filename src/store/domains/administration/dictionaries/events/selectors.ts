import { createSelector } from 'reselect';
import { StoreState } from 'store';

export const selectDefaultDictionaryEventsItems = (state: StoreState) =>
  state.administration.events.events;

export const selectDictionaryEventsItems = createSelector(
  selectDefaultDictionaryEventsItems,
  items => items && items.asMutable()
);

export const selectDictionaryEventsOptions = createSelector(
  selectDefaultDictionaryEventsItems,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.name,
    };
  })
);
