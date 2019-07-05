import { apiClient } from 'services';

// import { User } from './mock';

// import { throttleUtil } from 'utils';

export const getUserInfo = (sessionId: string) =>
  // throttleUtil.getDataAfter(User, 500);
  apiClient.post('/ui/items', { data: {session_id: sessionId} });
