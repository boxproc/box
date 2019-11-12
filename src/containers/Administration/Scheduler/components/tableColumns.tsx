import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminSchedulerItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminSchedulerItemPrepared> =
  TableCellType<AdminSchedulerItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 130,
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
    maxWidth: 200,
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    sortable: true,
    Header: <TableHeader title="Executable" />,
    accessor: 'executable',
    Cell: (props: TCell<'executable'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Log Location" />,
    accessor: 'logLocation',
    Cell: (props: TCell<'logLocation'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
