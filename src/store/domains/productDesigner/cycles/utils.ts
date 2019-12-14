import {
  cycleTypesCodes,
  statusTypeCyclesOptions,
  statusTypesCodes,
  typeOfCyclesEditorOptions,
  weeklyCycleTypeOptions,
} from 'consts';

import {
  CycleFilter,
  CycleFilterPrepared,
  CyclesEditorEditableItem,
  CyclesEditorIds,
  CyclesEditorIdsPrepared,
  CyclesEditorItem
} from './types';

import { SelectValues } from 'types';

export const prepareValuesToRender = (
  item: Partial<CyclesEditorItem>,
  institution?: SelectValues
) => {
  if (!item) {
    return item;
  }

  const cycleType = typeOfCyclesEditorOptions.find(el => el.value === item.cycle_type);
  const status = statusTypeCyclesOptions.find(el => el.value === item.status);
  const weeklyCycleFirstDay = weeklyCycleTypeOptions
    .find(el => el.value === item.weekly_cycle_first_day);

  return {
    id: item.id,
    institutionId: institution && institution.label,
    description: item.description,
    cycleType: cycleType && cycleType.label,
    status: status && status.label,
    monthlyCycleFirstDay: item.monthly_cycle_first_day,
    weeklyCycleFirstDay: weeklyCycleFirstDay && weeklyCycleFirstDay.label,
    fixedCycleNumberOfDays: item.fixed_cycle_number_of_days,
  };
};

export const prepareCyclesFiltersParamsToSend =
  (params: CycleFilter): CycleFilterPrepared => {
    if (!params) {
      return null;
    }

    const { activeStatusFlag, institutionId } = params;

    return {
      status: activeStatusFlag ? statusTypesCodes.ACTIVE : null,
      institution_id: institutionId ? institutionId.value : null,
    };
  };

export const prepareCyclesEditorValuesToSend =
  (values: Partial<CyclesEditorEditableItem>) => {
    if (!values) {
      return null;
    }

    const isMonthlyCycleFirstDay = values.cycleType
      && (values.cycleType.value === cycleTypesCodes.BI_MONTHLY
        || values.cycleType.value === cycleTypesCodes.MONTHLY);

    const isWeeklyCycleFirstDay = values.cycleType
      && (values.cycleType.value === cycleTypesCodes.BI_WEEKLY
        || values.cycleType.value === cycleTypesCodes.WEEKLY);

    const isFixedCycleNumberOfDays = values.cycleType
      && values.cycleType.value === cycleTypesCodes.FIXED_NUMBER_OF_DAYS;

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

export const prepareIdsToGetDesc = (ids: CyclesEditorIds): CyclesEditorIdsPrepared => {
  if (!ids) {
    return null;
  }

  return {
    institution_id: ids.institutionId,
  };
};
