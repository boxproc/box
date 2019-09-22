import { adminSystemPropsPathNames } from 'consts';

import { apiClient } from 'services';

// import { adminSysPropsItemsFilteredData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { AdminSysPropFilterParamsPrepared, EditableAdminSysPropPrepared } from './types';

export const deleteAdminSysProp = (id: number | string) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminSystemPropsPathNames.DELETE, {
    data: { property_name: id },
  });

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminSystemPropsPathNames.CREATE, { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(adminSystemPropsPathNames.UPDATE, { data });

export const filterAdminSysProps = (data: AdminSysPropFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(adminSysPropsItemsFilteredData, 500);
  apiClient.post(adminSystemPropsPathNames.GET, {data});
