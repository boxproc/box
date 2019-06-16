// import { apiClient } from 'services';

import { User } from './mock';
import { UserLoginData } from './types';

import { throttleUtil } from 'utils';

export const userLogin = (data: UserLoginData) =>
  throttleUtil.getDataAfter({ message: 'success' }, 300);
  // apiClient.post('', data);

export const getUserInfo = () =>
  throttleUtil.getDataAfter(User, 300);
  // apiClient.get('');

export const userLogout = () =>
  throttleUtil.getDataAfter({ message: 'success' }, 300);
  // apiClient.post('');
