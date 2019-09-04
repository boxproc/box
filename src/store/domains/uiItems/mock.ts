import { ResponseStatusType } from 'types';

export const uiItems = {
  response_status: {
    status_code: 0,
  },
  ui_items: [
    { ui_item: 'administration', description: 'Administration', item_type: 'M' },
    { ui_item: 'administration', description: 'Administration', item_type: 'M' },
    { ui_item: 'administration/cycles', description: 'Cycles', item_type: 'M' },
    { ui_item: 'administration/cycles/cycles_editor', description: 'Cycles editor', item_type: 'm' },
    { ui_item: 'administration/dictionaries', description: 'Dictionaries', item_type: 'M' },
    { ui_item: 'administration/dictionaries/countries', description: 'Countries', item_type: 'm' },
    { ui_item: 'administration/dictionaries/currencies', description: 'Currencies', item_type: 'm' },
    { ui_item: 'administration/dictionaries/events', description: 'Events', item_type: 'm' },
    { ui_item: 'administration/dictionaries/event_data_elements', description: 'Event data elements'},
    { ui_item: 'administration/endpoints', description: 'Endpoints', item_type: 'm' },
    { ui_item: 'administration/institutions', description: 'Institutions', item_type: 'm' },
    { ui_item: 'administration/interfaces', description: 'Interfaces', item_type: 'm' },
    { ui_item: 'administration/permissions', description: 'Permissions', item_type: 'M' },
    { ui_item: 'administration/permissions/users', description: 'Users', item_type: 'm' },
    { ui_item: 'administration/permissions/user_groups', description: 'Users groups', item_type: 'm' },
    { ui_item: 'administration/scheduler', description: 'Scheduler', item_type: 'm' },
    { ui_item: 'administration/system_properties', description: 'System properties', item_type: 'm' },
    { ui_item: 'audit', description: 'Audit', item_type: 'M' },
    { ui_item: 'audit/api_calls', description: 'API calls', item_type: 'm' },
    { ui_item: 'audit/scheduled_jobs', description: 'Scheduled jobs', item_type: 'm' },
    { ui_item: 'audit/users_activity', description: 'Users activity', item_type: 'm' },
    { ui_item: 'ledger', description: 'Ledger', item_type: 'M' },
    { ui_item: 'ledger/accounts', description: 'Accounts', item_type: 'm' },
    { ui_item: 'ledger/cards', description: 'Cards (tokens)', item_type: 'm' },
    { ui_item: 'ledger/customers', description: 'Customers', item_type: 'm' },
    { ui_item: 'ledger/statements', description: 'Statements', item_type: 'm' },
    { ui_item: 'ledger/transactions', description: 'Transactions', item_type: 'm' },
    { ui_item: 'product_designer', description: 'Product designer', item_type: 'M' },
    { ui_item: 'product_designer/products', description: 'Products', item_type: 'm' },
    { ui_item: 'reports', description: 'Reports', item_type: 'M' },
    { ui_item: 'reports/customer_statistics', description: 'Customer statistics', item_type: 'm' },
    { ui_item: 'reports/product_statistics', description: 'Product statistics', item_type: 'm' },
    { ui_item: 'reports/transactions_summary', description: 'Transactions summary', item_type: 'm' },
  ],
};

export const SuccessResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
