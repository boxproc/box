import React from 'react';

import { modalNamesConst } from 'consts';

import AddAccountModal from './AddAccountModal';
import EditAccountModal from './EditAccountModal';
import StatementAprsFeesRewardsModal from './StatementAprsFeesRewardsModal';

export const accountsModals = [
  {
    name: modalNamesConst.ADD_LEDGER_ACCOUNT,
    component: <AddAccountModal />,
  },
  {
    name: modalNamesConst.EDIT_LEDGER_ACCOUNT,
    component: <EditAccountModal />,
  },
  {
    name: modalNamesConst.STATEMENT_APRS_FEES_REWARDS,
    component: <StatementAprsFeesRewardsModal />,
  },
];
