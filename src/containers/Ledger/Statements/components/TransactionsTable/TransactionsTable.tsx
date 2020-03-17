import React from 'react';

import { Table } from 'components';

import { LedgerStatementTransactionsItemPrepared } from 'store';
import { tableTransactionsColumns } from './tableTransactionsColumns';

interface TransactionsTableProps {
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  statementTransactions,
}) => {
  return (
    <Table
      data={statementTransactions}
      columns={tableTransactionsColumns}
      isHeader={true}
      pageSize={8}
      isSmaller={true}
    />
  );
};

export default TransactionsTable;
