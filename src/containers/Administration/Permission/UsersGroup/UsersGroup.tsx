import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';
import { tableColumns } from 'containers/Administration/Permission/UsersGroup/components';

import { modalNames } from 'consts';

import {
  AdminUsersGroupInfoPlain,
  HandleGetAdminUsersGroup,
  HandleSetAdminUsersGroupId,
} from 'store/domains/administration/permissions/usersGroups';

interface UserFilterProps {
  adminUsersGroupItems: Array<AdminUsersGroupInfoPlain>;
  getAdminUsersGroup: HandleGetAdminUsersGroup;
  setAdminUsersGroupId: HandleSetAdminUsersGroupId;
}

export const UsersGroup: React.FC<UserFilterProps> = ({
  getAdminUsersGroup,
  adminUsersGroupItems,
  setAdminUsersGroupId,
}) => {
  React.useEffect(
    () => {
      getAdminUsersGroup();
    },
    [getAdminUsersGroup]
  );

  return (
    <TablePage
      title="Users Group"
      data={adminUsersGroupItems}
      columns={tableColumns}
      hint="Double Click on Row to Edit User Group"
      addNewModalName={modalNames.ADD_ADMIN_USERS_GROUP}
      editModalName={modalNames.EDIT_ADMIN_USERS_GROUP}
      setCurrentIdAction={setAdminUsersGroupId}
      withOpenModalOnDoubleClick={true}
      withContextMenu={true}
      contextMenuItems={[
        { name: 'Edit' },
      ]}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
