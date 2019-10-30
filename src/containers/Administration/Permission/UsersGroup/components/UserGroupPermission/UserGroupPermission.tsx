import React from 'react';
import { CellInfo } from 'react-table';

import { Button, T4, Table, TableCell, TableHeader, withSpinner } from 'components';

import { iconNamesConst } from 'consts';

import {
  AdminGroupPermissionItem,
  HandleDeleteAdminGroupPermissions,
  HandleGetAdminGroupPermissions,
} from 'store/domains';

import { TableCellType } from 'types';

interface UsersGroupMembersProps {
  adminUserGroupMemberId: number;
  getAdminGroupPermission: HandleGetAdminGroupPermissions;
  deleteAdminGroupPermission: HandleDeleteAdminGroupPermissions;
  adminGroupPermissions: Array<AdminGroupPermissionItem>;
}

type TCell<T extends keyof AdminGroupPermissionItem> =
  TableCellType<AdminGroupPermissionItem[T]>;

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
      Header: <TableHeader title="UI Items" />,
      accessor: 'uiItem',
      filterable: true,
      Cell: (props: TCell<'uiItem'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 200,
      sortable: true,
      Header: <TableHeader title="Permission" />,
      accessor: 'permission',
      Cell: (props: TCell<'permission'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 90,
      sortable: true,
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName={iconNamesConst.DELETE}
          text="Remove"
          size="10"
          iconSize="15"
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
        pageSize={6}
        isSmaller={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
