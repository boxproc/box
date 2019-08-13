import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { AccountsFilterForm } from 'containers/Ledger/Accounts/forms';

import { modalNames } from 'consts';

import { tableColumns } from './сomponents';

import {
  HandleGetLedgerAccounts,
  HandleSetLedgerAccountId,
  LedgerAccountItemPrepared,
  OpenModal,
} from 'store/domains';

export interface AccountsProps {
  openModal: OpenModal;
  getLedgerAccounts: HandleGetLedgerAccounts;
  setLedgerAccountsId: HandleSetLedgerAccountId;
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
}

const Accounts: React.FC<AccountsProps> = ({
  openModal,
  getLedgerAccounts,
  setLedgerAccountsId,
  ledgerAccounts,
}) => {
  React.useEffect(
    () => {
      getLedgerAccounts();
    },
    [getLedgerAccounts]
  );
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setLedgerAccountsId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_LEDGER_ACCOUNT,
          });
        },
      };
    },
    [openModal, setLedgerAccountsId]
  );
  return (
    <TablePage
      title="Accounts"
      data={ledgerAccounts}
      columns={tableColumns}
      hint="Double Click on Row to View Account"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <AccountsFilterForm />
      }
    />
  );
};

export default withSpinner()(Accounts);
