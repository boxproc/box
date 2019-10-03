import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { TransactionsFilter } from './forms';

import {
  HandleFilterLedgerTransactions,
  LedgerTransactionItemPrepared,
  ResetTransactions,
} from 'store/domains';

import { SelectValues } from 'types';
import { dateUtil } from 'utils';

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
    <TablePage
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_TRANSACTION}
      filterAction={filterLedgerTransactions}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        datetimeFrom: dateUtil.yesterdayDateTime,
        datetimeTo: dateUtil.todayDateTime,
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
