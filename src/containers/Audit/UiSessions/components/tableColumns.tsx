import React from 'react';

import { TableCell, TableHeader } from 'components';

import { TableCellType } from 'types';

type TCell<T extends keyof any> = TableCellType<any[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="User ID" />,
    accessor: 'userId',
    Cell: (props: TCell<'userId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
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
    maxWidth: 130,
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
    Header: <TableHeader title="API Address" />,
    accessor: 'apiAddress',
    Cell: (props: TCell<'apiAddress'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 400,
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
    maxWidth: 120,
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
