import React from 'react';
import { RowInfo } from 'react-table';

import TablePage from 'components/TablePage';

import {
  CustomerFilterForm,
  tableColumns,
} from 'containers/Ledger/Customers/customerComponents';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

import { SelectValues } from 'types';

const data = [
  {
    id: 1,
    institutionId: 1,
    firstName: 'John',
    lastName: 'Jones',
    status: 'A',
    dateOfBirth: '2019-07-29',
    email: 'test@boxproc.com',
    mobilePhoneNumber: '+4477712312345',
    addressLine1: 'The Holy House',
    addressLine2: '1 High street',
    addressLine3: 'Essex',
    addressLine4: '',
    addressTown: 'Bury',
    addressPostCode: 'DD99 99DD',
    addressCountryCode: 'GBR',
    nationalityCountryCode: 'GBR',
    dateCreated: '2019-07-29',
    dateClosed: '2019-07-29',
  },
  {
    id: 2,
    institutionId: 1,
    firstName: 'Jane',
    lastName: 'Jones',
    status: 'A',
    dateOfBirth: '2019-07-29',
    email: 'test@boxproc.com',
    mobilePhoneNumber: '+4477712312345',
    addressLine1: 'The Holy House',
    addressLine2: '1 High street',
    addressLine3: 'Essex',
    addressLine4: '',
    addressTown: 'Bury',
    addressPostCode: 'DD99 99DD',
    addressCountryCode: 'GBR',
    nationalityCountryCode: 'GBR',
    dateCreated: '2019-07-29',
    dateClosed: '2019-07-29',
  },
];

export interface CustomersProps {
  institutionsOptions: Array<SelectValues>;
  openModal: OpenModal;
}

const Customers: React.FC<CustomersProps> = ({
  institutionsOptions,
  openModal,
}) => {
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          // getProductId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_LEDGER_CUSTOMER,
          });
        },
      };
    },
    [openModal]
  );
  return (
    <TablePage
      title="Customers"
      data={data}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_LEDGER_CUSTOMER}
      hint="Double Click on Row to Edit Customer"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <CustomerFilterForm
          institutionsOptions={institutionsOptions}
          initialValues={{
            institutionId: institutionsOptions[0],
          }}
        />
      }
    />
  );
};

export default Customers;
