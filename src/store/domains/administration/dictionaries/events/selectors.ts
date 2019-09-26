import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDictionaryEventsItems = (state: StoreState) =>
  state.administration.events.events.asMutable();

export const selectDictionaryEventsOptions = createSelector(
  selectDictionaryEventsItems,
  items => items && items.map(item => {
    return {
      value: item.id,
      label: item.name,
    };
  })
);
