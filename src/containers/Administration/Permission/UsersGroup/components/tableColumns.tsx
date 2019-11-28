import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminUsersGroupInfoPlain } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminUsersGroupInfoPlain> = TableCellType<AdminUsersGroupInfoPlain[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="ID" />,
    accessor: 'id',
    Cell: (props: TCell<'id'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionName',
    Cell: (props: TCell<'institutionName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Name of User Group" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
