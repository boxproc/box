import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminInterfaceItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminInterfaceItemPrepared> =
  TableCellType<AdminInterfaceItemPrepared[T]>;

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
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
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
    Header: <TableHeader title="URL" />,
    accessor: 'url',
    Cell: (props: TCell<'url'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Private Key Location" />,
    accessor: 'privateKeyLocation',
    Cell: (props: TCell<'privateKeyLocation'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Type" />,
    accessor: 'type',
    Cell: (props: TCell<'type'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Protocol Type" />,
    accessor: 'protocolType',
    Cell: (props: TCell<'protocolType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="Connection Attributes" />,
    accessor: 'connectionAttributes',
    Cell: (props: TCell<'connectionAttributes'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="Log File Location" />,
    accessor: 'logFileLocation',
    Cell: (props: TCell<'logFileLocation'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
