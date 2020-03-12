import { apiClient } from 'services';

// import { adminSysPropsItemsFilteredData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropFilterPrepared, EditableAdminSysPropPrepared } from './types';

export const deleteAdminSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.delete(`ui/administration/system_properties/${id}`);

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('ui/administration/system_properties', { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.put('ui/administration/system_properties', { data });

export const filterAdminSysProps = (data: AdminSysPropFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSysPropsItemsFilteredData, 500);
  apiClient.post('ui/administration/system_properties/get', { data });
