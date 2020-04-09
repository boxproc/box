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

export const pagesList = {
  [uiItemsConst.SYSTEM_PROPERTIES]: <SystemProperties />,
  [uiItemsConst.INSTITUTIONS]: <Institutions />,
  [uiItemsConst.SCHEDULER]: <Scheduler />,
  [uiItemsConst.DICTIONARIES_COUNTRIES]: <Countries />,
  [uiItemsConst.DICTIONARIES_CURRENCIES]: <Currencies />,
  [uiItemsConst.DICTIONARIES_EVENTS]: <Events />,
  [uiItemsConst.DICTIONARIES_EVENT_DATA_ELEMENTS]: <EventDataElems />,
  [uiItemsConst.DICTIONARIES_TRANSACTION_TYPES]: <TransactionTypes />,
  [uiItemsConst.USERS]: <Users />,
  [uiItemsConst.USERS_GROUPS]: <UsersGroups />,
  [uiItemsConst.API_CALLS]: <ApiCalls />,
  [uiItemsConst.SCHEDULED_JOBS]: <ScheduledJobs />,
  [uiItemsConst.SYSTEM_MONITOR]: <SystemMonitor />,
  [uiItemsConst.USERS_ACTIVITY]: <UsersActivity />,
  [uiItemsConst.UI_SESSIONS]: <UiSessions />,
  [uiItemsConst.CARDS]: <Cards />,
  [uiItemsConst.ENDPOINTS]: <Endpoints />,
  [uiItemsConst.INTERFACES]: <Interfaces />,
  [uiItemsConst.CUSTOMERS]: <Customers />,
  [uiItemsConst.ACCOUNTS]: <Accounts />,
  [uiItemsConst.STATEMENTS]: <Statements />,
  [uiItemsConst.TRANSACTIONS]: <Transactions />,
  [uiItemsConst.CARDS]: <Cards />,
  [uiItemsConst.PRODUCTS]: <Products />,
};
