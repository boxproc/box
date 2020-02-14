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
  filterCustomers: HandleFilterLedgerCustomers;
  deleteCustomer: HandleDeleteLedgerCustomer;
  currentCustomerName: string;
  resetCustomers: ResetCustomers;
  currentId: number;
  filterCardsById: HandleFilterLedgerCardsById;
  filterTransactionsById: HandleFilterLedgerTransactionsById;
  filterStatementsById: HandleFilterLedgerStatementsById;
  filterAccountsById: HandleFilterLedgerAccountsById;
  isLoading: boolean;
  isReadOnly: boolean;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  customers,
  filterCustomers,
  deleteCustomer,
  currentCustomerName,
  currentId,
  filterCardsById,
  filterTransactionsById,
  filterStatementsById,
  filterAccountsById,
  resetCustomers,
  isLoading,
  isReadOnly,
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
        isDisabled: isReadOnly,
        action: () => deleteCustomer(currentId),
        withConfirmation: true,
        confirmationText: `Delete customer "${currentCustomerName}"?`,
      },
      { isDivider: true },
      {
        name: 'Accounts',
        action: () => filterAccountsById({ customer_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterCardsById({ customer_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterStatementsById({ customer_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterTransactionsById({ customer_id: currentId }),
      },
    ],
    [
      deleteCustomer,
      currentCustomerName,
      filterTransactionsById,
      filterStatementsById,
      filterCardsById,
      filterAccountsById,
      currentId,
      isReadOnly,
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
      filterAction={filterCustomers}
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
