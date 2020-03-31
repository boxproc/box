import React from 'react';

import { uiItemsConst } from 'consts';

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
  UsersGroups,
} from './Admin';

import { Products } from 'containers/ProductDesigner';

import {
  Accounts,
  Cards,
  Customers,
  Statements,
  Transactions,
} from 'containers/Ledger';

import {
  ApiCalls,
  ScheduledJobs,
  SystemMonitor,
  UiSessions,
  UsersActivity,
} from 'containers/Audit';

export const pagesList = [
  {
    path: uiItemsConst.SYSTEM_PROPERTIES,
    component: <SystemProperties />,
  },
  {
    path: uiItemsConst.INSTITUTIONS,
    component: <Institutions />,
  },
  {
    path: uiItemsConst.SCHEDULER,
    component: <Scheduler />,
  },
  {
    path: uiItemsConst.DICTIONARIES_COUNTRIES,
    component: <Countries />,
  },
  {
    path: uiItemsConst.DICTIONARIES_CURRENCIES,
    component: <Currencies />,
  },
  {
    path: uiItemsConst.DICTIONARIES_EVENTS,
    component: <Events />,
  },
  {
    path: uiItemsConst.DICTIONARIES_EVENT_DATA_ELEMENTS,
    component: <EventDataElems />,
  },
  {
    path: uiItemsConst.DICTIONARIES_TRANSACTION_TYPES,
    component: <TransactionTypes />,
  },
  {
    path: uiItemsConst.USERS,
    component: <Users />,
  },
  {
    path: uiItemsConst.USERS_GROUPS,
    component: <UsersGroups />,
  },
  {
    path: uiItemsConst.API_CALLS,
    component: <ApiCalls />,
  },
  {
    path: uiItemsConst.SCHEDULED_JOBS,
    component: <ScheduledJobs />,
  },
  {
    path: uiItemsConst.SYSTEM_MONITOR,
    component: <SystemMonitor />,
  },
  {
    path: uiItemsConst.USERS_ACTIVITY,
    component: <UsersActivity />,
  },
  {
    path: uiItemsConst.UI_SESSIONS,
    component: <UiSessions />,
  },
  {
    path: uiItemsConst.CARDS,
    component: <Cards />,
  },
  {
    path: uiItemsConst.ENDPOINTS,
    component: <Endpoints />,
  },
  {
    path: uiItemsConst.INTERFACES,
    component: <Interfaces />,
  },
  {
    path: uiItemsConst.CUSTOMERS,
    component: <Customers />,
  },
  {
    path: uiItemsConst.ACCOUNTS,
    component: <Accounts />,
  },
  {
    path: uiItemsConst.STATEMENTS,
    component: <Statements />,
  },
  {
    path: uiItemsConst.TRANSACTIONS,
    component: <Transactions />,
  },
  {
    path: uiItemsConst.CARDS,
    component: <Cards />,
  },
  {
    path: uiItemsConst.PRODUCTS,
    component: <Products />,
  },
];
