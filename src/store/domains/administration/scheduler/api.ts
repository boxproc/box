import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import {
//   adminSchedulerData,
//   schedulerNames,
//   successResponseStatus,
// } from './mock';

import { AdminSchedulerFilterPrepared, AdminSchedulerItem, AdminSchedulerJobAction } from './types';

export const filterAdminSchedulerJobs = (data: AdminSchedulerFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSchedulerData, 500);
  apiClient.post(apiUrls.scheduler.GET, { data });

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.scheduler.DELETE, {
    data: { id },
  });

export const addAdminSchedulerJob = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.scheduler.CREATE, { data });

export const updateAdminSchedulerJobs = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(apiUrls.scheduler.UPDATE, { data });

export const sendAdminSchedulerAction = (data: Partial<AdminSchedulerJobAction>) =>
  apiClient.post(apiUrls.scheduler.SEND_ACTION, { data });

export const getSchedulerNamesByInstitutionId = (id: number | string) =>
  //  throttleUtil.getDataAfter(schedulerNames, 100);
  apiClient.post(apiUrls.scheduler.GET_NAMES_BY_INSTITUTION_ID, {
    data: { institution_id: id },
  });
