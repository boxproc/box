import { apiClient } from 'services';

// import {
//   AdminSysPropsItemsAddedData,
//   AdminSysPropsItemsData,
//   AdminSysPropsItemsDataFiltered,
//   AdminSysPropsItemsUpdatedData,
// } from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropsItemResp } from './types';

export const getAdminSysProps = () =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  apiClient.post('/ui/administration/system_properties/get');

export const addAdminSysProp = (data: AdminSysPropsItemResp) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsAddedData, 500);
  apiClient.post('/ui/administration/system_properties/create', { data });

export const deleteAdminSysProp = (propName: string) =>
  // throttleUtil.getDataAfter({ property_name: propName }, 500);
  apiClient.post('/ui/administration/system_properties/delete', {
    data: { property_name: propName },
  });

export const updateAdminSysProps = (data: AdminSysPropsItemResp) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsUpdatedData, 100);
  apiClient.post('/ui/administration/system_properties/update', { data });

export const filterAdminSysProps = (data: any) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsDataFiltered, 500);
  apiClient.post('/ui/administration/system_properties/get', {data});
