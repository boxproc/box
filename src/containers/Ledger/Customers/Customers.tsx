import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { CustomersFilter } from './forms';

import {
  HandleDeleteLedgerCustomer,
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomers,
  HandleFilterLedgerStatementsById,
  HandleFilterLedgerTransactionsById,
  LedgerCustomerItemPrepared,
  ResetCustomers,
} from 'store/domains';

import { SelectValues } from 'types';

export interface CustomersProps {
  institutionsOptions: Array<SelectValues>;
  ledgerCustomers: Array<LedgerCustomerItemPrepared>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  ledgerCurrentCustomerName: string;
  resetCustomers: ResetCustomers;
  currentId: number;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerStatementsById: HandleFilterLedgerStatementsById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  ledgerCustomers,
  filterLedgerCustomers,
  deleteLedgerCustomer,
  ledgerCurrentCustomerName,
  currentId,
  filterLedgerCardsById,
  filterLedgerTransactionsById,
  filterLedgerStatementsById,
  filterLedgerAccountsById,
  resetCustomers,
}) => {
  React.useEffect(
    () => {
      return () => resetCustomers();
    },
    [resetCustomers]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        action: deleteLedgerCustomer,
        withConfirmation: true,
        confirmationText: `Delete customer "${ledgerCurrentCustomerName}"?`,
      },
      {
        isDivider: true,
      },
      {
        name: 'Accounts',
        action: () => filterLedgerAccountsById({ customer_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterLedgerCardsById({ customer_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterLedgerStatementsById({ customer_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterLedgerTransactionsById({ customer_id: currentId }),
      },
    ],
    [
      deleteLedgerCustomer,
      ledgerCurrentCustomerName,
      filterLedgerTransactionsById,
      filterLedgerStatementsById,
      filterLedgerCardsById,
      filterLedgerAccountsById,
      currentId,
    ]
  );

  return (
    <PageTemplate
      title="Customers"
      data={ledgerCustomers}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_LEDGER_CUSTOMER}
      editModalName={modalNamesConst.EDIT_LEDGER_CUSTOMER}
      contextMenuItems={contextMenuItems}
      filterAction={filterLedgerCustomers}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <CustomersFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Customers);
