import { permissionTypesConst } from 'consts';

import { AdminGroupPermissionFormValues, AdminUsersGroupInfoEditable } from './types';

export const prepareAdminUsersGroupData =
  (data: Partial<AdminUsersGroupInfoEditable>) => {
    if (!data) {
      return null;
    }

    const { id, institutionId, name } = data;

    return {
      id,
      institution_id: institutionId && institutionId.value,
      name,
    };
  };

export const AdminGroupPermissionPreparedToSend =
  (data: Partial<AdminGroupPermissionFormValues>) => {
    if (!data) {
      return null;
    }

    const { uiItems, userGroupId, permission } = data;
    const preparedUiItems = uiItems.map(item => item.value);

    return {
      user_group_id: userGroupId,
      ui_items: preparedUiItems,
      permission: permission ? permissionTypesConst.READ_WRITE : permissionTypesConst.READ_ONLY,
    };
  };
