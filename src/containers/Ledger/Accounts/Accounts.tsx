import React from 'react';

import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst, permissionTypesCodes, uiItemConsts } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { AccountsFilter } from './forms';

import {
  HandleAddProductOverride,
  HandleFilterLedgerAccounts,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatementsById,
  HandleFilterLedgerTransactionsById,
  HandleSetActiveItemId,
  LedgerAccountItemPrepared,
  ResetAccounts,
  UiItemPrepared,
} from 'store/domains';
import { SelectValue } from 'types';

export interface AccountsProps extends WithModalProps {
  accounts: Array<LedgerAccountItemPrepared>;
  filterAccounts: HandleFilterLedgerAccounts;
  addProductOverride: HandleAddProductOverride;
  institutionsOptions: Array<SelectValue>;
  uiItems: Array<UiItemPrepared>;
  hasProductOverride: boolean;
  productOverrideId: number;
  resetAccounts: ResetAccounts;
  setActiveItemId: HandleSetActiveItemId;
  filterCustomersById: HandleFilterLedgerCustomersById;
  filterCardsById: HandleFilterLedgerCardsById;
  filterTransactionsById: HandleFilterLedgerTransactionsById;
  filterStatementsById: HandleFilterLedgerStatementsById;
  currentId: number;
  currentCurrencyCode: number;
  currentAccountBalanceLimit: string;
  currentAccountBalanceLimitShared: string;
  isLoading: boolean;
  isReadOnly: boolean;
}

const Accounts: React.FC<AccountsProps> = ({
  accounts,
  filterAccounts,
  institutionsOptions,
  hasProductOverride,
  addProductOverride,
  openModal,
  resetAccounts,
  setActiveItemId,
  productOverrideId,
  currentId,
  filterCustomersById,
  filterCardsById,
  filterTransactionsById,
  filterStatementsById,
  currentCurrencyCode,
  currentAccountBalanceLimit,
  currentAccountBalanceLimitShared,
  isLoading,
  isReadOnly,
  uiItems,
}) => {
  React.useEffect(
    () => {
      return () => resetAccounts();
    },
    [resetAccounts]
  );

  const isReadOnlyTransactions = React.useMemo(
    () => {
      const manualTransaction = uiItems
        .find(item => item.id === uiItemConsts.LEDGER_MANUAL_TRANSACTIONS);
      const limitAdjustment = uiItems
        .find(item => item.id === uiItemConsts.LEDGER_LIMIT_ADJUSTMENT);

      const isReadOnlyItem = (item: UiItemPrepared) => {
        if (!item) {
          return false;
        }

        return item.permission === permissionTypesCodes.READ_ONLY;
      };

      return {
        isReadOnlyManualTransaction: isReadOnlyItem(manualTransaction),
        isReadOnlyLimitAdjustment: isReadOnlyItem(limitAdjustment),
      };
    },
    [uiItems]
  );

  const handleEditOverride = React.useCallback(
    () => {
      if (hasProductOverride) {
        setActiveItemId(productOverrideId);
        if (currentId) {
          openModal({ name: modalNamesConst.EDIT_PRODUCT });
        }
      } else {
        addProductOverride(currentId, { withOpenProductModal: true });
      }
    },
    [
      openModal,
      addProductOverride,
      hasProductOverride,
      productOverrideId,
      setActiveItemId,
      currentId,
    ]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: hasProductOverride ? 'Edit product override' : 'Add product override',
        icon: hasProductOverride ? iconNamesConst.EDIT : iconNamesConst.PLUS,
        isDisabled: isReadOnly,
        action: handleEditOverride,
      },
      { isDivider: true },
      {
        name: 'Customers',
        action: () => filterCustomersById({ account_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterCardsById({ account_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterStatementsById({ account_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterTransactionsById({ account_id: currentId }),
      },
      { isDivider: true },
      {
        name: 'Manual Transaction',
        isDisabled: isReadOnlyTransactions.isReadOnlyManualTransaction,
        action: () => openModal({
          name: modalNamesConst.MANUAL_TRANSACTION,
          payload: {
            accountId: currentId,
            currencyCode: currentCurrencyCode,
          },
        }),
      },
      {
        name: 'Limit Adjustment',
        isDisabled: isReadOnlyTransactions.isReadOnlyLimitAdjustment,
        action: () => openModal({
          name: modalNamesConst.MANUAL_TRANSACTION,
          payload: {
            isLimitAdjustmentMode: true,
            accountId: currentId,
            balanceLimit: currentAccountBalanceLimit,
            balanceLimitShared: currentAccountBalanceLimitShared,
          },
        }),
      },
    ],
    [
      hasProductOverride,
      handleEditOverride,
      filterCustomersById,
      filterTransactionsById,
      filterStatementsById,
      filterCardsById,
      currentId,
      currentCurrencyCode,
      currentAccountBalanceLimit,
      currentAccountBalanceLimitShared,
      openModal,
      isReadOnly,
      isReadOnlyTransactions,
    ]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Accounts"
      data={accounts}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ACCOUNT}
      editModalName={modalNamesConst.EDIT_ACCOUNT}
      editableItemName="account"
      contextMenuItems={contextMenuItems}
      filterAction={filterAccounts}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <AccountsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withModal(Accounts);
