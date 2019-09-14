import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import { AccountsFilterForm } from 'containers/Ledger/Accounts/forms';

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
      addNewModalName={modalNamesConst.ADD_LEDGER_ACCOUNT}
      editModalName={modalNamesConst.EDIT_LEDGER_ACCOUNT}
      setCurrentIdAction={setLedgerAccountsId}
      FilterForm={
        <AccountsFilterForm />
      }
    />
  );
};

export default withSpinner()(Accounts);
