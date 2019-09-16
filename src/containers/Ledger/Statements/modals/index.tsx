import React from 'react';

import StatementsModal from './StatementsModal';

import { modalNamesConst } from 'consts';

export const statementsModals = [
  {
    name: modalNamesConst.LEDGER_STATEMENTS,
    component: <StatementsModal />,
  },
];
