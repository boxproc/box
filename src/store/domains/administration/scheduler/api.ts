import { apiClientService } from 'services';

// import {
//   schedulerJobsMock,
//   schedulerNamesMock,
//   successResponseMock,
// } from './mock';

import { ISchedulerJobData, ISchedulerJobExecReqToSend, ISchedulerJobsFilterToSend } from './types';

/**
 * Filter scheduler jobs API
 */
export const filterSchedulerJobs = (data: ISchedulerJobsFilterToSend) =>
  // throttleUtil.getDataAfter(schedulerJobsMock, 500);
  apiClientService.post('ui/administration/scheduler/get', { data });

/**
 * Delete scheduler job API
 */
export const deleteSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.delete(`ui/administration/scheduler/${id}`);

/**
 * Add scheduler job API
 */
export const addSchedulerJob = (data: Partial<ISchedulerJobData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/administration/scheduler', { data });

/**
 * Update scheduler job API
 */
export const updateSchedulerJobs = (data: Partial<ISchedulerJobData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.put('ui/administration/scheduler', { data });

/**
 * Execute scheduler job API
 */
export const execSchedulerJob = (data: Partial<ISchedulerJobExecReqToSend>) =>
  apiClientService.post('sys/scheduler/management', { data });

/**
 * Get scheduler jobs names by institution ID API
 */
export const getSchedulerNamesByInstitutionId = (id: number | string) =>
  //  throttleUtil.getDataAfter(schedulerNamesMock, 100);
  apiClientService.post('ui/administration/scheduler/name', {
    data: { institution_id: id },
  });
