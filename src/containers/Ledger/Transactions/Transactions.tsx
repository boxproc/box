import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { iconNamesConst, modalNamesConst, permissionTypesConst, uiItemsConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { TransactionsFilter } from './forms';

import { IWithModal, withModal } from 'HOCs';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerTransactions,
  LedgerTransactionItemPrepared,
  ResetTransactions,
  THandleFilterStatementsById,
  UiItemPrepared,
} from 'store';

import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface ITransactions extends IWithModal {
  currentId: number;
  filterAccountsById: HandleFilterLedgerAccountsById;
  filterCardsById: HandleFilterLedgerCardsById;
  filterCustomersById: HandleFilterLedgerCustomersById;
  filterStatementsById: THandleFilterStatementsById;
  filterTransactions: HandleFilterLedgerTransactions;
  institutionsOptions: Array<ISelectValue>;
  isConvertibleToLoan: boolean;
  isLoading: boolean;
  resetTransactions: ResetTransactions;
  transactions: ImmutableArray<LedgerTransactionItemPrepared>;
  uiItems: Array<UiItemPrepared>;
}

const Transactions: React.FC<ITransactions> = ({
  currentId,
  filterAccountsById,
  filterCardsById,
  filterCustomersById,
  filterStatementsById,
  filterTransactions,
  institutionsOptions,
  isConvertibleToLoan,
  isLoading,
  openModal,
  resetTransactions,
  transactions,
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
      const uiItem = uiItems.find(item => item.id === uiItemsConst.LEDGER_SETTLE_TRANSACTION);

      if (!uiItem) {
        return false;
      }

      return uiItem.permission === permissionTypesConst.READ_ONLY;
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
      viewingModalName={modalNamesConst.TRANSACTION}
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
