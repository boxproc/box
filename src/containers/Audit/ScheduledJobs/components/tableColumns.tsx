import React from 'react';

import { TableCell, TableHeader } from 'components';

import { IScheduledJob } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IScheduledJob> = ITableCell<IScheduledJob[T]>;

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
    maxWidth: 200,
    Header: <TableHeader title="Scheduler" />,
    accessor: 'scheduler',
    Cell: (props: TCell<'scheduler'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Date&nbsp;/&nbsp;Time From" />,
    accessor: 'dateTimeFrom',
    Cell: (props: TCell<'dateTimeFrom'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Date&nbsp;/&nbsp;Time To" />,
    accessor: 'dateTimeTo',
    Cell: (props: TCell<'dateTimeTo'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Execution Result" />,
    accessor: 'executionResult',
    Cell: (props: TCell<'executionResult'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    Header: <TableHeader title="Error Description" />,
    accessor: 'errorDescription',
    Cell: (props: TCell<'errorDescription'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
