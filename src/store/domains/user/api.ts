// import { apiClient } from 'services';

import { User } from './mock';
import { UserLoginData } from './types';

import { throttleUtil } from 'utils';

export const userLogin = (data: UserLoginData) =>
  throttleUtil.getDataAfter({ message: 'success' }, 500);
  // apiClient.post('', data);

export const getUserInfo = () =>
  throttleUtil.getDataAfter(User, 500);
  // apiClient.get('');

export const userLogout = () =>
  throttleUtil.getDataAfter({ message: 'success' }, 500);
  // apiClient.post('');
