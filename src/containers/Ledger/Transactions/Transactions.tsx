import React from 'react';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { TransactionsFilter } from './forms';

import { withModal, WithModalProps } from 'HOCs';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatementsById,
  HandleFilterLedgerTransactions,
  LedgerTransactionItemPrepared,
  ResetTransactions,
} from 'store/domains';

import { SelectValue } from 'types';
import { dateUtil } from 'utils';

export interface TransactionsProps extends WithModalProps {
  currentId: number;
  ledgerTransactions: Array<LedgerTransactionItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerStatementsById: HandleFilterLedgerStatementsById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  filterLedgerTransactions: HandleFilterLedgerTransactions;
  resetTransactions: ResetTransactions;
  isLoading: boolean;
  isConvertibleToLoan: boolean;
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
  openModal,
  isLoading,
  isConvertibleToLoan,
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
    () => {
      const baseItems = [
        { isDivider: true },
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
        { isDivider: true },
        {
          name: 'Settle Transaction',
          action: () => openModal({ name: modalNamesConst.SETTLE_TRANSACTION }),
        },
      ];

      const convertItems = [
        { isDivider: true },
        {
          name: 'Convert to Loan',
          icon: iconNamesConst.LOAN,
          action: () => openModal({
            name: modalNamesConst.LEDGER_TRANSACTION,
            payload: { activeTab: 1 },
          }),
        },
      ];

      return isConvertibleToLoan ? [...baseItems, ...convertItems] : baseItems;
    },
    [
      isConvertibleToLoan,
      currentId,
      filterLedgerAccountsById,
      filterLedgerCardsById,
      filterLedgerCustomersById,
      filterLedgerStatementsById,
      openModal,
    ]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        transactionsDateTimeFrom: dateTimeFrom,
        transactionsDateTimeTo: dateTimeTo,
      };
    },
    [institutionsOptions, dateTimeFrom, dateTimeTo]
  );

  return (
    <PageTemplate
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_TRANSACTION}
      filterAction={filterLedgerTransactions}
      contextMenuItems={contextMenuItems}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <TransactionsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withModal(Transactions);
