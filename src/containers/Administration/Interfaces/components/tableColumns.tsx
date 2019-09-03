import React from 'react';

import { Cell, Header } from 'components/Table';

import { AdminInterfaceItemPrepared } from 'store/domains';

import { TableCell } from 'types';

type ACell<T extends keyof AdminInterfaceItemPrepared> =
  TableCell<AdminInterfaceItemPrepared[T]>;

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
    maxWidth: 200,
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
    maxWidth: 200,
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
    maxWidth: 300,
    sortable: true,
    Header: <Header title="URL" />,
    accessor: 'url',
    Cell: (props: ACell<'url'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
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
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Protocol Type" />,
    accessor: 'protocolType',
    Cell: (props: ACell<'protocolType'>) => (
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
  {
    sortable: true,
    Header: <Header title="Log File Location" />,
    accessor: 'logFileLocation',
    Cell: (props: ACell<'logFileLocation'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
