import React from 'react';

import { modalNamesConst } from 'consts';

import TransactionModal from './TransactionModal';

export const transactionsModals = [
  {
    name: modalNamesConst.TRANSACTION,
    component: <TransactionModal />,
  },
];
