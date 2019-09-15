import React from 'react';

import { modalNamesConst } from 'consts';

import TransactionModal from './TransactionModal';

export const transactionsModals = [
  {
    name: modalNamesConst.LEDGER_TRANSACTION,
    component: <TransactionModal />,
  },
];
