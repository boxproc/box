import React from 'react';

import { modalNamesConst } from 'consts';

import ManualTransactionModal from './ManualTransactionModal';
import ResultManualTransactionModal from './ResultManualTransactionModal';

export const manualTransactionModals = [
  {
    name: modalNamesConst.LEDGER_MANUAL_TRANSACTION,
    component: <ManualTransactionModal />,
  },
  {
    name: modalNamesConst.LEDGER_MANUAL_TRANSACTION_RESULT,
    component: <ResultManualTransactionModal />,
  },
];
