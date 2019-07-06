import React from 'react';

import { uiItemConsts } from 'consts';

import {
  Accounts,
  Countries,
  Currencies,
  Customers,
  SystemProperties,
} from './Pages';

export const pagesList = [
  {
    path: uiItemConsts.LEDGER_CUSTOMERS,
    component: <Customers/>,
  },
  {
    path: uiItemConsts.LEDGER_ACCOUNTS,
    component: <Accounts/>,
  },
  {
    path: uiItemConsts.ADMINISTRATION_SYS_PROPS,
    component: <SystemProperties/>,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_COUNTRIES,
    component: <Countries/>,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_CURRENCIES,
    component: <Currencies/>,
  },
];
