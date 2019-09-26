import { adminSchedulerPathNames } from 'consts';

import { apiClient } from 'services';

// import { AdminSchedulerData, SuccessResponseStatus } from './mock';

import { AdminSchedulerFilterPrepared, AdminSchedulerItem, AdminSchedulerJobAction } from './types';

// import { throttleUtil } from 'utils';

export const filterAdminSchedulerJobs = (data: AdminSchedulerFilterPrepared) =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
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
