import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminEndpointItemPrepared } from 'store';
import { ITableCellType } from 'types';

type TCell<T extends keyof AdminEndpointItemPrepared> =
  ITableCellType<AdminEndpointItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
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
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Port" />,
    accessor: 'port',
    Cell: (props: TCell<'port'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Private Key Location" />,
    accessor: 'privateKeyLocation',
    Cell: (props: TCell<'privateKeyLocation'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Type" />,
    accessor: 'endpointTypeName',
    Cell: (props: TCell<'endpointTypeName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    Header: <TableHeader title="Connection Attributes" />,
    accessor: 'connectionAttributes',
    Cell: (props: TCell<'connectionAttributes'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Log File Location" />,
    accessor: 'logFileLocation',
    Cell: (props: TCell<'logFileLocation'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
];
