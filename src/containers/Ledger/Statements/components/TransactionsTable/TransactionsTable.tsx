import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Table } from 'components';

import { LedgerStatementTransactionsItemPrepared } from 'store';
import { tableTransactionsColumns } from './tableTransactionsColumns';

interface TransactionsTableProps {
  statementTransactions: ImmutableArray<LedgerStatementTransactionsItemPrepared>;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  statementTransactions,
}) => {
  return (
    <Table
      data={statementTransactions}
      columns={tableTransactionsColumns}
      isHeader={true}
      pageSize={7}
      isSmaller={true}
    />
  );
};

export default TransactionsTable;
