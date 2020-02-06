import React from 'react';

import { modalNamesConst } from 'consts';

import AddAccountModal from './AddAccountModal';
import EditAccountModal from './EditAccountModal';
import StatementAprsModal from './StatementAprsModal';

export const accountsModals = [
  {
    name: modalNamesConst.ADD_ACCOUNT,
    component: <AddAccountModal />,
  },
  {
    name: modalNamesConst.EDIT_ACCOUNT,
    component: <EditAccountModal />,
  },
  {
    name: modalNamesConst.STATEMENT_APRS,
    component: <StatementAprsModal />,
  },
];
