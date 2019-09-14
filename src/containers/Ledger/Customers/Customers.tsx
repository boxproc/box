import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNames } from 'consts';

import { tableColumns } from 'containers/Ledger/Customers/components';
import { CustomersFilterForm } from 'containers/Ledger/Customers/forms';

import {
  HandleDeleteLedgerCustomer,
  HandleFilterLedgerCustomers,
  HandleGetLedgerCustomerId,
  LedgerCustomerItemPrepared,
} from 'store/domains';

import { SelectValues } from 'types';

export interface CustomersProps {
  institutionsOptions: Array<SelectValues>;
  ledgerCustomers: Array<LedgerCustomerItemPrepared>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
  getLedgerCustomerId: HandleGetLedgerCustomerId;
  isFilterFormDirty: boolean;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  ledgerCurrentCustomerName: string;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  ledgerCustomers,
  filterLedgerCustomers,
  getLedgerCustomerId,
  isFilterFormDirty,
  deleteLedgerCustomer,
  ledgerCurrentCustomerName,
}) => {
  const contextMenuItems = [
    {
      name: 'Delete',
      icon: 'delete',
      action: deleteLedgerCustomer,
      withConfirmation: true,
      confirmationText: `Delete customer "${ledgerCurrentCustomerName}"?`,
    },
  ];

  return (
    <TablePage
      title="Customers"
      data={ledgerCustomers}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_LEDGER_CUSTOMER}
      editModalName={modalNames.EDIT_LEDGER_CUSTOMER}
      setCurrentIdAction={getLedgerCustomerId}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <CustomersFilterForm
          filterLedgerCustomers={filterLedgerCustomers}
          institutionsOptions={institutionsOptions}
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner()(Customers);
