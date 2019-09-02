import React from 'react';

import { Cell, Header } from 'components/Table';

import { AdminEventDataElemsItem } from 'store/domains';

import { TableCell } from 'types';

type EDECell<T extends keyof AdminEventDataElemsItem> = TableCell<AdminEventDataElemsItem[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'eventId',
    Cell: (props: EDECell<'eventId'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Name" />,
    accessor: 'name',
    Cell: (props: EDECell<'name'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Description" />,
    accessor: 'description',
    Cell: (props: EDECell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Event" />,
    accessor: 'event',
    Cell: (props: EDECell<'event'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Data Type" />,
    accessor: 'dataType',
    Cell: (props: EDECell<'dataType'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
