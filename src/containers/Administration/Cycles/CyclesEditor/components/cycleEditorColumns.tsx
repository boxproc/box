import React from 'react';

import { Cell, Header } from 'components/Table';

import { AdminCyclesEditorItem } from 'store/domains/administration/cycles';

import { TableCell } from 'types';

type SCell<T extends keyof AdminCyclesEditorItem> = TableCell<AdminCyclesEditorItem[T]>;

export const cycleEditorColumns = [
  {
    maxWidth: 100,
    sortable: true,
    filterable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: SCell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    filterable: true,
    Header: <Header title="Institution ID" />,
    accessor: 'institutionId',
    Cell: (props: SCell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Description" />,
    accessor: 'description',
    Cell: (props: SCell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Cycle Type" />,
    accessor: 'cycleType',
    Cell: (props: SCell<'cycleType'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Status" />,
    accessor: 'status',
    Cell: (props: SCell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Monthly Cycle First Day" />,
    accessor: 'monthlyCycleFirstDay',
    Cell: (props: SCell<'monthlyCycleFirstDay'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Weekly Cycle First Day" />,
    accessor: 'weeklyCycleFirstDay',
    Cell: (props: SCell<'weeklyCycleFirstDay'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Fixed Cycle Number of Days" />,
    accessor: 'fixedCycleNumberOfDays',
    Cell: (props: SCell<'fixedCycleNumberOfDays'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];
