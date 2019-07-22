import { apiClient } from 'services';

// import { AdminSchedulerData, SuccessResponseStatus } from './mock';

import { AdminSchedulerEditableItemPrepared } from './types';

// import { throttleUtil } from 'utils';

export const getAdminSchedulerJobs = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/scheduler/get');

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/scheduler/delete', {
    data: { id },
  });

export const addAdminSchedulerJob = (data: AdminSchedulerEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/scheduler/create', { data });
