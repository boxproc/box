import { apiClient } from 'services';

import { User } from './mock';
import { UserLoginData } from './types';

import { throttleUtil } from 'utils';

export const userLogin = (data: UserLoginData) =>
  // throttleUtil.getDataAfter(Login, 500);
  apiClient.post('/ui/auth/login', { data });

export const getUserInfo = () =>
  throttleUtil.getDataAfter(User, 500);
  // apiClient.get('');

export const userLogout = (sessionId: string) =>
  // throttleUtil.getDataAfter({ message: 'success' }, 500);
  apiClient.post('/ui/auth/logout', { data: {session_id: sessionId} });
