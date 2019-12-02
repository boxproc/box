import React from 'react';

import { Table, TableCell, TableHeader } from 'components';

import { LedgerStatementAprItemPrepared } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof LedgerStatementAprItemPrepared> =
  TableCellType<LedgerStatementAprItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Product APR ID" />,
    accessor: 'productAprId',
    filterable: true,
    Cell: (props: TCell<'productAprId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Accrued Interest" />,
    accessor: 'accruedInterest',
    Cell: (props: TCell<'accruedInterest'>) => (
      <TableCell
        value={props.value}
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
