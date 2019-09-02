import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { AccountsFilterForm } from 'containers/Ledger/Accounts/forms';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  HandleSetLedgerAccountId,
  LedgerAccountItemPrepared,
} from 'store/domains';

export interface AccountsProps {
  setLedgerAccountsId: HandleSetLedgerAccountId;
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
}

const Accounts: React.FC<AccountsProps> = ({
  setLedgerAccountsId,
  ledgerAccounts,
}) => {
  return (
    <TablePage
      title="Accounts"
      data={ledgerAccounts}
      columns={tableColumns}
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
