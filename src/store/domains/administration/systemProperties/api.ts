import { adminSystemPropsURLs } from 'consts';

import { apiClient } from 'services';

// import { adminSysPropsItemsFilteredData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropFilterPrepared, EditableAdminSysPropPrepared } from './types';

export const deleteAdminSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminSystemPropsURLs.DELETE, {
    data: { property_name: id },
  });

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminSystemPropsURLs.CREATE, { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(adminSystemPropsURLs.UPDATE, { data });

export const filterAdminSysProps = (data: AdminSysPropFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSysPropsItemsFilteredData, 500);
  apiClient.post(adminSystemPropsURLs.GET, {data});
