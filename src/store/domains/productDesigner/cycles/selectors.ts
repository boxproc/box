import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import {
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { prepareValuesToRender } from 'store/domains/productDesigner/cycles/utils';
import { selectActiveItemId } from 'store/domains/utils';

export const selectDefaultCycleEditorItems = (state: StoreState) =>
  state.productDesigner.cyclesEditor.cycleEditor;

export const selectCycleEditorItems = createSelector(
  selectDefaultCycleEditorItems,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return {
      ...prepareValuesToRender(item),
      institutionId: institution && institution.label,
    };
  })
);

export const selectCycleEditorValues = createSelector(
  selectDefaultCycleEditorItems,
  selectActiveItemId,
  selectInstitutionsOptions,
  (cycleEditorItems, currentId, institutions) => {
    if (!cycleEditorItems) {
      return null;
    }

    const current = cycleEditorItems.find(item => item.id === currentId);

    return {
      ...prepareValuesToRender(current),
      status: current && statusTypeCyclesOptions.find(el => el.value === current.status),
      institutionId: current && institutions.find(el => el.value === current.institution_id),
      cycleType: current && typeOfCyclesEditorOptions.find(el => el.value === current.cycle_type),
      weeklyCycleFirstDay: current && weeklyCycleTypeOptions
        .find(el => el.value === current.weekly_cycle_first_day),
    };
  }
);

export const selectDefaultCyclesDescriptions = (state: StoreState) =>
  state.productDesigner.cyclesEditor.cyclesDescriptions;

export const selectCyclesDescriptionsOptions = createSelector(
  selectDefaultCyclesDescriptions,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.description,
    };
  })
);
