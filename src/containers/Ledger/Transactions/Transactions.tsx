import React from 'react';

import { iconNamesConst, modalNamesConst, permissionTypesCodes, uiItemConsts } from 'consts';

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
  UiItemPrepared,
} from 'store/domains';

import { SelectValue } from 'types';
import { dateUtil } from 'utils';

export interface TransactionsProps extends WithModalProps {
  currentId: number;
  transactions: Array<LedgerTransactionItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  uiItems: Array<UiItemPrepared>;
  filterCustomersById: HandleFilterLedgerCustomersById;
  filterAccountsById: HandleFilterLedgerAccountsById;
  filterStatementsById: HandleFilterLedgerStatementsById;
  filterCardsById: HandleFilterLedgerCardsById;
  filterTransactions: HandleFilterLedgerTransactions;
  resetTransactions: ResetTransactions;
  isLoading: boolean;
  isConvertibleToLoan: boolean;
}

const Transactions: React.FC<TransactionsProps> = ({
  transactions,
  filterTransactions,
  institutionsOptions,
  resetTransactions,
  filterCustomersById,
  filterAccountsById,
  filterStatementsById,
  filterCardsById,
  currentId,
  openModal,
  isLoading,
  isConvertibleToLoan,
  uiItems,
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

  const isReadOnlySettleTr = React.useMemo(
    () => {
      const uiItem = uiItems.find(item => item.id === uiItemConsts.LEDGER_SETTLE_TRANSACTION);

      if (!uiItem) {
        return false;
      }

      return uiItem.permission === permissionTypesCodes.READ_ONLY;
    },
    [uiItems]
  );

  const contextMenuItems = React.useMemo(
    () => {
      const baseItems = [
        { isDivider: true },
        {
          name: 'Accounts',
          action: () => filterAccountsById({ transaction_id: currentId }),
        },
        {
          name: 'Customers',
          action: () => filterCustomersById({ transaction_id: currentId }),
        },
        {
          name: 'Cards',
          action: () => filterCardsById({ transaction_id: currentId }),
        },
        {
          name: 'Statements',
          action: () => filterStatementsById({ transaction_id: currentId }),
        },
        { isDivider: true },
        {
          name: 'Settle Transaction',
          isDisabled: isReadOnlySettleTr,
          action: () => openModal({
            name: modalNamesConst.SETTLE_TRANSACTION,
            payload: { transactionId: currentId },
          }),
        },
      ];

      const convertItems = [
        { isDivider: true },
        {
          name: 'Convert to Loan',
          icon: iconNamesConst.LOAN,
          action: () => openModal({
            name: modalNamesConst.TRANSACTION,
            payload: { activeTab: 1 },
          }),
        },
      ];

      return isConvertibleToLoan ? [...baseItems, ...convertItems] : baseItems;
    },
    [
      isConvertibleToLoan,
      currentId,
      filterAccountsById,
      filterCardsById,
      filterCustomersById,
      filterStatementsById,
      openModal,
      isReadOnlySettleTr,
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
      data={transactions}
      columns={tableColumns}
      editModalName={modalNamesConst.TRANSACTION}
      filterAction={filterTransactions}
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
