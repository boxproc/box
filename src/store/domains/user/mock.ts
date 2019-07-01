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
      title: 'link 1',
      parentId: null,
      childCount: 2,
    },
    {
      id: 2,
      title: 'sub1 2',
      parentId: 1,
      childCount: 2,
    },
    {
      id: 3,
      title: 'sub1 3',
      parentId: 1,
      childCount: 2,
    },
    {
      id: 4,
      title: 'sub3 sub 4',
      parentId: 3,
      childCount: 0,
    },
    {
      id: 5,
      title: 'sub1 5',
      parentId: 1,
      childCount: 0,
    },
    {
      id: 6,
      title: 'link 2',
      parentId: null,
      childCount: 2,
    },
    {
      id: 7,
      title: 'sub6 7',
      parentId: 6,
      childCount: 0,
    },
    {
      id: 8,
      title: 'sub6 8',
      parentId: 6,
      childCount: 1,
    },
    {
      id: 9,
      title: 'sub8 sub 9',
      parentId: 8,
      childCount: 0,
    },
    {
      id: 10,
      title: 'sub3 sub 10',
      parentId: 3,
      childCount: 2,
    },
    {
      id: 11,
      title: 'sub10 sub sub 11',
      parentId: 10,
      childCount: 0,
    },
    {
      id: 12,
      title: 'sub10 sub sub 12',
      parentId: 10,
      childCount: 0,
    },
    {
      id: 13,
      title: 'link 3',
      parentId: null,
      childCount: 0,
    },
  ],
};
