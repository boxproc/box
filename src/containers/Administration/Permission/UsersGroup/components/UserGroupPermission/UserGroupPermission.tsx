import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header, Table, TableNoData } from 'components/Table';
import { T4 } from 'components/Text';

import {
  AdminGroupPermissionItem,
  HandleDeleteAdminGroupPermissions,
  HandleGetAdminGroupPermissions,
} from 'store/domains/administration/permissions/usersGroups';

import { Button } from 'components/Buttons';
import { CellInfo } from 'react-table';

import { TableCell } from 'types';

interface UsersGroupMembersProps {
  adminUserGroupMemberId: number;
  getAdminGroupPermission: HandleGetAdminGroupPermissions;
  deleteAdminGroupPermission: HandleDeleteAdminGroupPermissions;
  adminGroupPermissions: Array<AdminGroupPermissionItem>;
}

type SCell<T extends keyof AdminGroupPermissionItem> =
  TableCell<AdminGroupPermissionItem[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getAdminGroupPermission,
  adminUserGroupMemberId,
  adminGroupPermissions,
  deleteAdminGroupPermission,
}) => {
  React.useEffect(
    () => {
      getAdminGroupPermission(adminUserGroupMemberId);
    },
    [getAdminGroupPermission, adminUserGroupMemberId]
  );

  const columns = [
    {
      sortable: true,
      Header: <Header title="UI Items" />,
      accessor: 'uiItem',
      Cell: (props: SCell<'uiItem'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 200,
      sortable: true,
      Header: <Header title="Permission" />,
      accessor: 'permission',
      Cell: (props: SCell<'permission'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName="delete"
          text="Remove"
          size="11"
          confirmationText={`Delete UI item "${cellInfo.original.uiItem}" from the group?`}
          withConfirmation={true}
          onClick={() =>
            deleteAdminGroupPermission(
              cellInfo.original.userGroupId,
              cellInfo.original.uiItem
            )
          }
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <T4>Group Permissions</T4>
      <Table
        data={adminGroupPermissions}
        columns={columns}
        pageSize={5}
        NoDataComponent={TableNoData}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
