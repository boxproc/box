// import { apiClient } from 'services';

import { AdminSysPropsItemsData } from './mock';

import { throttleUtil } from 'utils';

export const getAdminSysProps = (sessionId: string) =>
  throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  // apiClient.get('/sys/properties', { data: {session_id: sessionId} });
