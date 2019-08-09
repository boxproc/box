import React from 'react';

import { uiItemConsts } from 'consts';

// Administration
import CyclesEditor from 'containers/Administration/Cycles/CyclesEditor';
import EventDataElems from 'containers/Administration/Dictionaries/EventDataElems';
import Events from 'containers/Administration/Dictionaries/Events';
import Users from 'containers/Administration/Permission/Users';
import UsersGroup from 'containers/Administration/Permission/UsersGroup';
import Scheduler from 'containers/Administration/Scheduler';
import SystemProperties from 'containers/Administration/SystemProperties';

// Product Designer
import Products from 'containers/ProductDesigner/Products';

// Ledger
import UserActivities from 'containers/Audit/UserActivity';
import Accounts from 'containers/Ledger/Accounts';
import Customers from 'containers/Ledger/Customers';
import Transactions from './Ledger/Transactions';

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
    path: uiItemConsts.AUDIT_USER_ACTIVITIES,
    component: <UserActivities />,
  },
];
