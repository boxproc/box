export const prepareAdminUsersGroupValuesUnderscore =
  (values: any) => {
    return {
      id: values.id,
      institution_id: values.institutionId && values.institutionId.value,
      name: values.name,
    };
  };
