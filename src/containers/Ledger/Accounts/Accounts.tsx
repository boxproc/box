import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import { AccountsFilterForm } from 'containers/Ledger/Accounts/forms';

import { LedgerAccountItemPrepared } from 'store/domains';

export interface AccountsProps {
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
}

const Accounts: React.FC<AccountsProps> = ({
  ledgerAccounts,
}) => {
  return (
    <TablePage
      title="Accounts"
      data={ledgerAccounts}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_LEDGER_ACCOUNT}
      editModalName={modalNamesConst.EDIT_LEDGER_ACCOUNT}
      FilterForm={
        <AccountsFilterForm />
      }
    />
  );
};

export default withSpinner()(Accounts);
