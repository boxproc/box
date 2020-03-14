import { apiClientService } from 'services';

// import {
//   adminSchedulerData,
//   schedulerNames,
//   successResponseStatus,
// } from './mock';

import { AdminSchedulerFilterPrepared, AdminSchedulerItem, AdminSchedulerJobAction } from './types';

export const filterAdminSchedulerJobs = (data: AdminSchedulerFilterPrepared) =>
  // throttleUtil.getDataAfter(adminSchedulerData, 500);
  apiClientService.post('ui/administration/scheduler/get', { data });

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.delete(`ui/administration/scheduler/${id}`);

export const addAdminSchedulerJob = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/administration/scheduler', { data });

export const updateAdminSchedulerJobs = (data: Partial<AdminSchedulerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClientService.put('ui/administration/scheduler', { data });

export const sendAdminSchedulerAction = (data: Partial<AdminSchedulerJobAction>) =>
  apiClientService.post('sys/scheduler/management', { data });

export const getSchedulerNamesByInstitutionId = (id: number | string) =>
  //  throttleUtil.getDataAfter(schedulerNames, 100);
  apiClientService.post('ui/administration/scheduler/name', {
    data: { institution_id: id },
  });
