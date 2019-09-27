import { adminSchedulerPathNames } from 'consts';

import { apiClient } from 'services';

// import { adminSchedulerData, SuccessResponseStatus } from './mock';
import { schedulerNames } from './mock';

import { AdminSchedulerFilterPrepared, AdminSchedulerItem, AdminSchedulerJobAction } from './types';

import { throttleUtil } from 'utils';

// import { throttleUtil } from 'utils';

export const filterAdminSchedulerJobs = (data: AdminSchedulerFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSchedulerData, 500);
  apiClient.post(adminSchedulerPathNames.GET, { data });

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(adminSchedulerPathNames.DELETE, {
    data: { id },
  });

export const addAdminSchedulerJob = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(adminSchedulerPathNames.CREATE, { data });

export const updateAdminSchedulerJobs = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post(adminSchedulerPathNames.UPDATE, { data });

export const sendAdminSchedulerAction = (data: Partial<AdminSchedulerJobAction>) =>
  apiClient.post(adminSchedulerPathNames.SEND_ACTION, { data });

export const getSchedulerNamesByInstitutionId = (id: number | string) =>
 throttleUtil.getDataAfter(schedulerNames, 100);
  // apiClient.post(adminSchedulerPathNames.GET_NAMES_BY_INSTITUTION_ID, {
  //   data: {
  //     institution_id: id,
  //   },
  // });
