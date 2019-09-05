import {
  cycleTypes,
  statusTypeCyclesOptions,
  statusTypes,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';

import {
  AdminCyclesEditorEditableItem,
  AdminCyclesEditorItem,
  CycleFilterParams,
  CycleFilterParamsPrepared
} from './types';

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

export const prepareCyclesFiltersParamsToSend =
  (params: CycleFilterParams): CycleFilterParamsPrepared => {
    if (!params) {
      return null;
    }

    const { activeStatusFlag, institutionId } = params;

    return {
      status: activeStatusFlag ? statusTypes.ACTIVE : null,
      institution_id: institutionId ? institutionId.value : null,
    };
  };

export const prepareAdminCyclesEditorValuesToSend =
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
        monthly_cycle_first_day:
          values.monthlyCycleFirstDay ? Number(values.monthlyCycleFirstDay) : 0,
      };
    } else if (isWeeklyCycleFirstDay) {
      return {
        ...prepareGeneral(),
        fixed_cycle_number_of_days: 0,
        monthly_cycle_first_day: 0,
        weekly_cycle_first_day:
          values.weeklyCycleFirstDay ? Number(values.weeklyCycleFirstDay.value) : 0,
      };
    } else if (isFixedCycleNumberOfDays) {
      return {
        ...prepareGeneral(),
        monthly_cycle_first_day: 0,
        weekly_cycle_first_day: 0,
        fixed_cycle_number_of_days:
          values.fixedCycleNumberOfDays ? Number(values.fixedCycleNumberOfDays) : 0,
      };
    } else {
      return null;
    }
  };
