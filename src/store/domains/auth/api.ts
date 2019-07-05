import { apiClient } from 'services';

import { AuthRequest } from './types';
// import { AuthResponseData } from './mock';

// import { throttleUtil } from 'utils';

export const userLogin = (data: AuthRequest) =>
//   throttleUtil.getDataAfter(AuthResponseData, 500);
  apiClient.post('/ui/auth/login', { data });

export const userLogout = (sessionId: string) =>
  // throttleUtil.getDataAfter({ message: 'success' }, 500);
  apiClient.post('/ui/auth/logout', { data: {session_id: sessionId} });
