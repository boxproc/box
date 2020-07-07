import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { iconNamesConst, modalNamesConst, permissionTypesConst, uiItemsConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { TransactionsFilter } from './forms';

import { IWithModal, withModal } from 'HOCs';

import {
  ITransaction,
  IUiItem,
  THandleFilterAccountsById,
  THandleFilterCardsById,
  THandleFilterCustomersById,
  THandleFilterStatementsById,
  THandleFilterTransactions,
  TResetTransactions,
} from 'store';

import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface ITransactions extends IWithModal {
  currentId: number;
  filterAccountsById: THandleFilterAccountsById;
  filterCardsById: THandleFilterCardsById;
  filterCustomersById: THandleFilterCustomersById;
  filterStatementsById: THandleFilterStatementsById;
  filterTransactions: THandleFilterTransactions;
  institutionsOptions: Array<ISelectValue>;
  isConvertibleToLoan: boolean;
  isSettledTr: boolean;
  isLoading: boolean;
  resetTransactions: TResetTransactions;
  transactions: ImmutableArray<ITransaction>;
  uiItems: Array<IUiItem>;
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
  isSettledTr,
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
      const uiItem = uiItems.find(item => item.id === uiItemsConst.SETTLE_TRANSACTION);

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
      ];

      const convertItems = [
        { isDivider: true },
        {
          name: 'Convert to Loan',
          icon: iconNamesConst.LOAN,
          action: () => openModal({
            name: modalNamesConst.TRANSACTION,
            payload: { activeTab: 2 },
          }),
        },
      ];

      const settleTrItems = [
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

      if (isConvertibleToLoan && !isSettledTr) {
        return [...baseItems, ...settleTrItems, ...convertItems];
      } else {
        if (isConvertibleToLoan) {
          return [...baseItems, ...convertItems];
        }

        if (!isSettledTr) {
          return [...baseItems, ...settleTrItems];
        }
      }

      return baseItems;
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
      isSettledTr,
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
