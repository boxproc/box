import React from 'react';

import { Table, TableCell, TableHeader } from 'components';

import { LedgerStatementAprItemPrepared } from 'store';
import { TableCellType } from 'types';

type TCell<T extends keyof LedgerStatementAprItemPrepared> =
  TableCellType<LedgerStatementAprItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
    Header: <TableHeader title="Product APR ID" />,
    accessor: 'productAprId',
    Cell: (props: TCell<'productAprId'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Accrued Interest" />,
    accessor: 'accruedInterest',
    Cell: (props: TCell<'accruedInterest'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Rate" />,
    accessor: 'rate',
    Cell: (props: TCell<'rate'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
];

interface StatementAprsTableProps {
  data: Array<LedgerStatementAprItemPrepared>;
}

const StatementAprsTable: React.FC<StatementAprsTableProps> = ({
  data,
}) => {
  return (
    <Table
      columns={tableColumns}
      data={data}
      pageSize={7}
      isSmaller={true}
    />
  );
};

export default StatementAprsTable;
