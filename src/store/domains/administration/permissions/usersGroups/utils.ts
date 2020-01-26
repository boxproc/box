import { permissionTypesCodes } from 'consts';

import { AdminGroupPermissionItemEditable, AdminUsersGroupInfoEditable } from './types';

export const prepareAdminUsersGroupData =
  (data: Partial<AdminUsersGroupInfoEditable>) => {
    if (!data) {
      return null;
    }

    return {
      id: data.id,
      institution_id: data.institutionId && data.institutionId.value,
      name: data.name,
    };
  };

export const AdminGroupPermissionPreparedToSend =
  (data: Partial<AdminGroupPermissionItemEditable>) => {
    if (!data) {
      return null;
    }

    return {
      user_group_id: data.userGroupId,
      ui_item: data.uiItem && data.uiItem.value,
      permission: data.permission
        ? permissionTypesCodes.READ_WRITE
        : permissionTypesCodes.READ_ONLY,
    };
  };
