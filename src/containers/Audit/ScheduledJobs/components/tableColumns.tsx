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
    maxWidth: 200,
    sortable: true,
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
    sortable: true,
    Header: <TableHeader title="Start Date&nbsp;/&nbsp;Time" />,
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
    sortable: true,
    Header: <TableHeader title="Finish Date&nbsp;/&nbsp;Time" />,
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
