export enum authPathNames {
  LOGIN = '/ui/auth/login',
  LOGOUT = '/ui/auth/logout',
}

export enum uiItemsPathNames {
  GET = '/ui/items/get',
}

export enum constsPathNames {
  GET_CURRENCIES = '/ui/administration/dictionaries/currencies/get',
  GET_COUNTRIES = '/ui/administration/dictionaries/countries/get',
  GET_INSTITUTIONS = '/ui/service_data/institutions/get',
}

export enum adminCyclesPathNames {
  GET = '/ui/administration/cycles/cycles_editor/get',
  CREATE = '/ui/administration/cycles/cycles_editor/create',
  DELETE = '/ui/administration/cycles/cycles_editor/delete',
  UPDATE = '/ui/administration/cycles/cycles_editor/update',
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

export enum adminEndPointsPathNames {
  GET = '/ui/administration/endpoints/get',
  CREATE = '/ui/administration/endpoints/create',
  DELETE = '/ui/administration/endpoints/delete',
  UPDATE = '/ui/administration/endpoints/update',
}

export enum adminEventDataElemsPathNames {
  GET = '/ui/administration/dictionaries/event_data_elements/get',
}

export enum adminEventsPathNames {
  GET = '/ui/administration/dictionaries/events/get',
}

export enum adminUserNames {
  GET = '/ui/administration/permissions/users/get',
  CREATE = '/ui/administration/permissions/users/create',
  UPDATE = '/ui/administration/permissions/users/update',
}

export enum adminUserGroupsPathNames {
  GET_USERS_GROUPS = '/ui/administration/permissions/users_group/get',
  GET_ACTIVE_USERS = '/ui/administration/permissions/users_group_members/get_active_users',
  GET_GROUP_MEMBERS = '/ui/administration/permissions/users_group_members/get',
  GET_GROUP_UI_ITEMS = '/ui/administration/permissions/group_permissions_ui_items/get',
  GET_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/get',
  CREATE_USERS_GROUP = '/ui/administration/permission/users_group/create',
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
}

export enum adminSystemPropsPathNames {
  GET = '/ui/administration/system_properties/get',
  DELETE = '/ui/administration/system_properties/delete',
  CREATE = '/ui/administration/system_properties/create',
  UPDATE = '/ui/administration/system_properties/update',
}

export enum auditUserActivitiesPathNames {
  GET = '/ui/audit/users_activity/get',
}

export enum lenderAccountsPathNames {
  GET = '/ui/ledger/accounts/get',
  CREATE = '/ui/ledger/accounts/create',
  UPDATE = '/ui/ledger/accounts/update',
  GET_ACCOUNT_CARDS = '/ui/ledger/cards/get_account_cards',
  ORDER_ACCOUNT_CARD = '/ui/ledger/cards/order_card',
}

export enum lenderCardsPathNames {
  GET = '/ui/ledger/cards/get',
  ACTIVATE_CARD = '/ui/ledger/cards/activate_card',
}

export enum lenderCustomersPathNames {
  GET = '/ui/ledger/customers/get',
  CREATE = '/ui/ledger/customers/create',
  UPDATE = '/ui/ledger/customers/update',
  DELETE = '/ui/ledger/customers/delete',
}

export enum lenderTransactionsPathNames {
  GET = '/ui/ledger/transactions/get',
}

export enum productsPathNames {
  GET_PRODUCTS = '/ui/product_designer/products/get',
  GET_INSTITUTIONS_PRODUCTS = '/ui/service_data/institutions/products/get',
  GET_PRODUCTS_DETAILS = '/ui/product_designer/products/extensions/get',
  GET_PRODUCTS_RULES = '/ui/product_designer/products/rules/get',
  DELETE_PRODUCT = '/ui/product_designer/products/delete',
  CREATE_PRODUCT = '/ui/product_designer/products/create',
  UPDATE_PRODUCT = '/ui/product_designer/products/update',
  UPDATE_DETAILS = '/ui/product_designer/products/extensions/update',
  UPDATE_RULES = '/ui/product_designer/products/rules/update',
}
