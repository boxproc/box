import React from 'react';

import { uiItemConsts } from 'consts';

import CyclesEditor from 'containers/Administration/Cycles/CyclesEditor';
import EventDataElements from 'containers/Administration/EventDataElements';
import Events from 'containers/Administration/Events';
import Scheduler from 'containers/Administration/Scheduler';
import SystemProperties from 'containers/Administration/SystemProperties';
import Products from 'containers/ProductDesigner/Products';
import {
  Accounts,
  Countries,
  Currencies,
  Customers,
} from '../Pages/Pages';

export const pagesList = [
  {
    path: uiItemConsts.ADMINISTRATION_SYS_PROPS,
    component: <SystemProperties />,
  },
  {
    path: uiItemConsts.PRODUCTS,
    component: <Products />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_CYCLE_EDITOR,
    component: <CyclesEditor />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_SCHEDULER,
    component: <Scheduler />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_EVENTS,
    component: <Events />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_EVENT_DATA_ELEMENTS,
    component: <EventDataElements />,
  },
  {
    path: uiItemConsts.LEDGER_CUSTOMERS,
    component: <Customers />,
  },
  {
    path: uiItemConsts.LEDGER_ACCOUNTS,
    component: <Accounts />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_COUNTRIES,
    component: <Countries />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_CURRENCIES,
    component: <Currencies />,
  },
];
