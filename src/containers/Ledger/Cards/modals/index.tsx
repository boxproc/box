import React from 'react';

import { modalNamesConst } from 'consts';

import InfoCardModal from './InfoCardModal';

export const cardsModals = [
  {
    name: modalNamesConst.INFO_LEDGER_CARDS,
    component: <InfoCardModal />,
  },
];
