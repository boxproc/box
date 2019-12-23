import { UiItems } from './types';

import { ResponseStatusType } from 'types';

export const uiItems: UiItems = {
  ui_items: [
    {
      ui_item: 'administration',
      description: 'Administration',
      item_type: 'M',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'administration/separator_1',
      description: null,
      item_type: 'S',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'administration/dictionaries',
      description: 'Dictionaries',
      item_type: 'M',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'administration/dictionaries/countries',
      description: 'Countries',
      item_type: 'm',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'administration/dictionaries/currencies',
      description: 'Currencies',
      item_type: 'm',
      order_number: 2,
      permission: 'W',
    },
    {
      ui_item: 'administration/dictionaries/events',
      description: 'Events',
      item_type: 'm',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'administration/dictionaries/event_data_elements',
      description: 'Event data elements',
      item_type: 'm',
      order_number: 3,
      permission: 'W',
    },
    {
      ui_item: 'administration/endpoints',
      description: 'Endpoints',
      item_type: 'm',
      order_number: 2,
      permission: 'W',
    },
    {
      ui_item: 'administration/institutions',
      description: 'Institutions',
      item_type: 'm',
      order_number: 3,
      permission: 'W',
    },
    {
      ui_item: 'administration/interfaces',
      description: 'Interfaces',
      item_type: 'm',
      order_number: 4,
      permission: 'W',
    },
    {
      ui_item: 'administration/permissions',
      description: 'Permissions',
      item_type: 'M',
      order_number: 5,
      permission: 'W',
    },
    {
      ui_item: 'administration/permissions/users',
      description: 'Users',
      item_type: 'm',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'administration/permissions/user_groups',
      description: 'Users groups',
      item_type: 'm',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'administration/scheduler',
      description: 'Scheduler',
      item_type: 'm',
      order_number: 6,
      permission: 'W',
    },
    {
      ui_item: 'administration/system_properties',
      description: 'System properties',
      item_type: 'm',
      order_number: 7,
      permission: 'R',
    },
    {
      ui_item: 'audit',
      description: 'Audit',
      item_type: 'M',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'audit/api_calls',
      description: 'API calls',
      item_type: 'm',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'audit/scheduled_jobs',
      description: 'Scheduled jobs',
      item_type: 'm',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'audit/users_activity',
      description: 'Users activity',
      item_type: 'm',
      order_number: 2,
      permission: 'W',
    },
    {
      ui_item: 'ledger',
      description: 'Ledger',
      item_type: 'M',
      order_number: 2,
      permission: 'W',
    },
    {
      ui_item: 'ledger/accounts',
      description: 'Accounts',
      item_type: 'm',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'ledger/cards',
      description: 'Cards (tokens)',
      item_type: 'm',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'ledger/customers',
      description: 'Customers',
      item_type: 'm',
      order_number: 2,
      permission: 'W',
    },
    {
      ui_item: 'ledger/statements',
      description: 'Statements',
      item_type: 'm',
      order_number: 3,
      permission: 'W',
    },
    {
      ui_item: 'ledger/transactions',
      description: 'Transactions',
      item_type: 'm',
      order_number: 4,
      permission: 'W',
    },
    {
      ui_item: 'product_designer',
      description: 'Product designer',
      item_type: 'M',
      order_number: 3,
      permission: 'W',
    },
    {
      ui_item: 'product_designer/cycles',
      description: 'Cycles',
      item_type: 'm',
      order_number: 0,
      permission: 'W',
    },
    {
      ui_item: 'product_designer/products',
      description: 'Products',
      item_type: 'm',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'reports',
      description: 'Reports',
      item_type: 'M',
      order_number: 4,
      permission: 'W',
    },
    {
      ui_item: 'reports/customer_statistics',
      description: 'Customer statistics',
      item_type: 'm',
      order_number: 2,
      permission: 'W',
    },
    {
      ui_item: 'reports/product_statistics',
      description: 'Product statistics',
      item_type: 'm',
      order_number: 1,
      permission: 'W',
    },
    {
      ui_item: 'reports/transactions_summary',
      description: 'Transactions summary',
      item_type: 'm',
      order_number: 0,
      permission: 'W',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
