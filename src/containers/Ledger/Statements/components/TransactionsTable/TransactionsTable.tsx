import React from 'react';

import {  T4, Table,  withSpinner } from 'components';

import {
  HandleGetLedgerStatementTransactions,
   LedgerStatementTransactionsItemPrepared,
   LedgerStatementTransactionsItemsRequest
   } from 'store/domains';
import { tableTransactionsColumns } from './tableTransactionsColumns';

interface TransactionsTableProps {
  getLedgerStatementTransactions: HandleGetLedgerStatementTransactions;
  ledgerStatementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
  ledgerCurrentStatementTransaction: LedgerStatementTransactionsItemsRequest;

}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  getLedgerStatementTransactions,
  ledgerStatementTransactions,
  ledgerCurrentStatementTransaction,
}) => {
  // React.useEffect(
  //   () => {
  //     getLedgerStatementTransactions(ledgerCurrentStatementTransaction);
  //   },
  //   [getLedgerStatementTransactions, ledgerCurrentStatementTransaction]
  // );

  return (
    <React.Fragment>
      <T4>Transactions</T4>
      <Table
        data={ledgerStatementTransactions}
        columns={tableTransactionsColumns}
        isHeader={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(TransactionsTable);
