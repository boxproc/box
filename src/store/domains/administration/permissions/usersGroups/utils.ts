import { AdminUsersGroupInfoEditable } from './types';

export const prepareAdminUsersGroupValuesUnderscore =
  (values: Partial<AdminUsersGroupInfoEditable>) => {
    return {
      id: values.id,
      institution_id: values.institutionId && values.institutionId.value,
      name: values.name,
    };
  };
