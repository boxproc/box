import React from 'react';

import { uiItemConsts } from 'consts';

import SystemProperties from 'containers/Administration/SystemProperties';
import {
  Accounts,
  Countries,
  Currencies,
  Customers,
} from '../Pages/Pages';

export const pagesList = [
  {
    path: uiItemConsts.ADMINISTRATION_SYS_PROPS,
    component: <SystemProperties/>,
  },
  {
    path: uiItemConsts.LEDGER_CUSTOMERS,
    component: <Customers/>,
  },
  {
    path: uiItemConsts.LEDGER_ACCOUNTS,
    component: <Accounts/>,
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
