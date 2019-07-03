import { LoginResponse, UserInfo } from './types';

export const Login: LoginResponse = {
  sessionId: 'sessionId123abc',
  resultCode: 0,
  message: '',
  description: '',
};

export const User: UserInfo = {
  id: 1,
  userName: 'John',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com',
  uiItems: [
    {
      uiItem: 'file',
      description: 'File',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'file/open',
      description: 'Open',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'file/close',
      description: 'Close',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'file/preferences',
      description: 'Preferences',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'file/preferences/extensions',
      description: 'Extensions',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'file/preferences/extensions/extension',
      description: 'Extension',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'file/preferences/settings',
      description: 'Settings',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'file/exit',
      description: 'Exit',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'edit',
      description: 'Edit',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'edit/cut',
      description: 'Cut',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'edit/past',
      description: 'Past',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'edit/options',
      description: 'Options',
      itemType: 'M',
      hasChildren: true,
    },
    {
      uiItem: 'edit/options/screenOptions',
      description: 'Screen Options',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'edit/options/userOptions',
      description: 'User Options',
      itemType: 'M',
      hasChildren: false,
    },
    {
      uiItem: 'view',
      description: 'View',
      itemType: 'M',
      hasChildren: false,
    },
  ],
};
