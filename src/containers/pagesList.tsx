import React from 'react';

import { uiItemConsts } from 'consts';

import {
  Countries,
  Currencies,
  Endpoints,
  EventDataElems,
  Events,
  Institutions,
  Interfaces,
  Scheduler,
  SystemProperties,
  TransactionTypes,
  Users,
  UsersGroup,
} from './Administration';

import { Products } from 'containers/ProductDesigner';

import {
  Accounts,
  Cards,
  Customers,
  Statements,
  Transactions,
} from 'containers/Ledger';

import { ApiCalls, ScheduledJobs, SystemMonitor, UserActivity } from 'containers/Audit';

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
    path: uiItemConsts.ADMINISTRATION_SCHEDULER,
    component: <Scheduler />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_COUNTRIES,
    component: <Countries />,
  },
  {
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_CURRENCIES,
    component: <Currencies />,
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
    path: uiItemConsts.ADMINISTRATION_DICTIONARIES_TRANSACTION_TYPES,
    component: <TransactionTypes />,
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
    path: uiItemConsts.AUDIT_SCHEDULED_JOBS,
    component: <ScheduledJobs />,
  },
  {
    path: uiItemConsts.AUDIT_SYSTEM_MONITOR,
    component: <SystemMonitor />,
  },
  {
    path: uiItemConsts.AUDIT_USER_ACTIVITY,
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
    path: uiItemConsts.PRODUCT_DESIGNER_PRODUCTS,
    component: <Products />,
  },
];
