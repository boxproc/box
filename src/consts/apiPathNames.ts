export const basePath = '/ui/';

export enum authPathNames {
  LOGIN = '/ui/auth/login',
  LOGOUT = '/ui/auth/logout',
}

export enum uiItemsPathNames {
  GET = '/ui/items/get',
}

export enum constsPathNames {
  GET_INSTITUTIONS = '/ui/service_data/institutions/get',
}

export enum cyclesPathNames {
  GET = '/ui/administration/cycles/cycles_editor/get',
  CREATE = '/ui/administration/cycles/cycles_editor/create',
  DELETE = '/ui/administration/cycles/cycles_editor/delete',
  UPDATE = '/ui/administration/cycles/cycles_editor/update',
  GET_DESCRIPTIONS = '/ui/administration/cycles/cycles_editor/get_descriptions',
}

export enum adminInstitutionsPathNames {
  GET = '/ui/service_data/institutions/get_all',
  CREATE = '/ui/service_data/institutions/create',
  DELETE = '/ui/service_data/institutions/delete',
  UPDATE = '/ui/service_data/institutions/update',
}

export enum adminInterfacePathNames {
  GET = '/ui/administration/interfaces/get',
  CREATE = '/ui/administration/interfaces/create',
  DELETE = '/ui/administration/interfaces/delete',
  UPDATE = '/ui/administration/interfaces/update',
}

export enum adminEndpointsPathNames {
  GET = '/ui/administration/endpoints/get',
  CREATE = '/ui/administration/endpoints/create',
  DELETE = '/ui/administration/endpoints/delete',
  UPDATE = '/ui/administration/endpoints/update',
  GET_BY_INSTITUTION_ID = '/ui/administration/endpoints/get_by_institution',
}

export enum dictionariesPathNames {
  GET_COUNTRIES = '/ui/administration/dictionaries/countries/get',
  GET_CURRENCIES = '/ui/administration/dictionaries/currencies/get',
  GET_EVENTS = '/ui/administration/dictionaries/events/get',
  GET_EVENT_DATA_ELEMS = '/ui/administration/dictionaries/event_data_elements/get',
  GET_CARD_STATUSES = 'ui/administration/dictionaries/card_statuses/get',
  GET_TRANSACTION_TYPES = 'ui/administration/dictionaries/transaction_types/get',
}

export enum adminUserPathNames {
  GET = '/ui/administration/permissions/users/get',
  CREATE = '/ui/administration/permissions/users/create',
  UPDATE = '/ui/administration/permissions/users/update',
  CHANGE_PASSWORD = '/ui/administration/permissions/users/change_password',
  CHANGE_PROFILE = '/ui/administration/permissions/administrator/change_profile',
  GET_ADMIN_ACCESS_USERS = '/ui/administration/permissions/administrator/get',
}

export enum adminUserGroupsPathNames {
  GET_USERS_GROUPS = '/ui/administration/permissions/users_group/get',
  GET_ACTIVE_USERS = '/ui/administration/permissions/users_group_members/get_active_users',
  GET_GROUP_MEMBERS = '/ui/administration/permissions/users_group_members/get',
  GET_GROUP_UI_ITEMS = '/ui/administration/permissions/group_permissions_ui_items/get',
  GET_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/get',
  CREATE_USERS_GROUP = '/ui/administration/permissions/users_group/create',
  UPDATE_USERS_GROUP = '/ui/administration/permissions/users_group/update',
  DELETE_USERS_GROUP_MEMBER = '/ui/administration/permissions/users_group_members/delete',
  DELETE_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/delete',
  CREATE_USERS_GROUP_MEMBERS = '/ui/administration/permissions/users_group_members/create',
  CREATE_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/create',
}

export enum adminSchedulerPathNames {
  GET = '/ui/administration/scheduler/get',
  DELETE = '/ui/administration/scheduler/delete',
  CREATE = '/ui/administration/scheduler/create',
  UPDATE = '/ui/administration/scheduler/update',
  GET_NAMES_BY_INSTITUTION_ID = '/ui/administration/scheduler/get_scheduler_name',
  SEND_ACTION = '/sys/scheduler/management',
}

export enum adminSystemPropsPathNames {
  GET = '/ui/administration/system_properties/get',
  DELETE = '/ui/administration/system_properties/delete',
  CREATE = '/ui/administration/system_properties/create',
  UPDATE = '/ui/administration/system_properties/update',
}

