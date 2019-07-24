// export const prepareAdminCyclesEditorValuesCamel =
//   (values: any): any => {
//     return {
//       ...values,
//       id: values.id,
//       institutionId: values.institution_id.value,
//       description: values.description,
//       cycleType: values.cycle_type,
//       status: values.status.value,
//       monthlyCycleFirstDay: values.monthly_cycle_first_day,
//       weeklyCycleFirstDay: values.weekly_cycle_first_day,
//       fixedCycleNumberOfDays: values.fixed_cycle_number_of_days,
//     };
//   };

export const  prepareAdminCyclesEditorValuesUnderscore =
(values: any): any => {
  return {
    id: values.id,
    institution_id: values.institutionId.value,
    description: values.description,
    cycle_type: values.cycleType.value,
    status: values.status.value,
    monthly_cycle_first_day: Number(values.monthlyCycleFirstDay),
    weekly_cycle_first_day: Number(values.weeklyCycleFirstDay.value),
    fixed_cycle_number_of_days: Number(values.fixedCycleNumberOfDays),
  };
};
