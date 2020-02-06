import React from 'react';

import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst } from 'consts';

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
} from 'store/domains';
import { SelectValue } from 'types';

export interface AccountsProps extends WithModalProps {
  accounts: Array<LedgerAccountItemPrepared>;
  filterAccounts: HandleFilterLedgerAccounts;
  addProductOverride: HandleAddProductOverride;
  institutionsOptions: Array<SelectValue>;
  hasProductOverride: boolean;
  productOverrideId: number;
  resetAccounts: ResetAccounts;
  setActiveItemId: HandleSetActiveItemId;
  filterCustomersById: HandleFilterLedgerCustomersById;
  filterCardsById: HandleFilterLedgerCardsById;
  filterTransactionsById: HandleFilterLedgerTransactionsById;
  filterStatementsById: HandleFilterLedgerStatementsById;
  currentId: number;
  currentCurrencyCode: string;
  currentAccountBalanceLimit: string;
  currentAccountBalanceLimitShared: string;
  isLoading: boolean;
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
}) => {
  React.useEffect(
    () => {
      return () => resetAccounts();
    },
    [resetAccounts]
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
