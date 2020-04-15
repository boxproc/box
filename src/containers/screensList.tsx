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

export const screensList = {
  [uiItemsConst.ACCOUNTS]: <Accounts />,
  [uiItemsConst.API_CALLS]: <ApiCalls />,
  [uiItemsConst.CARDS]: <Cards />,
  [uiItemsConst.CARDS]: <Cards />,
  [uiItemsConst.CUSTOMERS]: <Customers />,
  [uiItemsConst.DICTIONARIES_COUNTRIES]: <Countries />,
  [uiItemsConst.DICTIONARIES_CURRENCIES]: <Currencies />,
  [uiItemsConst.DICTIONARIES_EVENT_DATA_ELEMENTS]: <EventDataElems />,
  [uiItemsConst.DICTIONARIES_EVENTS]: <Events />,
  [uiItemsConst.DICTIONARIES_TRANSACTION_TYPES]: <TransactionTypes />,
  [uiItemsConst.ENDPOINTS]: <Endpoints />,
  [uiItemsConst.INSTITUTIONS]: <Institutions />,
  [uiItemsConst.INTERFACES]: <Interfaces />,
  [uiItemsConst.PRODUCTS]: <Products />,
  [uiItemsConst.SCHEDULED_JOBS]: <ScheduledJobs />,
  [uiItemsConst.SCHEDULER]: <Scheduler />,
  [uiItemsConst.STATEMENTS]: <Statements />,
  [uiItemsConst.SYSTEM_MONITOR]: <SystemMonitor />,
  [uiItemsConst.SYSTEM_PROPERTIES]: <SystemProperties />,
  [uiItemsConst.TRANSACTIONS]: <Transactions />,
  [uiItemsConst.UI_SESSIONS]: <UiSessions />,
  [uiItemsConst.USERS_ACTIVITY]: <UsersActivity />,
  [uiItemsConst.USERS_GROUPS]: <UsersGroups />,
  [uiItemsConst.USERS]: <Users />,
};
