import React from 'react';

import { modalNamesConst } from 'consts';
import MinimumRepaymentModal from './MinimumRepaymentModal';
import StatementModal from './StatementModal';

export const statementsModals = [
  {
    name: modalNamesConst.STATEMENTS,
    component: <StatementModal />,
  },
  {
    name: modalNamesConst.MINIMUM_REPAYMENT,
    component: <MinimumRepaymentModal />,
  },
];
