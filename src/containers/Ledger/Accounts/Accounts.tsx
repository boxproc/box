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
    ],
    [hasProductOverride, handleEditOverride]
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
      FilterForm={
        <AccountsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner()(
  withModal(Accounts)
);
