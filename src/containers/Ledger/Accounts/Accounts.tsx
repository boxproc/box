import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { AccountsFilterForm } from 'containers/Ledger/Accounts/forms';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  HandleGetLedgerAccounts,
  HandleSetLedgerAccountId,
  LedgerAccountItemPrepared,
} from 'store/domains';

export interface AccountsProps {
  getLedgerAccounts: HandleGetLedgerAccounts;
  setLedgerAccountsId: HandleSetLedgerAccountId;
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
}

const Accounts: React.FC<AccountsProps> = ({
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

  return (
    <TablePage
      title="Accounts"
      data={ledgerAccounts}
      columns={tableColumns}
      hint="Double Click on Row to View Account"
      addNewModalName={modalNames.ADD_LEDGER_ACCOUNT}
      editModalName={modalNames.EDIT_LEDGER_ACCOUNT}
      setCurrentIdAction={setLedgerAccountsId}
      FilterForm={
        <AccountsFilterForm />
      }
    />
  );
};

export default withSpinner()(Accounts);
