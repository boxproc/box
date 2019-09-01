import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from 'containers/Ledger/Customers/components';
import { CustomersFilterForm } from 'containers/Ledger/Customers/forms';

import {
  HandleFilterLedgerCustomers,
  HandleGetLedgerCustomerId,
  HandleGetLedgerCustomers,
  LedgerCustomerItemPrepared,
} from 'store/domains';

import { SelectValues } from 'types';

export interface CustomersProps {
  institutionsOptions: Array<SelectValues>;
  getLedgerCustomers: HandleGetLedgerCustomers;
  ledgerCustomers: Array<LedgerCustomerItemPrepared>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
  getLedgerCustomerId: HandleGetLedgerCustomerId;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  getLedgerCustomers,
  ledgerCustomers,
  filterLedgerCustomers,
  getLedgerCustomerId,
}) => {
  React.useEffect(
    () => {
      getLedgerCustomers();
    },
    [getLedgerCustomers]
  );

  return (
    <TablePage
      title="Customers"
      data={ledgerCustomers}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_LEDGER_CUSTOMER}
      editModalName={modalNames.EDIT_LEDGER_CUSTOMER}
      setCurrentIdAction={getLedgerCustomerId}
      FilterForm={
        <CustomersFilterForm
          filterLedgerCustomers={filterLedgerCustomers}
          institutionsOptions={institutionsOptions}
          initialValues={{
            institutionId: institutionsOptions[0],
          }}
        />
      }
    />
  );
};

export default withSpinner()(Customers);