export enum auditPathNames {
  GET_SCHEDULED_JOBS = '/ui/audit/scheduler_jobs/get',
  GET_USER_ACTIVITY = '/ui/audit/users_activity/get',
  GET_API_CALLS = '/ui/audit/api_calls/get',
  GET_API_CALLS_DETAILS = '/ui/audit/api_calls/get_whole_description',
}

export enum systemMonitorPathNames {
  GET_INTERFACES = '/ui/audit/system_monitor/get_interface_data',
  GET_ENDPOINTS = '/ui/audit/system_monitor/get_endpoint_data',
  GET_SCHEDULER_JOBS = '/ui/audit/system_monitor/get_scheduler_data',
  GET_LAST_TRANSACTIONS = '/ui/audit/system_monitor/get_transactions_data',
}

export enum logDataPathNames {
  GET_INTERFACE_LOG_DATA = 'ui/administration/interfaces/get_log_file',
  GET_ENDPOINT_LOG_DATA = 'ui/administration/endpoints/get_log_file',
  GET_SCHEDULER_LOG_DATA = 'ui/administration/scheduler/get_log_file',
}

export enum lenderAccountsPathNames {
  GET = '/ui/ledger/accounts/get',
  CREATE = '/ui/ledger/accounts/create',
  UPDATE = '/ui/ledger/accounts/update',
  ORDER_ACCOUNT_CARD = '/ui/ledger/cards/order_card',
  GET_ACCOUNT_CARDS = '/ui/ledger/cards/get_account_cards',
  CREATE_PRODUCT_OVERRIDE = 'ui/product_designer/products/override/create_products_override',
}

export enum lenderCardsPathNames {
  GET = '/ui/ledger/cards/get',
  ACTIVATE_CARD = '/ui/ledger/cards/activate_card',
  CHANGE_STATUS = 'ui/ledger/cards/change_status',
}

export enum lenderCustomersPathNames {
  GET = '/ui/ledger/customers/get',
  CREATE = '/ui/ledger/customers/create',
  UPDATE = '/ui/ledger/customers/update',
  DELETE = '/ui/ledger/customers/delete',
}

export enum lenderStatementsPathNames {
  GET = '/ui/ledger/statements/get',
  GET_TRANSACTIONS = '/ui/ledger/statements/get_transactions',
  GET_ACCOUNT_STATEMENTS = '/ui/ledger/accounts/get_statements',
}

export enum lenderTransactionsPathNames {
  GET = '/ui/ledger/transactions/get',
}

export enum lenderManualTransactionPathNames {
  MAKE_TRANSACTION = 'ui/ledger/accounts/make_transaction',
}

export enum productsPathNames {
  GET_PRODUCTS = '/ui/product_designer/products/get',
  GET_INSTITUTIONS_PRODUCTS = '/ui/service_data/institutions/products/get',
  GET_PRODUCT = '/ui/product_designer/products/get_product_by_id',
  GET_PRODUCTS_DETAILS = '/ui/product_designer/products/extensions/get',
  GET_PRODUCTS_RULES = '/ui/product_designer/products/rules/get',
  DELETE_PRODUCT = '/ui/product_designer/products/delete',
  CREATE_PRODUCT = '/ui/product_designer/products/create',
  UPDATE_PRODUCT = '/ui/product_designer/products/update',
  UPDATE_DETAILS = '/ui/product_designer/products/extensions/update',
  UPDATE_RULES = '/ui/product_designer/products/rules/update',
  GET_ENDPOINTS_SERVICE = '/ui/product_designer/products/services/get/endpoints',
  GET_INTERFACES_SERVICE = '/ui/product_designer/products/services/get/interfaces',
  UPDATE_CARD_SERVICE = '/ui/product_designer/products/services/update',
  UPDATE_GENERAL_LEDGER = '/ui/product_designer/products/update_general_ledger',
  GET_APRS = '/ui/product_designer/products/aprs/get',
  UPDATE_APR = '/ui/product_designer/products/aprs/update',
  CREATE_APR = '/ui/product_designer/products/aprs/create',
  DELETE_APR = '/ui/product_designer/products/aprs/delete',
  GET_FEES = '/ui/product_designer/products/fees/get',
  UPDATE_FEE = '/ui/product_designer/products/fees/update',
  CREATE_FEE = '/ui/product_designer/products/fees/create',
  DELETE_FEE = '/ui/product_designer/products/fees/delete',
  GET_REWARDS = '/ui/product_designer/products/rewards/get',
  UPDATE_REWARD = '/ui/product_designer/products/rewards/update',
  CREATE_REWARD = '/ui/product_designer/products/rewards/create',
  DELETE_REWARD = '/ui/product_designer/products/rewards/delete',
}
