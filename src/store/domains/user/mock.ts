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
      id: 1,
      title: '1',
      parentId: null,
      childCount: 2,
    },
    {
      id: 2,
      title: '2',
      parentId: 1,
      childCount: 2,
    },
    {
      id: 3,
      title: '3',
      parentId: 1,
      childCount: 2,
    },
    {
      id: 4,
      title: '4',
      parentId: 3,
      childCount: 0,
    },
    {
      id: 5,
      title: '5',
      parentId: 1,
      childCount: 0,
    },
    {
      id: 6,
      title: '6',
      parentId: null,
      childCount: 2,
    },
    {
      id: 7,
      title: '7',
      parentId: 6,
      childCount: 0,
    },
    {
      id: 8,
      title: '8',
      parentId: 6,
      childCount: 1,
    },
    {
      id: 9,
      title: '9',
      parentId: 8,
      childCount: 0,
    },
    {
      id: 10,
      title: '10',
      parentId: 3,
      childCount: 2,
    },
    {
      id: 11,
      title: '11',
      parentId: 10,
      childCount: 0,
    },
    {
      id: 12,
      title: '12',
      parentId: 10,
      childCount: 0,
    },
  ],
};
