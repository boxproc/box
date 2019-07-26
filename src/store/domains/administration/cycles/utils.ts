import { cycleTypes } from 'consts';

export const prepareAdminCyclesEditorValuesUnderscore =
  (values: any) => {
    if (!values) {
      return null;
    }
    if (values.cycleType.value === cycleTypes.BI_MONTHLY
      || values.cycleType.value === cycleTypes.MONTHLY) {
      return {
        id: values.id,
        institution_id: values.institutionId.value,
        description: values.description,
        cycle_type: values.cycleType.value,
        status: values.status.value,
        weekly_cycle_first_day: 0,
        fixed_cycle_number_of_days: 0,
        monthly_cycle_first_day: values.monthlyCycleFirstDay && Number(values.monthlyCycleFirstDay),

      };
    } else if (values.cycleType.value === cycleTypes.BI_WEEKLY
      || values.cycleType.value === cycleTypes.WEEKLY) {
      return {
        id: values.id,
        institution_id: values.institutionId.value,
        description: values.description,
        cycle_type: values.cycleType.value,
        status: values.status.value,
        fixed_cycle_number_of_days: 0,
        monthly_cycle_first_day: 0,
        weekly_cycle_first_day:
          values.weeklyCycleFirstDay && Number(values.weeklyCycleFirstDay.value),

      };
    } else if (values.cycleType.value === cycleTypes.FIXED_NUMBER_OF_DAYS) {
      return {
        id: values.id,
        institution_id: values.institutionId.value,
        description: values.description,
        cycle_type: values.cycleType.value,
        status: values.status.value,
        monthly_cycle_first_day: 0,
        weekly_cycle_first_day: 0,
        fixed_cycle_number_of_days:
          values.fixedCycleNumberOfDays && Number(values.fixedCycleNumberOfDays),
      };
    } else {
      return null;
    }
  };
