import React from 'react';

import { renderCheckBoxTableCell, TableCell, TableHeader } from 'components';

import { AdminSysPropsItem } from 'store';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminSysPropsItem> = TableCellType<AdminSysPropsItem[T]>;

export const tableColumns = [
  {
    maxWidth: 410,
    Header: <TableHeader title="Property Name" />,
    accessor: 'id',
    Cell: (props: TCell<'id'>) => (
      <TableCell value={props.value} />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Current Value" />,
    accessor: 'currentValue',
    Cell: (props: TCell<'currentValue'>) => (
      <TableCell value={props.value} />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Previous Value" />,
    accessor: 'previousValue',
    Cell: (props: TCell<'previousValue'>) => (
      <TableCell value={props.value} />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Last Datetime" />,
    accessor: 'lastDatetime',
    Cell: (props: TCell<'lastDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 65,
    Header: <TableHeader title="Locked" />,
    accessor: 'lockedFlag',
    Cell: renderCheckBoxTableCell(),
  },
];
