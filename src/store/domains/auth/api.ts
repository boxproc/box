import { apiClient } from 'services';

import { PreparedAuthRequest } from './types';

// import { AuthResponseData } from './mock';

import { throttleUtil } from 'utils';

export const userLogin = (data: PreparedAuthRequest) =>
  // throttleUtil.getDataAfter(AuthResponseData, 500);
  apiClient.post('/ui/auth/login', { data });

export const userLogout = () =>
  throttleUtil.getDataAfter({ message: 'success' }, 500);
  //  apiClient.post('/ui/auth/logout');
