import { UserInfo } from './types';

export const User: UserInfo = {
  userName: 'operator',
  ui_items: [
    {
      ui_item: 'ledger',
      permission: 'M',
      item_type: 'M',
      has_children: true,
    },
    {
      ui_item: 'ledger/customers',
      permission: 'M',
      item_type: 'M',
      has_children: false,
    },
    {
      ui_item: 'ledger/accounts',
      permission: 'M',
      item_type: 'M',
      has_children: false,
    },
    {
      ui_item: 'administration',
      permission: 'M',
      item_type: 'M',
      has_children: true,
    },
    {
      ui_item: 'administration/system_properties',
      permission: 'M',
      item_type: 'M',
      has_children: false,
    },
    {
      ui_item: 'administration/dictionaries',
      permission: 'M',
      item_type: 'M',
      has_children: true,
    },
    {
      ui_item: 'administration/dictionaries/countries',
      permission: 'M',
      item_type: 'M',
      has_children: false,
    },
    {
      ui_item: 'administration/dictionaries/currencies',
      permission: 'M',
      item_type: 'M',
      has_children: false,
    },
  ],
};
