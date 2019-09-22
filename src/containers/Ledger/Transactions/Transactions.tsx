import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { TransactionsFilterForm } from './forms';

import { LedgerTransactionItemPrepared } from 'store/domains';

export interface TransactionsProps {
  ledgerTransactions: Array<LedgerTransactionItemPrepared>;
}

const Transactions: React.FC<TransactionsProps> = ({
  ledgerTransactions,
}) => {
  return (
    <TablePage
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_TRANSACTION}
      FilterForm={
        <TransactionsFilterForm />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Transactions);
