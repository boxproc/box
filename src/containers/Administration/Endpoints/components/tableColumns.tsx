import React from 'react';

import { Cell, Header } from 'components/Table';

import { AdminEndpointItemPrepared } from 'store/domains';
import { TableCell } from 'types';

type ACell<T extends keyof AdminEndpointItemPrepared> =
  TableCell<AdminEndpointItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: ACell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: ACell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Name" />,
    accessor: 'name',
    Cell: (props: ACell<'name'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="Port" />,
    accessor: 'port',
    Cell: (props: ACell<'port'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Private Key Location" />,
    accessor: 'privateKeyLocation',
    Cell: (props: ACell<'privateKeyLocation'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Status" />,
    accessor: 'status',
    Cell: (props: ACell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Type" />,
    accessor: 'type',
    Cell: (props: ACell<'type'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Connection Attributes" />,
    accessor: 'connectionAttributes',
    Cell: (props: ACell<'connectionAttributes'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
