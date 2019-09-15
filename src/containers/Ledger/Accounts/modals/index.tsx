import React from 'react';

import { modalNamesConst } from 'consts';

import AddAccountModal from './AddAccountModal';
import EditAccountModal from './EditAccountModal';

export const accountsModals = [
  {
    name: modalNamesConst.ADD_LEDGER_ACCOUNT,
    component: <AddAccountModal />,
  },
  {
    name: modalNamesConst.EDIT_LEDGER_ACCOUNT,
    component: <EditAccountModal />,
  },
];
