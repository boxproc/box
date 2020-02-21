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

import {
  ApiCalls,
  ScheduledJobs,
  SystemMonitor,
  UiSessions,
  UserActivity,
} from 'containers/Audit';

export const pagesList = [
  {
    path: uiItemsConst.ADMINISTRATION_SYS_PROPS,
    component: <SystemProperties />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_INSTITUTIONS,
    component: <Institutions />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_SCHEDULER,
    component: <Scheduler />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_DICTIONARIES_COUNTRIES,
    component: <Countries />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_DICTIONARIES_CURRENCIES,
    component: <Currencies />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_DICTIONARIES_EVENTS,
    component: <Events />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_DICTIONARIES_EVENT_DATA_ELEMENTS,
    component: <EventDataElems />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_DICTIONARIES_TRANSACTION_TYPES,
    component: <TransactionTypes />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_USER,
    component: <Users />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_USERS_GROUP,
    component: <UsersGroup />,
  },
  {
    path: uiItemsConst.AUDIT_API_CALLS,
    component: <ApiCalls />,
  },
  {
    path: uiItemsConst.AUDIT_SCHEDULED_JOBS,
    component: <ScheduledJobs />,
  },
  {
    path: uiItemsConst.AUDIT_SYSTEM_MONITOR,
    component: <SystemMonitor />,
  },
  {
    path: uiItemsConst.AUDIT_USER_ACTIVITY,
    component: <UserActivity />,
  },
  {
    path: uiItemsConst.AUDIT_UI_SESSIONS,
    component: <UiSessions />,
  },
  {
    path: uiItemsConst.LEDGER_CARDS,
    component: <Cards />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_ENDPOINTS,
    component: <Endpoints />,
  },
  {
    path: uiItemsConst.ADMINISTRATION_INTERFACES,
    component: <Interfaces />,
  },
  {
    path: uiItemsConst.LEDGER_CUSTOMERS,
    component: <Customers />,
  },
  {
    path: uiItemsConst.LEDGER_ACCOUNTS,
    component: <Accounts />,
  },
  {
    path: uiItemsConst.LEDGER_STATEMENTS,
    component: <Statements />,
  },
  {
    path: uiItemsConst.LEDGER_TRANSACTIONS,
    component: <Transactions />,
  },
  {
    path: uiItemsConst.LEDGER_CARDS,
    component: <Cards />,
  },
  {
    path: uiItemsConst.PRODUCT_DESIGNER_PRODUCTS,
    component: <Products />,
  },
];
