import React from 'react';

import { Cell, Header } from 'components/Table';

import {
  AdminUsersGroupInfoPlain,
} from 'store/domains/administration/permissions/usersGroups';

import { TableCell } from 'types';

type SCell<T extends keyof AdminUsersGroupInfoPlain> = TableCell<AdminUsersGroupInfoPlain[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: SCell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <Header title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: SCell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <Header title="Name of User Group" />,
    accessor: 'name',
    Cell: (props: SCell<'name'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
