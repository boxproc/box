import { LoginResponse, UserInfo } from './types';

export const Login: LoginResponse = {
  session_id: 'sessionId123abc',
  resultCode: 0,
  message: '',
  description: '',
};

export const User: UserInfo = {
  userName: 'Operator',
  uiItems: [
    {
      uiItem: 'ledger',
      description: 'Ledger',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'ledger/customers',
      description: 'Customers',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'ledger/accounts',
      description: 'Accounts',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'administration',
      description: 'Administration',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'administration/system_properties',
      description: 'System Properties',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'administration/dictionaries',
      description: 'Dictionaries',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'administration/dictionaries/countries',
      description: 'Countries',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'administration/dictionaries/currencies',
      description: 'Currencies',
      itemType: 'M',
      hasChildren: false,
    },
  ],
};
