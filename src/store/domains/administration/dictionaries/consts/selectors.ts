import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { valueLabelParse } from './utils';

export const selectDefaultDictionaryCardStatusesItems = (state: StoreState) =>
  state.administration.consts.cardStatuses;

export const selectCardStatusesOptions = createSelector(
  selectDefaultDictionaryCardStatusesItems,
  statuses => statuses && valueLabelParse(statuses.asMutable())
);

export const selectIsCardStatusesLoaded = createSelector(
  selectDefaultDictionaryCardStatusesItems,
  statuses => statuses && statuses.length > 0
);

export const selectDefaultDictionaryEndpointTypesItems = (state: StoreState) =>
  state.administration.consts.endpointTypes;

export const selectEndpointTypesOptions = createSelector(
  selectDefaultDictionaryEndpointTypesItems,
  types => types && valueLabelParse(types.asMutable())
);

export const selectIsEndpointTypesLoaded = createSelector(
  selectDefaultDictionaryEndpointTypesItems,
  types => types && types.length > 0
);

export const selectDefaultDictionaryInterfaceTypesItems = (state: StoreState) =>
  state.administration.consts.interfaceTypes;

export const selectInterfaceTypesOptions = createSelector(
  selectDefaultDictionaryInterfaceTypesItems,
  types => types && valueLabelParse(types.asMutable())
);

export const selectIsInterfaceTypesLoaded = createSelector(
  selectDefaultDictionaryInterfaceTypesItems,
  types => types && types.length > 0
);

export const selectDefaultDictionaryStatementCycleTypesItems = (state: StoreState) =>
  state.administration.consts.statementCycleTypes;

export const selectStatementCycleTypesOptions = createSelector(
  selectDefaultDictionaryStatementCycleTypesItems,
  types => types && valueLabelParse(types.asMutable())
);

export const selectIsStatementCycleTypesLoaded = createSelector(
  selectDefaultDictionaryStatementCycleTypesItems,
  types => types && types.length > 0
);
