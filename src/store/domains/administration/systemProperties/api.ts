import { apiClientService } from 'services';

// import { adminSysPropsItemsFilteredData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropFilterPrepared, EditableAdminSysPropPrepared } from './types';

export const deleteAdminSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.delete(`ui/administration/system_properties/${id}`);

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/administration/system_properties', { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClientService.put('ui/administration/system_properties', { data });

export const filterAdminSysProps = (data: AdminSysPropFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSysPropsItemsFilteredData, 500);
  apiClientService.post('ui/administration/system_properties/get', { data });
