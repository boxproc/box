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

export const getAdminSysProps = () =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsData, 500);
  apiClient.post(adminSystemPropsPathNames.GET);

export const deleteAdminSysProp = (propName: string) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(adminSystemPropsPathNames.DELETE, {
    data: { property_name: propName },
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
