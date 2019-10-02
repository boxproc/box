import React from 'react';

import { TableCell, TableHeader } from 'components';

import { IdNamePair, TableCellType } from 'types';

type TCell<T extends keyof IdNamePair> = TableCellType<IdNamePair[T]>;

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
