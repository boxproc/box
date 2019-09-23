import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import { AccountsFilter } from './forms';

import { HandleFilterLedgerAccounts, LedgerAccountItemPrepared } from 'store/domains';
import { SelectValues } from 'types';

export interface AccountsProps {
  ledgerAccounts: Array<LedgerAccountItemPrepared>;
  filterLedgerAccounts: HandleFilterLedgerAccounts;
  institutionsOptions: Array<SelectValues>;
}

const Accounts: React.FC<AccountsProps> = ({
  ledgerAccounts,
  filterLedgerAccounts,
  institutionsOptions,
}) => {
  return (
    <TablePage
      title="Accounts"
      data={ledgerAccounts}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_LEDGER_ACCOUNT}
      editModalName={modalNamesConst.EDIT_LEDGER_ACCOUNT}
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

export default withSpinner()(Accounts);
