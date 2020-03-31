import React from 'react';

import { TableCell, TableHeader } from 'components';
import { ISchedulerJob } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof ISchedulerJob> = ITableCell<ISchedulerJob[T]>;

export const tableColumns = [
  {
    maxWidth: 130,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Last Execution Datetime" />,
    accessor: 'lastExecutionDatetime',
    Cell: (props: TCell<'lastExecutionDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Last Execution Result" />,
    accessor: 'lastExecutionResult',
    Cell: (props: TCell<'lastExecutionResult'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Cron Expression" />,
    accessor: 'cronExpression',
    Cell: (props: TCell<'cronExpression'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Executable Type" />,
    accessor: 'executableType',
    Cell: (props: TCell<'executableType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Executable" />,
    accessor: 'executable',
    Cell: (props: TCell<'executable'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Log Location" />,
    accessor: 'logLocation',
    Cell: (props: TCell<'logLocation'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
];
