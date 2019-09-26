export const basePath = '/ui/';

export const authPathNames = {
  LOGIN: `${basePath}auth/login`,
  LOGOUT: `${basePath}auth/logout`,
};

export const uiItemsPathNames = {
  GET: `${basePath}items/get`,
};

export const constsPathNames = {
  GET_CURRENCIES: `${basePath}administration/dictionaries/currencies/get`,
  GET_COUNTRIES: `${basePath}administration/dictionaries/countries/get`,
  GET_INSTITUTIONS: `${basePath}service_data/institutions/get`,
};

export const adminCyclesPathNames = {
  GET: `${basePath}administration/cycles/cycles_editor/get`,
  CREATE: `${basePath}administration/cycles/cycles_editor/create`,
  DELETE: `${basePath}administration/cycles/cycles_editor/delete`,
  UPDATE: `${basePath}administration/cycles/cycles_editor/update`,
};

export const adminInstitutionsPathNames = {
  GET: `${basePath}service_data/institutions/get_all`,
  CREATE: `${basePath}service_data/institutions/create`,
  DELETE: `${basePath}service_data/institutions/delete`,
  UPDATE: `${basePath}service_data/institutions/update`,
};

export const adminInterfacePathNames = {
  GET: `${basePath}administration/interfaces/get`,
  CREATE: `${basePath}administration/interfaces/create`,
  DELETE: `${basePath}administration/interfaces/delete`,
  UPDATE: `${basePath}administration/interfaces/update`,
};

export const adminEndPointsPathNames = {
  GET: `${basePath}administration/endpoints/get`,
  CREATE: `${basePath}administration/endpoints/create`,
  DELETE: `${basePath}administration/endpoints/delete`,
  UPDATE: `${basePath}administration/endpoints/update`,
  GET_BY_INSTITUTION_ID: `${basePath}administration/endpoints/get_by_institution`,
};

export const adminEventDataElemsPathNames = {
  GET: `${basePath}administration/dictionaries/event_data_elements/get`,
};

export const dictionariesPathNames = {
  GET_COUNTRIES: `${basePath}administration/dictionaries/countries/get`,
  GET_CURRENCIES: `${basePath}administration/dictionaries/currencies/get`,
};

export const adminEventsPathNames = {
  GET: `${basePath}administration/dictionaries/events/get`,
};

export const adminUserPathNames = {
  GET: `${basePath}administration/permissions/users/get`,
  CREATE: `${basePath}administration/permissions/users/create`,
  UPDATE: `${basePath}administration/permissions/users/update`,
  GET_ADMIN_ACCESS_USERS: `${basePath}administration/permissions/administrator/get`,
  CHANGE_ADMIN_PROFILE: `${basePath}administration/permissions/administrator/change_profile`,
};

export const adminUserGroupsPathNames = {
  GET_USERS_GROUPS: `${basePath}administration/permissions/users_group/get`,
  GET_ACTIVE_USERS: `${basePath}administration/permissions/users_group_members/get_active_users`,
  GET_GROUP_MEMBERS: `${basePath}administration/permissions/users_group_members/get`,
  GET_GROUP_UI_ITEMS: `${basePath}administration/permissions/group_permissions_ui_items/get`,
  GET_GROUP_PERMISSIONS: `${basePath}administration/permissions/group_permissions/get`,
  CREATE_USERS_GROUP: `${basePath}administration/permission/users_group/create`,
  UPDATE_USERS_GROUP: `${basePath}administration/permissions/users_group/update`,
  DELETE_USERS_GROUP_MEMBER: `${basePath}administration/permissions/users_group_members/delete`,
  DELETE_GROUP_PERMISSIONS: `${basePath}administration/permissions/group_permissions/delete`,
  CREATE_USERS_GROUP_MEMBERS: `${basePath}administration/permissions/users_group_members/create`,
  CREATE_GROUP_PERMISSIONS: `${basePath}administration/permissions/group_permissions/create`,
};

export const adminSchedulerPathNames = {
  GET: `${basePath}administration/scheduler/get`,
  DELETE: `${basePath}administration/scheduler/delete`,
  CREATE: `${basePath}administration/scheduler/create`,
  UPDATE: `${basePath}administration/scheduler/update`,
  SEND_ACTION: '/sys/scheduler/management',
};

export const adminSystemPropsPathNames = {
  GET: `${basePath}administration/system_properties/get`,
  DELETE: `${basePath}administration/system_properties/delete`,
  CREATE: `${basePath}administration/system_properties/create`,
  UPDATE: `${basePath}administration/system_properties/update`,
};

export const auditUserActivityPathNames = {
  GET: `${basePath}audit/users_activity/get`,
};

export const auditApiClassPathNames = {
  GET: `${basePath}audit/api_calls/get`,
  GET_DETAILS: `${basePath}audit/api_calls/get_whole_description`,
};

export const lenderAccountsPathNames = {
  GET: `${basePath}ledger/accounts/get`,
  CREATE: `${basePath}ledger/accounts/create`,
  UPDATE: `${basePath}ledger/accounts/update`,
  GET_ACCOUNT_CARDS: `${basePath}ledger/cards/get_account_cards`,
  ORDER_ACCOUNT_CARD: `${basePath}ledger/cards/order_card`,
  GET_LAST_STATEMENT: `${basePath}ledger/accounts/get_last_statement`,
};

export const lenderCardsPathNames = {
  GET: `${basePath}ledger/cards/get`,
  ACTIVATE_CARD: `${basePath}ledger/cards/activate_card`,
};

export const lenderCustomersPathNames = {
  GET: `${basePath}ledger/customers/get`,
  CREATE: `${basePath}ledger/customers/create`,
  UPDATE: `${basePath}ledger/customers/update`,
  DELETE: `${basePath}ledger/customers/delete`,
};

export const lenderStatementsPathNames = {
  GET: `${basePath}ledger/statements/get`,
};

export const lenderTransactionsPathNames = {
  GET: `${basePath}ledger/transactions/get`,
};

export const productsPathNames = {
  GET_PRODUCTS: `${basePath}product_designer/products/get`,
  GET_INSTITUTIONS_PRODUCTS: `${basePath}service_data/institutions/products/get`,
  GET_PRODUCTS_DETAILS: `${basePath}product_designer/products/extensions/get`,
  GET_PRODUCTS_RULES: `${basePath}product_designer/products/rules/get`,
  DELETE_PRODUCT: `${basePath}product_designer/products/delete`,
  CREATE_PRODUCT: `${basePath}product_designer/products/create`,
  UPDATE_PRODUCT: `${basePath}product_designer/products/update`,
  UPDATE_DETAILS: `${basePath}product_designer/products/extensions/update`,
  UPDATE_RULES: `${basePath}product_designer/products/rules/update`,
  GET_ENDPOINTS_SERVICE: `${basePath}product_designer/products/services/get/endpoints`,
  GET_INTERFACES_SERVICE: `${basePath}product_designer/products/services/get/interfaces`,
  UPDATE_CARD_SERVICE: `${basePath}product_designer/products/services/update`,
};
