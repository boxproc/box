import React from 'react';

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

import { SelectValue } from 'types';

export interface CustomersProps {
  institutionsOptions: Array<SelectValue>;
  customers: Array<LedgerCustomerItemPrepared>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  currentCustomerName: string;
  resetCustomers: ResetCustomers;
  currentId: number;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerStatementsById: HandleFilterLedgerStatementsById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  isLoading: boolean;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  customers,
  filterLedgerCustomers,
  deleteLedgerCustomer,
  currentCustomerName,
  currentId,
  filterLedgerCardsById,
  filterLedgerTransactionsById,
  filterLedgerStatementsById,
  filterLedgerAccountsById,
  resetCustomers,
  isLoading,
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
        confirmationText: `Delete customer "${currentCustomerName}"?`,
      },
      { isDivider: true },
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
      currentCustomerName,
      filterLedgerTransactionsById,
      filterLedgerStatementsById,
      filterLedgerCardsById,
      filterLedgerAccountsById,
      currentId,
    ]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Customers"
      data={customers}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_CUSTOMER}
      editModalName={modalNamesConst.EDIT_CUSTOMER}
      contextMenuItems={contextMenuItems}
      filterAction={filterLedgerCustomers}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <CustomersFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Customers;
