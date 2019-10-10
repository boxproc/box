import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AuditScheduledJobsItemPrepared } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof AuditScheduledJobsItemPrepared> =
  TableCellType<AuditScheduledJobsItemPrepared[T]>;

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
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Scheduler ID" />,
    accessor: 'schedulerId',
    Cell: (props: TCell<'schedulerId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Start Date" />,
    accessor: 'dateFrom',
    Cell: (props: TCell<'dateFrom'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Finish Date" />,
    accessor: 'dateTo',
    Cell: (props: TCell<'dateTo'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Execution Result" />,
    accessor: 'executionResult',
    Cell: (props: TCell<'executionResult'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="Error Description" />,
    accessor: 'errorDescription',
    Cell: (props: TCell<'errorDescription'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
