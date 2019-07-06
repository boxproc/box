import { UiItems } from './types';

export const uiItemsData: UiItems = {
  ui_items: [
    {
      item_type: 'M',
      permission: 'R',
      ui_item: 'administration',
    },
    {
      item_type: 'M',
      permission: 'R',
      ui_item: 'administration/dictionaries',
    },
    {
      item_type: 'm',
      permission: 'R',
      ui_item: 'administration/dictionaries/countries',
    },
    {
      item_type: 'm',
      permission: 'R',
      ui_item: 'administration/dictionaries/currencies',
    },
    {
      item_type: 'M',
      permission: 'W',
      ui_item: 'ledger',
    },
    {
      item_type: 'm',
      permission: 'W',
      ui_item: 'ledger/accounts',
    },
    {
      item_type: 'm',
      permission: 'W',
      ui_item: 'ledger/customers',
    },
    {
      item_type: 'm',
      permission: 'W',
      ui_item: 'administration/system_properties',
    },
  ],
};
