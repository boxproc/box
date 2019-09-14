import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminEventsItem } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminEventsItem> = TableCellType<AdminEventsItem[T]>;

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
  ];
