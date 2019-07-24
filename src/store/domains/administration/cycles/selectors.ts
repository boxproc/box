import { StoreState } from 'store/StoreState';

import { createSelector } from 'reselect';

export const selectDefaultAdminCycleEditorItems = (state: StoreState) =>
  state.administration.adminCyclesEditor.cycle_editor;

export const selectAdminCycleEditorItems = createSelector(
  selectDefaultAdminCycleEditorItems,
  items => items && items.asMutable().map(item => {
    return {
       ...item,
       id: item.id,
      institutionId: item.institution_id,
      description: item.description,
      cycleType: item.cycle_type,
      status: item.status,
      monthlyCycleFirstDay: item.monthly_cycle_first_day,
      weeklyCycleFirstDay: item.weekly_cycle_first_day,
      fixedCycleNumberOfDays: item.fixed_cycle_number_of_days,
      };
    })
  );
