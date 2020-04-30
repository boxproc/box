import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import {
  Button,
  EditableTableCell,
  T4,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';
import { iconNamesConst, permissionTypesOptions } from 'consts';

import {
  IUsersGroupPermission,
  THandleDeleteUsersGroupPermission,
  THandleGetUsersGroupPermissions,
  THandleUpdateUsersGroupPermission,
} from 'store';

import { ITableCell } from 'types';

interface IUsersGroupMembers {
  deleteGroupPermission: THandleDeleteUsersGroupPermission;
  getGroupPermission: THandleGetUsersGroupPermissions;
  groupPermissions: ImmutableArray<IUsersGroupPermission>;
  isLoading: boolean;
  isReadOnly: boolean;
  memberId: number;
  updateUsersGroupPermission: THandleUpdateUsersGroupPermission;
}

type TCell<T extends keyof IUsersGroupPermission> = ITableCell<IUsersGroupPermission[T]>;

export const UsersGroupMembers: React.FC<IUsersGroupMembers> = ({
  deleteGroupPermission,
  getGroupPermission,
  groupPermissions,
  isLoading,
  isReadOnly,
  memberId,
  updateUsersGroupPermission,
}) => {
  React.useEffect(
    () => {
      getGroupPermission(memberId);
    },
    [getGroupPermission, memberId]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        minWidth: 300,
        Header: <TableHeader title="UI Item" />,
        accessor: 'uiItemLabel',
        Cell: (props: TCell<'uiItemLabel'>) => (
          <TableCell
            value={props.value}
          />
        ),
      },
      {
        maxWidth: 300,
        Header: <TableHeader title="Permission" />,
        accessor: 'permission',
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateUsersGroupPermission}
            isSmaller={true}
            cellInfo={cellInfo}
            isSelect={true}
            selectOptions={permissionTypesOptions}
            isEditable={isEditableCell}
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
              confirmationText={`Delete UI item "${cellInfo.original.uiItemLabel}" from the group?`}
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
    [deleteGroupPermission, isReadOnly, isEditableCell, updateUsersGroupPermission]
  );

  return (
    <React.Fragment>
      <T4>Group Permissions</T4>
      <Table
        data={groupPermissions}
        columns={columns}
        pageSize={8}
        isSmaller={true}
        isScrollbar={false}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
