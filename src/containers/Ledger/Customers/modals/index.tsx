import React from 'react';

import { modalNamesConst } from 'consts';

import AddCustomerModal from './AddCustomerModal';
import EditCustomerModal from './EditCustomerModal';

export const customersModals = [
  {
    name: modalNamesConst.ADD_CUSTOMER,
    component: <AddCustomerModal />,
  },
  {
    name: modalNamesConst.EDIT_CUSTOMER,
    component: <EditCustomerModal />,
  },
];
