import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { CustomersFilter } from './forms';

import {
  HandleDeleteLedgerCustomer,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomers,
  HandleFilterLedgerTransactionsById,
  LedgerCustomerItemPrepared,
  ResetCustomers,
  THandleFilterAccountsById,
  THandleFilterStatementsById,
} from 'store';

import { ISelectValue } from 'types';

interface ICustomers {
  currentCustomerName: string;
  currentId: number;
  customers: ImmutableArray<LedgerCustomerItemPrepared>;
  deleteCustomer: HandleDeleteLedgerCustomer;
  filterAccountsById: THandleFilterAccountsById;
  filterCardsById: HandleFilterLedgerCardsById;
  filterCustomers: HandleFilterLedgerCustomers;
  filterStatementsById: THandleFilterStatementsById;
  filterTransactionsById: HandleFilterLedgerTransactionsById;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
  isReadOnly: boolean;
  resetCustomers: ResetCustomers;
}

const Customers: React.FC<ICustomers> = ({
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
      viewingModalName={modalNamesConst.EDIT_CUSTOMER}
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
