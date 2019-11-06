import React from 'react';

import { withSpinner } from 'components';
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
import { SelectValues } from 'types';

export interface AccountsProps extends WithModalProps {
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
  filterLedgerAccounts: HandleFilterLedgerAccounts;
  addProductOverride: HandleAddProductOverride;
  institutionsOptions: Array<SelectValues>;
  hasProductOverride: boolean;
  productOverrideId: number;
  resetAccounts: ResetAccounts;
  setActiveItemId: HandleSetActiveItemId;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerStatementsById: HandleFilterLedgerStatementsById;
  currentId: number;
}

const Accounts: React.FC<AccountsProps> = ({
  ledgerAccounts,
  filterLedgerAccounts,
  institutionsOptions,
  hasProductOverride,
  addProductOverride,
  openModal,
  resetAccounts,
  setActiveItemId,
  productOverrideId,
  currentId,
  filterLedgerCustomersById,
  filterLedgerCardsById,
  filterLedgerTransactionsById,
  filterLedgerStatementsById,
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
        openModal({
          name: modalNamesConst.EDIT_PRODUCT,
        });
      } else {
        addProductOverride({
          withOpenProductModal: true,
        });
      }
    },
    [openModal, addProductOverride, hasProductOverride, productOverrideId, setActiveItemId]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: hasProductOverride ? 'Edit product override' : 'Add product override',
        icon: hasProductOverride ? iconNamesConst.EDIT : iconNamesConst.PLUS,
        action: handleEditOverride,
      },
      {
        isDivider: true,
      },
      {
        name: 'Customers',
        action: () => filterLedgerCustomersById({ account_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterLedgerCardsById({ account_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterLedgerStatementsById({ account_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterLedgerTransactionsById({ account_id: currentId }),
      },
    ],
    [
      hasProductOverride,
      handleEditOverride,
      filterLedgerCustomersById,
      filterLedgerTransactionsById,
      filterLedgerStatementsById,
      filterLedgerCardsById,
      currentId,
    ]
  );

  return (
    <PageTemplate
      title="Accounts"
      data={ledgerAccounts}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_LEDGER_ACCOUNT}
      editModalName={modalNamesConst.EDIT_LEDGER_ACCOUNT}
      editableItemName="account"
      contextMenuItems={contextMenuItems}
      filterAction={filterLedgerAccounts}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <AccountsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner()(
  withModal(Accounts)
);
