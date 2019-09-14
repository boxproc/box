import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminEventDataElemsItem } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminEventDataElemsItem> = TableCellType<AdminEventDataElemsItem[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="ID" />,
    accessor: 'eventId',
    Cell: (props: TCell<'eventId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Event" />,
    accessor: 'event',
    Cell: (props: TCell<'event'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Data Type" />,
    accessor: 'dataType',
    Cell: (props: TCell<'dataType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
