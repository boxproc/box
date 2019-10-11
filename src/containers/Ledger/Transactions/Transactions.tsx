import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { TransactionsFilter } from './forms';

import {
  HandleFilterLedgerTransactions,
  LedgerTransactionItemPrepared,
  ResetTransactions,
} from 'store/domains';

import { SelectValues } from 'types';

export interface TransactionsProps {
  ledgerTransactions: Array<LedgerTransactionItemPrepared>;
  filterLedgerTransactions: HandleFilterLedgerTransactions;
  institutionsOptions: Array<SelectValues>;
  resetTransactions: ResetTransactions;
}

const Transactions: React.FC<TransactionsProps> = ({
  ledgerTransactions,
  filterLedgerTransactions,
  institutionsOptions,
  resetTransactions,
}) => {
  React.useEffect(
    () => {
      return () => resetTransactions();
    },
    [resetTransactions]
  );

  return (
    <PageTemplate
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_TRANSACTION}
      filterAction={filterLedgerTransactions}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <TransactionsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Transactions);
