import React from 'react';

import { Table, withSpinner } from 'components';

import {
  HandleGetLedgerStatementTransactions,
  LedgerStatementTransactionsItemPrepared
} from 'store/domains';
import { tableTransactionsColumns } from './tableTransactionsColumns';

interface TransactionsTableProps {
  getLedgerStatementTransactions: HandleGetLedgerStatementTransactions;
  ledgerStatementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  getLedgerStatementTransactions,
  ledgerStatementTransactions,
}) => {
  React.useEffect(
    () => {
      getLedgerStatementTransactions();
    },
    [getLedgerStatementTransactions]
  );

  return (
    <Table
      data={ledgerStatementTransactions}
      columns={tableTransactionsColumns}
      isHeader={true}
      pageSize={4}
    />
  );
};

export default withSpinner()(TransactionsTable);
