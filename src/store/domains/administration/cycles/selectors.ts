import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import {
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';
import { prepareValuesToRender } from 'store/domains/administration/cycles/utils';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';

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

export const selectCycleEditorValues = createSelector(
  selectDefaultAdminCycleEditorItems,
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

export const selectDefaultAdminCyclesDescriptions = (state: StoreState) =>
  state.administration.cyclesEditor.cyclesDescriptions;

export const selectCyclesDescriptionsOptions = createSelector(
  selectDefaultAdminCyclesDescriptions,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.description,
    };
  })
);
