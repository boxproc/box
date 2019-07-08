// import { apiClient } from 'services';

import {
  AdminSysPropsItemsAddedData,
  AdminSysPropsItemsData,
  AdminSysPropsItemsUpdatedData,
} from './mock';

import { throttleUtil } from 'utils';

import { AdminSysPropsItemResp } from './types';

// const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

export const getAdminSysProps = (sessionId: string) =>
  throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  // apiClient.post('/ui/administration/system_properties/get', {
  //   data: {
  //     session_id: sessionId,
  //   }
  // });

export const addAdminSysProp = (sessionId: string, data: AdminSysPropsItemResp) =>
  throttleUtil.getDataAfter(AdminSysPropsItemsAddedData, 500);

export const deleteAdminSysProp = (sessionId: string, propName: string) =>
  throttleUtil.getDataAfter(propName, 500);

export const updateAdminSysProps = (sessionId: string, data: AdminSysPropsItemResp) =>
  throttleUtil.getDataAfter(AdminSysPropsItemsUpdatedData, 100);
