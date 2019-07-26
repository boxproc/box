import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import {
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';
import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultAdminCycleEditorItems = (state: StoreState) =>
  state.administration.adminCyclesEditor.cycle_editor;

export const selectAdminCycleEditorItems = createSelector(
  selectDefaultAdminCycleEditorItems,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      id: item.id,
      institutionId: item && institutions.find(el => el.value === item.institution_id).label,
      description: item.description,
      cycleType: item && typeOfCyclesEditorOptions.find(el => el.value === item.cycle_type).label,
      status: item && statusTypeCyclesOptions.find(el => el.value === item.status).label,
      monthlyCycleFirstDay: item.monthly_cycle_first_day,
      weeklyCycleFirstDay: item
        && weeklyCycleTypeOptions.find(el => el.value === item.weekly_cycle_first_day).label,
      fixedCycleNumberOfDays: item.fixed_cycle_number_of_days,
    };
  })
);
