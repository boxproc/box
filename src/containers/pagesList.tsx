import React from 'react';

import { uiItemConsts } from 'consts';

// Administration
import CyclesEditor from 'containers/Administration/Cycles/CyclesEditor';
import EventDataElems from 'containers/Administration/Dictionaries/EventDataElems';
import Events from 'containers/Administration/Dictionaries/Events';
import Institutions from 'containers/Administration/Institutions';
import Users from 'containers/Administration/Permission/Users';
import UsersGroup from 'containers/Administration/Permission/UsersGroup';
import Scheduler from 'containers/Administration/Scheduler';
import SystemProperties from 'containers/Administration/SystemProperties';
import Endpoints from './Administration/Endpoints';
import Interfaces from './Administration/Interfaces';

// Product Designer
import Products from 'containers/ProductDesigner/Products';

// Ledger
import Accounts from 'containers/Ledger/Accounts';
import Customers from 'containers/Ledger/Customers';
import Cards from './Ledger/Cards';
import Transactions from './Ledger/Transactions';

// Audit
import UserActivities from 'containers/Audit/UserActivity';

export const pagesList = [
  {
    path: uiItemConsts.ADMINISTRATION_SYS_PROPS,
    component: <SystemProperties />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_INSTITUTIONS,
    component: <Institutions />,
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
    component: <EventDataElems />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_USER,
    component: <Users />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_USERS_GROUP,
    component: <UsersGroup />,
  },
  {
    path: uiItemConsts.AUDIT_USER_ACTIVITIES,
    component: <UserActivities />,
  },
  {
    path: uiItemConsts.LEDGER_CARDS,
    component: <Cards />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_ENDPOINTS,
    component: <Endpoints />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_INTERFACES,
    component: <Interfaces />,
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
    path: uiItemConsts.LEDGER_TRANSACTIONS,
    component: <Transactions />,
  },
  {
    path: uiItemConsts.LEDGER_CARDS,
    component: <Cards />,
  },
  {
    path: uiItemConsts.PRODUCTS,
    component: <Products />,
  },
];
