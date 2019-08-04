import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

import {
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';
import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultAdminCycleEditorItems = (state: StoreState) =>
  state.administration.adminCyclesEditor.cycleEditor;

export const selectAdminCycleEditorItems = createSelector(
  selectDefaultAdminCycleEditorItems,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    if (!item) {
      return null;
    }

    return {
      id: item.id,
      institutionId:
        institutions.find(el => el.value === item.institution_id)
        && institutions.find(el => el.value === item.institution_id).label,
      description: item.description,
      cycleType:
        typeOfCyclesEditorOptions.find(el => el.value === item.cycle_type)
        && typeOfCyclesEditorOptions.find(el => el.value === item.cycle_type).label,
      status: statusTypeCyclesOptions.find(el => el.value === item.status)
        && statusTypeCyclesOptions.find(el => el.value === item.status).label,
      monthlyCycleFirstDay: item.monthly_cycle_first_day,
      weeklyCycleFirstDay:
        weeklyCycleTypeOptions.find(el => el.value === item.weekly_cycle_first_day)
        && weeklyCycleTypeOptions.find(el => el.value === item.weekly_cycle_first_day).label,
      fixedCycleNumberOfDays: item.fixed_cycle_number_of_days,
    };
  })
);
