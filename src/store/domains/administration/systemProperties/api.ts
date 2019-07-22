import { apiClient } from 'services';

// import {
//   AdminSysPropsItemsData,
//   AdminSysPropsItemsFilteredData,
//   SuccessResponseStatus,
// } from './mock';

// import { throttleUtil } from 'utils';

import {
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysPropPrepared,
} from './types';

export const getAdminSysProps = () =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  apiClient.post('/ui/administration/system_properties/get');

export const deleteAdminSysProp = (propName: string) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/system_properties/delete', {
    data: { property_name: propName },
  });

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/system_properties/create', { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/system_properties/update', { data });

export const filterAdminSysProps = (data: AdminSysPropFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsFilteredData, 500);
  apiClient.post('/ui/administration/system_properties/get', {data});
