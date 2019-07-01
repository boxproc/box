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
  // uiItems: [
  //   {
  //     id: 1,
  //     title: 'File',
  //     parentId: null,
  //   },
  //   {
  //     id: 2,
  //     title: 'Open',
  //     parentId: 1,
  //   },
  //   {
  //     id: 3,
  //     title: 'Close',
  //     parentId: 1,
  //   },
  //   {
  //     id: 4,
  //     title: 'Exit',
  //     parentId: 1,
  //   },
  //   {
  //     id: 5,
  //     title: 'Edit',
  //     parentId: null,
  //   },
  //   {
  //     id: 6,
  //     title: 'Cut',
  //     parentId: 5,
  //   },
  //   {
  //     id: 7,
  //     title: 'Paste',
  //     parentId: 5,
  //   },
  //   {
  //     id: 8,
  //     title: 'Options',
  //     parentId: 5,
  //   },
  //   {
  //     id: 9,
  //     title: 'screen options',
  //     parentId: 8,
  //   },
  //   {
  //     id: 9,
  //     title: 'user options',
  //     parentId: 8,
  //   },
  // ],
};
