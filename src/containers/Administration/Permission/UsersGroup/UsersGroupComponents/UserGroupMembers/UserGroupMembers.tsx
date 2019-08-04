import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Table, TableNoData } from 'components/Table';

import {
  AdminUserGroupMember,
  HandleDeleteAdminUserGroupMembers,
  HandleGetAdminUserGroupMembers,
} from 'store/domains/administration/permissions/usersGroups';

import { Button } from 'components/Buttons';
import { CellInfo } from 'react-table';
import { TableCell } from 'types';

interface UsersGroupMembersProps {
  adminUserGroupMemberId: number;
  getAdminUserGroupMembers: HandleGetAdminUserGroupMembers;
  AdminUserGroupMembers: Array<AdminUserGroupMember>;
  deleteAdminUserGroupMembers: HandleDeleteAdminUserGroupMembers;
}

type SCell<T extends keyof AdminUserGroupMember> = TableCell<AdminUserGroupMember[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getAdminUserGroupMembers,
  adminUserGroupMemberId,
  AdminUserGroupMembers,
  deleteAdminUserGroupMembers,
}) => {
  React.useEffect(
    () => {
      getAdminUserGroupMembers(adminUserGroupMemberId);
    },
    [getAdminUserGroupMembers, adminUserGroupMemberId]
  );

  const columns = [
    {
      accessor: 'username',
      Cell: (props: SCell<'username'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 100,
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName="delete"
          text="Delete"
          size=""
          onClick={() => deleteAdminUserGroupMembers(
            adminUserGroupMemberId,
            cellInfo.original.id
          )}
        />
      ),
    },
  ];

  return (
    <Table
      title="User Group Members"
      data={AdminUserGroupMembers}
      columns={columns}
      NoDataComponent={TableNoData}
      isHeader={false}
    />
  );
};

export default withSpinner()(UsersGroupMembers);
