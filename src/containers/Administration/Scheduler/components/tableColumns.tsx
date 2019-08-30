import React from 'react';
import { CellInfo } from 'react-table';

import { Cell, Header } from 'components/Table';

import { AdminSchedulerItemPrepared } from 'store/domains';

import { TableCell } from 'types';
import SchedulerButtonsDropdown from './ButtonActions';

type SCell<T extends keyof AdminSchedulerItemPrepared> = TableCell<AdminSchedulerItemPrepared[T]>;

export const tableColumns = [
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
    Header: <Header title="Name" />,
    accessor: 'name',
    Cell: (props: SCell<'name'>) => (
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
    Header: <Header title="Cron Expression" />,
    accessor: 'cronExpression',
    Cell: (props: SCell<'cronExpression'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Executable Type" />,
    accessor: 'executableType',
    Cell: (props: SCell<'executableType'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Executable" />,
    accessor: 'executable',
    Cell: (props: SCell<'executable'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Log Location" />,
    accessor: 'logLocation',
    Cell: (props: SCell<'logLocation'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Last Execution Datetime" />,
    accessor: 'lastExecutionDatetime',
    Cell: (props: SCell<'lastExecutionDatetime'>) => (
      <Cell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Last Execution Result" />,
    accessor: 'lastExecutionResult',
    Cell: (props: SCell<'lastExecutionResult'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    minWidth: 125,
    accessor: 'executeButton',
    Cell: (cellInfo: CellInfo) => (
      <SchedulerButtonsDropdown
        currentId={cellInfo.original.id}
      />
    ),
  },
];
