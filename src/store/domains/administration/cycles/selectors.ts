import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import {
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';
import { prepareValuesToRender } from 'store/domains/administration/cycles/utils';
import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultAdminCycleEditorItems = (state: StoreState) =>
  state.administration.cyclesEditor.cycleEditor;

export const selectAdminCycleEditorItems = createSelector(
  selectDefaultAdminCycleEditorItems,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...prepareValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectCycleEditorId = (state: StoreState) =>
  state.administration.cyclesEditor.currentCycleEditorId;

export const selectCycleEditorValues = createSelector(
  selectDefaultAdminCycleEditorItems,
  selectCycleEditorId,
  selectInstitutionsOptions,
  (cycleEditorItems, currentId, institutions) => {
    const current = cycleEditorItems && cycleEditorItems.find(item => item.id === currentId);

    return {
      ...prepareValuesToRender(current),
      status: statusTypeCyclesOptions.find(el => el.value === current.status),
      institutionId: institutions.find(el => el.value === current.institution_id),
      cycleType: typeOfCyclesEditorOptions.find(el => el.value === current.cycle_type),
      weeklyCycleFirstDay: weeklyCycleTypeOptions.find(
        el => el.label === current.weekly_cycle_first_day),
    };
  }
);
