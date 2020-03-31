import React from 'react';

import { TableCell, TableHeader } from 'components';
import { ISysMonitorTransaction } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof ISysMonitorTransaction> = ITableCell<ISysMonitorTransaction[T]>;

export const transactionsTableColumns = [
  {
    maxWidth: 130,
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
