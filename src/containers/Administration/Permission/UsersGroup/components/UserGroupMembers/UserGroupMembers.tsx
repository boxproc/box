import React from 'react';
import { CellInfo } from 'react-table';

import { Button, T4, Table, TableCell, TableNoData, withSpinner } from 'components';

import {
  AdminUserGroupMemberPrepared,
  HandleDeleteAdminUserGroupMembers,
  HandleGetAdminUserGroupMembers,
} from 'store/domains/administration/permissions/usersGroups';

import { TableCellType } from 'types';

interface UsersGroupMembersProps {
  adminUserGroupMemberId: number;
  getAdminUserGroupMembers: HandleGetAdminUserGroupMembers;
  AdminUserGroupMembers: Array<AdminUserGroupMemberPrepared>;
  deleteAdminUserGroupMembers: HandleDeleteAdminUserGroupMembers;
}

type TCell<T extends keyof AdminUserGroupMemberPrepared> =
 TableCellType<AdminUserGroupMemberPrepared[T]>;

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
      Cell: (props: TCell<'username'>) => (
        <TableCell
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
          text="Remove"
          size="11"
          withConfirmation={true}
          confirmationText={`Delete user "${cellInfo.original.username}" from the group?`}
          onClick={() => deleteAdminUserGroupMembers(
            adminUserGroupMemberId,
            cellInfo.original.id
          )}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <T4>Group Members</T4>
      <Table
        data={AdminUserGroupMembers}
        columns={columns}
        NoDataComponent={TableNoData}
        isHeader={false}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
