import { adminSchedulerPathNames } from 'consts';

import { apiClient } from 'services';

// import {
//   adminSchedulerData,
//   schedulerLogFile,
//   schedulerNames,
//   successResponseStatus,
// } from './mock';

import { AdminSchedulerFilterPrepared, AdminSchedulerItem, AdminSchedulerJobAction } from './types';

// import { throttleUtil } from 'utils';

export const filterAdminSchedulerJobs = (data: AdminSchedulerFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSchedulerData, 500);
  apiClient.post(adminSchedulerPathNames.GET, { data });

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminSchedulerPathNames.DELETE, {
    data: { id },
  });

export const addAdminSchedulerJob = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminSchedulerPathNames.CREATE, { data });

export const updateAdminSchedulerJobs = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(adminSchedulerPathNames.UPDATE, { data });

export const sendAdminSchedulerAction = (data: Partial<AdminSchedulerJobAction>) =>
  apiClient.post(adminSchedulerPathNames.SEND_ACTION, { data });

export const getSchedulerNamesByInstitutionId = (id: number | string) =>
  //  throttleUtil.getDataAfter(schedulerNames, 100);
  apiClient.post(adminSchedulerPathNames.GET_NAMES_BY_INSTITUTION_ID, {
    data: {
      institution_id: id,
    },
  });

export const getSchedulerLogFile = (id: number) =>
  //  throttleUtil.getDataAfter(schedulerLogFile, 500);
  apiClient.post(adminSchedulerPathNames.GET_LOG_FILE, {
    data: { scheduler_id: id },
  });
