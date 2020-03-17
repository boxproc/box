import React from 'react';
import { CellInfo } from 'react-table';

import { Flex } from '@rebass/grid';

import { Button, T4, Table, TableCell, TableHeader, withSpinner } from 'components';

import { iconNamesConst } from 'consts';

import {
  AdminGroupPermissionItem,
  HandleDeleteAdminGroupPermissions,
  HandleGetAdminGroupPermissions,
} from 'store';

import { TableCellType } from 'types';

interface UsersGroupMembersProps {
  userGroupMemberId: number;
  getGroupPermission: HandleGetAdminGroupPermissions;
  deleteGroupPermission: HandleDeleteAdminGroupPermissions;
  groupPermissions: Array<AdminGroupPermissionItem>;
  isReadOnly: boolean;
}

type TCell<T extends keyof AdminGroupPermissionItem> =
  TableCellType<AdminGroupPermissionItem[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getGroupPermission,
  userGroupMemberId,
  groupPermissions,
  deleteGroupPermission,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getGroupPermission(userGroupMemberId);
    },
    [getGroupPermission, userGroupMemberId]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: <TableHeader title="UI Item" />,
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
        maxWidth: 65,
        accessor: 'deleteButton',
        Cell: (cellInfo: CellInfo) => (
          <Flex
            justifyContent="center"
            width="100%"
          >
            <Button
              iconName={iconNamesConst.DELETE}
              title="Remove"
              size="10"
              disabled={isReadOnly}
              confirmationText={`Delete UI item "${cellInfo.original.uiItem}" from the group?`}
              withConfirmation={true}
              onClick={() =>
                deleteGroupPermission(
                  cellInfo.original.userGroupId,
                  cellInfo.original.uiItem
                )
              }
            />
          </Flex>
        ),
      },
    ],
    [deleteGroupPermission, isReadOnly]
  );

  return (
    <React.Fragment>
      <T4>Group Permissions</T4>
      <Table
        data={groupPermissions}
        columns={columns}
        pageSize={9}
        isSmaller={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
