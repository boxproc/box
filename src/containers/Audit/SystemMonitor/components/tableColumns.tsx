import React from 'react';

import { TableCell, TableHeader } from 'components';

import { TableCellType } from 'types';

import { SystemMonitorItem } from 'store/domains';

type TCell<T extends keyof SystemMonitorItem> = TableCellType<SystemMonitorItem[T]>;

export const tableColumns = [
  {
    maxWidth: 125,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionName',
    Cell: (props: TCell<'institutionName'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 260,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Last Message Date&nbsp;/&nbsp;Time" />,
    accessor: 'lastMessageDatetime',
    Cell: (props: TCell<'lastMessageDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Last Fault Date&nbsp;/&nbsp;Time" />,
    accessor: 'lastFaultDatetime',
    Cell: (props: TCell<'lastFaultDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
];
