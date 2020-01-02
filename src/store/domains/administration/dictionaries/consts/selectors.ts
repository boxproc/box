import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { valueLabelParse } from './utils';

export const selectDefaultDictionaryCardStatusesItems = (state: StoreState) =>
  state.administration.consts.cardStatuses.asMutable();

export const selectCardStatusesOptions = createSelector(
  selectDefaultDictionaryCardStatusesItems,
  statuses => valueLabelParse(statuses)
);

export const selectIsCardStatusesLoaded = createSelector(
  selectDefaultDictionaryCardStatusesItems,
  statuses => statuses && statuses.length > 0
);

export const selectDefaultDictionaryEndpointTypesItems = (state: StoreState) =>
  state.administration.consts.endpointTypes.asMutable();

export const selectEndpointTypesOptions = createSelector(
  selectDefaultDictionaryEndpointTypesItems,
  types => valueLabelParse(types)
);

export const selectIsEndpointTypesLoaded = createSelector(
  selectDefaultDictionaryEndpointTypesItems,
  types => types && types.length > 0
);

export const selectDefaultDictionaryInterfaceTypesItems = (state: StoreState) =>
  state.administration.consts.interfaceTypes.asMutable();

export const selectInterfaceTypesOptions = createSelector(
  selectDefaultDictionaryInterfaceTypesItems,
  types => valueLabelParse(types)
);

export const selectIsInterfaceTypesLoaded = createSelector(
  selectDefaultDictionaryInterfaceTypesItems,
  types => types && types.length > 0
);

export const selectDefaultDictionaryStatementCycleTypesItems = (state: StoreState) =>
  state.administration.consts.statementCycleTypes.asMutable();

export const selectStatementCycleTypesOptions = createSelector(
  selectDefaultDictionaryStatementCycleTypesItems,
  types => valueLabelParse(types)
);

export const selectIsStatementCycleTypesLoaded = createSelector(
  selectDefaultDictionaryStatementCycleTypesItems,
  types => types && types.length > 0
);
