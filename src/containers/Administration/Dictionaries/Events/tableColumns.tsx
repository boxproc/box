import React from 'react';

import { TableCell, TableHeader } from 'components';

import { IIdNamePair, ITableCellType } from 'types';

type TCell<T extends keyof IIdNamePair> = ITableCellType<IIdNamePair[T]>;

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
      maxWidth: 300,
      Header: <TableHeader title="Name" />,
      accessor: 'name',
      Cell: (props: TCell<'name'>) => (
        <TableCell
          value={props.value}
        />
      ),
    },
  ];
