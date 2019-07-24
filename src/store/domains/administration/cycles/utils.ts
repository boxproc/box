export const prepareAdminCyclesEditorValues =
  (values: any): any => {
    return {
      ...values,
      id: values.id.value,
      institutionId: values.institution_id.value,
      description: values.description.value,
      cycleType: values.cycle_type.value,
      status: values.status.value,
      monthlyCycleFirstDay: values.monthly_cycle_first_day.value,
      weeklyCycleFirstDay: values.weekly_cycle_first_day.value,
      fixedCycleNumberOfDays: values.fixed_cycle_number_of_days.value,
    };
  };
