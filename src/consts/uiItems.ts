export const basePath = '/ui/';

export enum uiItemsConst {
  DICTIONARIES_COUNTRIES = 'administration/dictionaries/countries',
  DICTIONARIES_CURRENCIES = 'administration/dictionaries/currencies',
  DICTIONARIES_EVENTS = 'administration/dictionaries/events',
  DICTIONARIES_EVENT_DATA_ELEMENTS = 'administration/dictionaries/event_data_elements',
  DICTIONARIES_TRANSACTION_TYPES = 'administration/dictionaries/transaction_types',
  INTERFACES = 'administration/interfaces',
  INSTITUTIONS = 'administration/institutions',
  USERS = 'administration/permissions/users',
  USERS_GROUPS = 'administration/permissions/user_groups',
  ENDPOINTS = 'administration/endpoints',
  SCHEDULER = 'administration/scheduler',
  SYSTEM_PROPERTIES = 'administration/system_properties',

  USERS_ACTIVITY = 'audit/users_activity',
  API_CALLS = 'audit/api_calls',
  SCHEDULED_JOBS = 'audit/scheduled_jobs',
  SYSTEM_MONITOR = 'audit/system_monitor',
  UI_SESSIONS = 'audit/ui_sessions',

  ACCOUNTS = 'ledger/accounts',
  CARDS = 'ledger/cards',
  CUSTOMERS = 'ledger/customers',
  MANUAL_TRANSACTION = 'ledger/manual_transaction',
  LIMIT_ADJUSTMENT = 'ledger/limit_adjustment',
  TRANSACTIONS = 'ledger/transactions',
  STATEMENTS = 'ledger/statements',
  SETTLE_TRANSACTION = 'ledger/settle_transaction',

  PRODUCTS = 'product_designer/products',
}
