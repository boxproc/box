import {
  cycleTypes,
  statusTypeCyclesOptions,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';

import { AdminCyclesEditorEditableItem, AdminCyclesEditorItem } from './types';

export const prepareValuesToRender = (item: Partial<AdminCyclesEditorItem>) => {
  if (!item) {
    return item;
  }

  return {
    id: item.id,
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
};

export const prepareAdminCyclesEditorValuesUnderscore =
  (values: Partial<AdminCyclesEditorEditableItem>) => {
    if (!values) {
      return null;
    }

    const isMonthlyCycleFirstDay = values.cycleType
      && (values.cycleType.value === cycleTypes.BI_MONTHLY
        || values.cycleType.value === cycleTypes.MONTHLY);

    const isWeeklyCycleFirstDay = values.cycleType
      && (values.cycleType.value === cycleTypes.BI_WEEKLY
        || values.cycleType.value === cycleTypes.WEEKLY);

    const isFixedCycleNumberOfDays = values.cycleType
      && values.cycleType.value === cycleTypes.FIXED_NUMBER_OF_DAYS;

    const prepareGeneral = () => {
      return {
        id: values.id,
        institution_id: values.institutionId && values.institutionId.value,
        description: values.description,
        cycle_type: values.cycleType && values.cycleType.value,
        status: values.status && values.status.value,
      };
    };

    if (isMonthlyCycleFirstDay) {
      return {
        ...prepareGeneral(),
        fixed_cycle_number_of_days: 0,
        weekly_cycle_first_day: 0,
        monthly_cycle_first_day: Number(values.monthlyCycleFirstDay),
      };
    } else if (isWeeklyCycleFirstDay) {
      return {
        ...prepareGeneral(),
        fixed_cycle_number_of_days: 0,
        monthly_cycle_first_day: 0,
        weekly_cycle_first_day:
          values.weeklyCycleFirstDay && Number(values.weeklyCycleFirstDay.value),
      };
    } else if (isFixedCycleNumberOfDays) {
      return {
        ...prepareGeneral(),
        monthly_cycle_first_day: 0,
        weekly_cycle_first_day: 0,
        fixed_cycle_number_of_days: Number(values.fixedCycleNumberOfDays),
      };
    } else {
      return null;
    }
  };
