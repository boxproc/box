import { apiClient } from 'services';

// import {
//   adminSchedulerData,
//   schedulerNames,
//   successResponseStatus,
// } from './mock';

import { AdminSchedulerFilterPrepared, AdminSchedulerItem, AdminSchedulerJobAction } from './types';

export const filterAdminSchedulerJobs = (data: AdminSchedulerFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSchedulerData, 500);
  apiClient.post('ui/administration/scheduler/get', { data });

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.delete(`ui/administration/scheduler/${id}`);

export const addAdminSchedulerJob = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('ui/administration/scheduler', { data });

export const updateAdminSchedulerJobs = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.put('ui/administration/scheduler', { data });

export const sendAdminSchedulerAction = (data: Partial<AdminSchedulerJobAction>) =>
  apiClient.post('sys/scheduler/management', { data });

export const getSchedulerNamesByInstitutionId = (id: number | string) =>
  //  throttleUtil.getDataAfter(schedulerNames, 100);
  apiClient.post('ui/administration/scheduler/name', {
    data: { institution_id: id },
  });
