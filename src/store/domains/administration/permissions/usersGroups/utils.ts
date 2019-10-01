import { permissionTypesCodes } from 'consts';

import { AdminGroupPermissionItemEditable, AdminUsersGroupInfoEditable } from './types';

export const prepareAdminUsersGroupValuesUnderscore =
  (values: Partial<AdminUsersGroupInfoEditable>) => {
    if (!values) {
      return null;
    }

    return {
      id: values.id,
      institution_id: values.institutionId && values.institutionId.value,
      name: values.name,
    };
  };

export const AdminGroupPermissionPreparedToSend =
  (values: Partial<AdminGroupPermissionItemEditable>) => {
    if (!values) {
      return null;
    }

    return {
      user_group_id: values.userGroupId,
      ui_item: values.uiItem && values.uiItem.value,
      permission: values.permission
        ? permissionTypesCodes.READ_WRITE
        : permissionTypesCodes.READ_ONLY,
    };
  };
