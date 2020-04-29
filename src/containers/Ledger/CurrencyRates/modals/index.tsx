import React from 'react';

import { modalNamesConst } from 'consts';

import AddCurrencyRateModal from './AddCurrencyRateModal';
import EditCurrencyRateModal from './EditCurrencyRatesModal';

export const currencyRatesModals = [
  {
    name: modalNamesConst.ADD_CURRENCY_RATE,
    component: <AddCurrencyRateModal />,
  },
  {
    name: modalNamesConst.EDIT_CURRENCY_RATE,
    component: <EditCurrencyRateModal />,
  },
];
