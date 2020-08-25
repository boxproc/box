import React from 'react';

import { modalNamesConst } from 'consts';
import MinimumRepaymentModal from './MinimumRepaymentModal';
import StatementAprLogsModal from './StatementAprLogsModal';
import StatementModal from './StatementModal';

export const statementsModals = [
  {
    name: modalNamesConst.STATEMENTS,
    component: <StatementModal />,
  },
  {
    name: modalNamesConst.STATEMENT_APR_LOGS,
    component: <StatementAprLogsModal />,
  },
  {
    name: modalNamesConst.MINIMUM_REPAYMENT,
    component: <MinimumRepaymentModal />,
  },
];
