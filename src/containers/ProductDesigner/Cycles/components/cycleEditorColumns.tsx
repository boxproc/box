import React from 'react';

import { TableCell, TableHeader } from 'components';

import { CyclesEditorItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof CyclesEditorItemPrepared> = TableCellType<CyclesEditorItemPrepared[T]>;

export const cycleEditorColumns = [
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
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Cycle Type" />,
    accessor: 'cycleType',
    Cell: (props: TCell<'cycleType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
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
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Monthly Cycle First Day" />,
    accessor: 'monthlyCycleFirstDay',
    Cell: (props: TCell<'monthlyCycleFirstDay'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Weekly Cycle First Day" />,
    accessor: 'weeklyCycleFirstDay',
    Cell: (props: TCell<'weeklyCycleFirstDay'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Fixed Cycle Number of Days" />,
    accessor: 'fixedCycleNumberOfDays',
    Cell: (props: TCell<'fixedCycleNumberOfDays'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];
