import { apiClient } from 'services';

import {
  // AdminSysPropsItemsAddedData,
  // AdminSysPropsItemsData,
  // AdminSysPropsItemsUpdatedData,
} from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropsItemResp } from './types';

export const getAdminSysProps = (sessionId: string) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  apiClient.post('/ui/administration/system_properties/get');

export const addAdminSysProp = (sessionId: string, data: AdminSysPropsItemResp) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsAddedData, 500);
  apiClient.post('/ui/administration/system_properties/create', { data });

export const deleteAdminSysProp = (sessionId: string, propName: string) =>
  // throttleUtil.getDataAfter(propName, 500);
  apiClient.post('/ui/administration/system_properties/delete', {
    data: { property_name: propName },
  });

export const updateAdminSysProps = (sessionId: string, data: AdminSysPropsItemResp) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsUpdatedData, 100);
  apiClient.post('/ui/administration/system_properties/update', { data });
