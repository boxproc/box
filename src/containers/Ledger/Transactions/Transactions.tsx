import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { TransactionsFilter } from './forms';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatementsById,
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
  currentId: number;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerStatementsById: HandleFilterLedgerStatementsById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  resetTransactions: ResetTransactions;
}

const Transactions: React.FC<TransactionsProps> = ({
  ledgerTransactions,
  filterLedgerTransactions,
  institutionsOptions,
  resetTransactions,
  filterLedgerCustomersById,
  filterLedgerAccountsById,
  filterLedgerStatementsById,
  filterLedgerCardsById,
  currentId,
}) => {
  const [dateTimeFrom, setDateTimeFrom] = React.useState(null);
  const [dateTimeTo, setDateTimeTo] = React.useState(null);

  React.useEffect(
    () => {
      setDateTimeFrom(dateUtil.yesterdayDateTime());
      setDateTimeTo(dateUtil.todayDateTime());

      return () => resetTransactions();
    },
    [resetTransactions]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
      {
        name: 'Accounts',
        action: () => filterLedgerAccountsById({ transaction_id: currentId }),
      },
      {
        name: 'Customers',
        action: () => filterLedgerCustomersById({ transaction_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterLedgerCardsById({ transaction_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterLedgerStatementsById({ transaction_id: currentId }),
      },
    ],
    [
      filterLedgerCustomersById,
      filterLedgerStatementsById,
      filterLedgerCardsById,
      filterLedgerAccountsById,
      currentId,
    ]
  );

  return (
    <PageTemplate
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_TRANSACTION}
      filterAction={filterLedgerTransactions}
      contextMenuItems={contextMenuItems}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        transactionsDateTimeFrom: dateTimeFrom,
        transactionsDateTimeTo: dateTimeTo,
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
