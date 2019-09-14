import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { TransactionsFilterForm } from './forms';

import { HandleSetLedgerTransactionId, LedgerTransactionItemPrepared } from 'store/domains';

export interface TransactionsProps {
  ledgerTransactions: Array<LedgerTransactionItemPrepared>;
  setLedgerTransactionId: HandleSetLedgerTransactionId;
}

const Transactions: React.FC<TransactionsProps> = ({
  ledgerTransactions,
  setLedgerTransactionId,
}) => {
  return (
    <TablePage
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_TRANSACTION}
      setCurrentIdAction={setLedgerTransactionId}
      FilterForm={
        <TransactionsFilterForm />
      }
    />
  );
};

export default withSpinner()(Transactions);
