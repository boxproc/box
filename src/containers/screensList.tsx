import React, { lazy } from 'react';

import { uiItemsConst } from 'consts';

const Countries = lazy(() => import('containers/Admin').then(({ Countries }) => ({ default: Countries})));
const Currencies = lazy(() => import('containers/Admin').then(({ Currencies }) => ({ default: Currencies})));
const Endpoints = lazy(() => import('containers/Admin').then(({ Endpoints }) => ({ default: Endpoints})));
const EventDataElems = lazy(() => import('containers/Admin').then(({ EventDataElems }) => ({ default: EventDataElems})));
const Events = lazy(() => import('containers/Admin').then(({ Events }) => ({ default: Events})));
const Institutions = lazy(() => import('containers/Admin').then(({ Institutions }) => ({ default: Institutions})));
const Interfaces = lazy(() => import('containers/Admin').then(({ Interfaces }) => ({ default: Interfaces})));
const Scheduler = lazy(() => import('containers/Admin').then(({ Scheduler }) => ({ default: Scheduler})));
const SystemProperties = lazy(() => import('containers/Admin').then(({ SystemProperties }) => ({ default: SystemProperties})));
const TransactionTypes = lazy(() => import('containers/Admin').then(({ TransactionTypes }) => ({ default: TransactionTypes})));
const Users = lazy(() => import('containers/Admin').then(({ Users }) => ({ default: Users})));
const UsersGroups = lazy(() => import('containers/Admin').then(({ UsersGroups }) => ({ default: UsersGroups})));

const Products = lazy(() => import('containers/ProductDesigner').then(({ Products }) => ({ default: Products})));

const ApiCalls = lazy(() => import('containers/Audit').then(({ ApiCalls }) => ({ default: ApiCalls})));
const ScheduledJobs = lazy(() => import('containers/Audit').then(({ ScheduledJobs }) => ({ default: ScheduledJobs})));
const SystemMonitor = lazy(() => import('containers/Audit').then(({ SystemMonitor }) => ({ default: SystemMonitor})));
const UiSessions = lazy(() => import('containers/Audit').then(({ UiSessions }) => ({ default: UiSessions})));
const UsersActivity = lazy(() => import('containers/Audit').then(({ UsersActivity }) => ({ default: UsersActivity})));

const Accounts = lazy(() => import('containers/Ledger').then(({ Accounts }) => ({ default: Accounts})));
const Cards = lazy(() => import('containers/Ledger').then(({ Cards }) => ({ default: Cards})));
const CurrencyRates = lazy(() => import('containers/Ledger').then(({ CurrencyRates }) => ({ default: CurrencyRates})));
const Customers = lazy(() => import('containers/Ledger').then(({ Customers }) => ({ default: Customers})));
const Statements = lazy(() => import('containers/Ledger').then(({ Statements }) => ({ default: Statements})));
const Transactions = lazy(() => import('containers/Ledger').then(({ Transactions }) => ({ default: Transactions})));

export const screensList = {
  [uiItemsConst.ACCOUNTS]: <Accounts />,
  [uiItemsConst.API_CALLS]: <ApiCalls />,
  [uiItemsConst.CARDS]: <Cards />,
  [uiItemsConst.CURRENCY_RATES]: <CurrencyRates />,
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
