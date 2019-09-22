import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from 'containers/Ledger/Customers/components';
import { CustomersFilterForm } from 'containers/Ledger/Customers/forms';

import {
  HandleDeleteLedgerCustomer,
  HandleFilterLedgerCustomers,
  LedgerCustomerItemPrepared,
} from 'store/domains';

import { SelectValues } from 'types';

export interface CustomersProps {
  institutionsOptions: Array<SelectValues>;
  ledgerCustomers: Array<LedgerCustomerItemPrepared>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  ledgerCurrentCustomerName: string;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  ledgerCustomers,
  filterLedgerCustomers,
  deleteLedgerCustomer,
  ledgerCurrentCustomerName,
}) => {
  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: 'delete',
        action: deleteLedgerCustomer,
        withConfirmation: true,
        confirmationText: `Delete customer "${ledgerCurrentCustomerName}"?`,
      },
    ],
    [deleteLedgerCustomer, ledgerCurrentCustomerName]
  );

  return (
    <TablePage
      title="Customers"
      data={ledgerCustomers}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_LEDGER_CUSTOMER}
      editModalName={modalNamesConst.EDIT_LEDGER_CUSTOMER}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <CustomersFilterForm
          filterLedgerCustomers={filterLedgerCustomers}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner()(Customers);
