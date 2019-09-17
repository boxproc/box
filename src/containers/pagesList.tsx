import React from 'react';

import { uiItemConsts } from 'consts';

import {
  CyclesEditor,
  Endpoints,
  EventDataElems,
  Events,
  Institutions,
  Interfaces,
  Scheduler,
  SystemProperties,
  Users,
  UsersGroup,
} from './Administration';

import { Products } from 'containers/ProductDesigner';

import { Accounts, Cards, Customers, Statements, Transactions } from 'containers/Ledger';

import { ApiCalls, UserActivity } from 'containers/Audit';

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
    path: uiItemConsts.AUDIT_API_CALLS,
    component: <ApiCalls />,
  },
  {
    path: uiItemConsts.AUDIT_USER_ACTIVITIES,
    component: <UserActivity />,
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
    path: uiItemConsts.LEDGER_STATEMENTS,
    component: <Statements />,
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
