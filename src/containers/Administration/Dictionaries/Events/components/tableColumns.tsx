import React from 'react';

import { Cell, Header } from 'components/Table';

import { AdminEventsItem } from 'store/domains';

import { TableCell } from 'types';

type EventsCell<T extends keyof AdminEventsItem> = TableCell<AdminEventsItem[T]>;

export const tableColumns = [
    {
      maxWidth: 100,
      sortable: true,
      Header: <Header title="ID" />,
      accessor: 'id',
      Cell: (props: EventsCell<'id'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 300,
      sortable: true,
      Header: <Header title="Name" />,
      accessor: 'name',
      Cell: (props: EventsCell<'name'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];
