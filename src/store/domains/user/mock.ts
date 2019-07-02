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
    },
    {
      uiItem: 'file/open',
      description: 'Open',
      itemType: 'M',
    },
    {
      uiItem: 'file/close',
      description: 'Close',
      itemType: 'M',
    },
    {
      uiItem: 'file/exit',
      description: 'Exit',
      itemType: 'M',
    },
    {
      uiItem: 'edit',
      description: 'Edit',
      itemType: 'M',
    },
    {
      uiItem: 'edit/cut',
      description: 'Cut',
      itemType: 'M',
    },
    {
      uiItem: 'edit/past',
      description: 'Past',
      itemType: 'M',
    },
    {
      uiItem: 'edit/options',
      description: 'Options',
      itemType: 'M',
    },
    {
      uiItem: 'edit/options/screenOptions',
      description: 'Screen Options',
      itemType: 'M',
    },
    {
      uiItem: 'edit/options/userOptions',
      description: 'User Options',
      itemType: 'M',
    },
  ],
};
