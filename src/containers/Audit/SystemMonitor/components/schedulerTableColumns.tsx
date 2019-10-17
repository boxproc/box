import React from 'react';

import { TableCell, TableHeader } from 'components';

import { SystemMonitorSchedulerItem } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof SystemMonitorSchedulerItem> =
  TableCellType<SystemMonitorSchedulerItem[T]>;

export const schedulerTableColumns = [
  {
    maxWidth: 80,
    Header: <TableHeader title="Institution ID" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
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
];
