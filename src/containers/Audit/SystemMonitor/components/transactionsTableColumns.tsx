import React from 'react';

import { TableCell, TableHeader } from 'components';

import { SystemMonitorTransaction } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof SystemMonitorTransaction> = TableCellType<SystemMonitorTransaction[T]>;

export const transactionsTableColumns = [
  {
    maxWidth: 100,
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
    Header: <TableHeader title="Institution Name" />,
    accessor: 'institutionName',
    Cell: (props: TCell<'institutionName'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Transaction Date&nbsp;/&nbsp;Time" />,
    accessor: 'transactionDatetime',
    Cell: (props: TCell<'transactionDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
];
