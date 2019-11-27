import React from 'react';

import { modalNamesConst } from 'consts';

import ManualTransactionModal from './ManualTransactionModal';

export const manualTransactionModals = [
  {
    name: modalNamesConst.LEDGER_MANUAL_TRANSACTION,
    component: <ManualTransactionModal />,
  },
];
