import React from 'react';

import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

export interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
  return (
    <TablePage
      title="Customers"
      data={[]}
      columns={[]}
      addNewModalName={modalNames.ADD_LEDGER_CUSTOMER}
      hint="Hint"
      // FilterForm={}
    />
  );
};

export default Customers;
