import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { tableColumns } from 'containers/Ledger/Customers/customerComponents';
import { CustomersFilterForm } from 'containers/Ledger/Customers/forms';

import { modalNames } from 'consts';

import {
  HandleFilterLedgerCustomers,
  HandleGetLedgerCustomerId,
  HandleGetLedgerCustomers,
  LedgerCustomerItemPrepared,
  OpenModal,
} from 'store/domains';

import { SelectValues } from 'types';

export interface CustomersProps {
  institutionsOptions: Array<SelectValues>;
  openModal: OpenModal;
  getLedgerCustomers: HandleGetLedgerCustomers;
  ledgerCustomers: Array<LedgerCustomerItemPrepared>;
  filterLedgerCustomers: HandleFilterLedgerCustomers;
  getLedgerCustomerId: HandleGetLedgerCustomerId;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  openModal,
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
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          getLedgerCustomerId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_LEDGER_CUSTOMER,
          });
        },
      };
    },
    [openModal, getLedgerCustomerId]
  );
  return (
    <TablePage
      title="Customers"
      data={ledgerCustomers}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_LEDGER_CUSTOMER}
      hint="Double Click on Row to Edit Customer"
      getTrGroupProps={handleOnClickRow}
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
