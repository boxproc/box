// import { apiClient } from 'services';

import {
  AdminSysPropsItemsData,
  AdminSysPropsItemsUpdatedData,
} from './mock';

import { throttleUtil } from 'utils';

import { AdminSysPropsItemResp } from './types';

// const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

export const getAdminSysProps = (sessionId: string) =>
  throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  // apiClient.post('/ui/administration/system_properties/get', {
  //   headers: {
  //     session_id: sessionId,
  //   },
  // });

export const deleteAdminSysProp = (sessionId: string, propName: string) =>
  throttleUtil.getDataAfter(propName, 500);
// apiClient.get('/sys/properties', { data: {session_id: sessionId} });

export const updateAdminSysProps = (sessionId: string, data: AdminSysPropsItemResp) => {
  console.log('---data', data);
  return throttleUtil.getDataAfter(AdminSysPropsItemsUpdatedData, 100);
};
