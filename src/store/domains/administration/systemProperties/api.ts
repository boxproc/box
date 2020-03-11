import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { adminSysPropsItemsFilteredData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropFilterPrepared, EditableAdminSysPropPrepared } from './types';

export const deleteAdminSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.delete(`${apiUrls.systemProps.BASE}/${id}`);

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.systemProps.BASE, { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.put(apiUrls.systemProps.BASE, { data });

export const filterAdminSysProps = (data: AdminSysPropFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSysPropsItemsFilteredData, 500);
  apiClient.post(apiUrls.systemProps.GET, { data });
