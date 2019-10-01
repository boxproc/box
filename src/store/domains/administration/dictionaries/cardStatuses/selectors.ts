import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDefaultDictionaryCardStatusesItems = (state: StoreState) =>
  state.administration.cardStatuses.cardStatuses.asMutable();

export const selectCardStatusesOptions = createSelector(
  selectDefaultDictionaryCardStatusesItems,
  statuses => statuses && statuses.map(status => {
    const { id, name } = status;

    return {
      value: id,
      label: name,
    };
  })
);

export const selectIsCardStatusesLoaded =
  createSelector(
    selectDefaultDictionaryCardStatusesItems,
    statuses => {
      return statuses && statuses.length > 0;
    });
