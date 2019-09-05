import { adminSystemPropsPathNames } from 'consts';

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

export const deleteAdminSysProp = (id: string) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(adminSystemPropsPathNames.DELETE, {
    data: { property_name: id },
  });

export const addAdminSysProp = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(adminSystemPropsPathNames.CREATE, { data });

export const updateAdminSysProps = (data: EditableAdminSysPropPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post(adminSystemPropsPathNames.UPDATE, { data });

export const filterAdminSysProps = (data: AdminSysPropFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsFilteredData, 500);
  apiClient.post(adminSystemPropsPathNames.GET, {data});
