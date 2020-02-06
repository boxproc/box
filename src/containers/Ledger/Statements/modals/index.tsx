import React from 'react';

import StatementModal from './StatementModal';

import { modalNamesConst } from 'consts';

export const statementsModals = [
  {
    name: modalNamesConst.STATEMENTS,
    component: <StatementModal />,
  },
];
