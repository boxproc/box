import { permissionTypes } from 'consts';

import { AdminGroupPermissionItemEditable, AdminUsersGroupInfoEditable } from './types';

export const prepareAdminUsersGroupValuesUnderscore =
  (values: Partial<AdminUsersGroupInfoEditable>) => {
    return {
      id: values.id,
      institution_id: values.institutionId && values.institutionId.value,
      name: values.name,
    };
  };

export const AdminGroupPermissionPreparedToSend =
  (values: Partial<AdminGroupPermissionItemEditable>) => {
  return {
    user_group_id: values.userGroupId,
    ui_item: values.uiItem && values.uiItem.value,
    permission: values.permission ? permissionTypes.READ_WRITE : permissionTypes.READ_ONLY,
  };
};
