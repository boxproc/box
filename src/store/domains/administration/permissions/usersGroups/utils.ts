export const prepareAdminUsersGroupValuesUnderscore =
  (values: any) => {
   return {
        id: values.id,
        institution_id: values.institutionId.value,
        name: values.name,

      };
    };

// export const prepareUsersFiltersParams =
//   (params: UsersFilterParamsPrepared): UsersFilterParams => {
//     return {
//       statusActiveFlag: params.status === statusTypes.ACTIVE ? true : false,
//     };
//   };

// export const prepareUsersFiltersParamsToSend =
//   (params: UsersFilterParams): UsersFilterParamsPrepared => {
//     const { statusActiveFlag } = params;

//     return {
//       status: statusActiveFlag ? statusTypes.ACTIVE : null,
//     };
//   };
