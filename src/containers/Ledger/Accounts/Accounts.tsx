import React from 'react';

import { TablePage, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst } from 'consts';

import { tableColumns } from './components';

import { AccountsFilter } from './forms';

import {
  HandleAddProductOverride,
  HandleFilterLedgerAccounts,
  LedgerAccountItemPrepared,
} from 'store/domains';
import { SelectValues } from 'types';

export interface AccountsProps extends WithModalProps {
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
  filterLedgerAccounts: HandleFilterLedgerAccounts;
  addProductOverride: HandleAddProductOverride;
  institutionsOptions: Array<SelectValues>;
  hasProductOverride: boolean;
}

const Accounts: React.FC<AccountsProps> = ({
  ledgerAccounts,
  filterLedgerAccounts,
  institutionsOptions,
  hasProductOverride,
  addProductOverride,
  openModal,
}) => {
  const handleEditOverride = React.useCallback(
    () => {
      hasProductOverride
        ? openModal({
          name: modalNamesConst.EDIT_PRODUCT,
        })
        : addProductOverride({
          withOpenProductModal: true,
        });
    },
    [openModal, addProductOverride, hasProductOverride]
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
    <TablePage
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
