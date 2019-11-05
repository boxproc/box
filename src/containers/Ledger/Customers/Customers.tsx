import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { CustomersFilter } from './forms';

import {
  HandleDeleteLedgerCustomer,
  HandleFilterLedgerCustomers,
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
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  ledgerCustomers,
  filterLedgerCustomers,
  deleteLedgerCustomer,
  ledgerCurrentCustomerName,
  currentId,
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
      // {
      //   name: 'Go to Accounts',
      //   action: () => filterLedgerCustomersById({
      //     customer_id : currentCustomerId
      //   }),
      // },
      { name: 'Go to Cards',
        action: console.log('LINK'),
      },
      { name: 'Go to Statements',
        action: console.log('LINK'),
      },
      { name: 'Go to Transactions',
        action: console.log('LINK'),
      },
    ],
    [deleteLedgerCustomer, ledgerCurrentCustomerName]
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

export default withSpinner()(Customers);
