import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { IWithModal, withModal } from 'HOCs';

import { iconNamesConst, modalNamesConst, permissionTypesConst, uiItemsConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { AccountsFilter } from './forms';

import {
  IAccount,
  IUiItem,
  THandleAddProductOverride,
  THandleFilterAccounts,
  THandleFilterCardsById,
  THandleFilterCustomersById,
  THandleFilterStatementsById,
  THandleFilterTransactionsById,
  TResetAccounts,
  TSetActiveItemId,
} from 'store';
import { ISelectValue } from 'types';

interface IAccounts extends IWithModal {
  accounts: ImmutableArray<IAccount>;
  addProductOverride: THandleAddProductOverride;
  currentAccBalanceLimit: string;
  currentAccBalanceLimitShared: string;
  currentCurrencyCode: number;
  currentId: number;
  filterAccounts: THandleFilterAccounts;
  filterCardsById: THandleFilterCardsById;
  filterCustomersById: THandleFilterCustomersById;
  filterStatementsById: THandleFilterStatementsById;
  filterTransactionsById: THandleFilterTransactionsById;
  hasProductOverride: boolean;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
  isReadOnly: boolean;
  productOverrideId: number;
  resetAccounts: TResetAccounts;
  setActiveItemId: TSetActiveItemId;
  uiItems: Array<IUiItem>;
}

const Accounts: React.FC<IAccounts> = ({
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
  currentAccBalanceLimit,
  currentAccBalanceLimitShared,
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
      const manualTransaction = uiItems.find(item => item.id === uiItemsConst.MANUAL_TRANSACTION);
      const limitAdjustment = uiItems.find(item => item.id === uiItemsConst.LIMIT_ADJUSTMENT);

      const isReadOnlyItem = (item: IUiItem) => {
        if (!item) {
          return false;
        }

        return item.permission === permissionTypesConst.READ_ONLY;
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
            balanceLimit: currentAccBalanceLimit,
            balanceLimitShared: currentAccBalanceLimitShared,
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
      currentAccBalanceLimit,
      currentAccBalanceLimitShared,
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
      viewingModalName={modalNamesConst.EDIT_ACCOUNT}
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
