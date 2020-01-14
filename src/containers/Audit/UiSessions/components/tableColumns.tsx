import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AuditUiSessionsItem } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AuditUiSessionsItem> = TableCellType<AuditUiSessionsItem[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
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
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Username" />,
    accessor: 'username',
    Cell: (props: TCell<'username'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 180,
    sortable: true,
    Header: <TableHeader title="First Name" />,
    accessor: 'firstName',
    Cell: (props: TCell<'firstName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 180,
    sortable: true,
    Header: <TableHeader title="Last Name" />,
    accessor: 'lastName',
    Cell: (props: TCell<'lastName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 140,
    sortable: true,
    Header: <TableHeader title="Last Date Time" />,
    accessor: 'lastDatetime',
    Cell: (props: TCell<'lastDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 120,
    sortable: true,
    Header: <TableHeader title="IP Address" />,
    accessor: 'ipAddress',
    Cell: (props: TCell<'ipAddress'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 500,
    sortable: true,
    Header: <TableHeader title="User Agent" />,
    accessor: 'userAgent',
    Cell: (props: TCell<'userAgent'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
