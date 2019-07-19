import { apiClient } from 'services';

// import { AdminSchedulerData } from './mock';

import { AdminSchedulerItemResp } from './types';

// import { throttleUtil } from 'utils';

export const getAdminSchedulerJobs = () =>
 // throttleUtil.getDataAfter(AdminSchedulerData, 500);
    apiClient.post('/ui/administration/scheduler/get');

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter({ job_id: id }, 500);
  apiClient.post('/ui/administration/scheduler/delete', {
    data: { id },
  });

export const addAdminSchedulerJob = (data: AdminSchedulerItemResp) =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
   apiClient.post('/ui/administration/scheduler/create', { data });
