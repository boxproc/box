// import { throttleUtil } from 'utils';
// import { AdminSchedulerDataResp } from './mock';
import { apiClient } from 'services';

export const getAdminSchedulerJobs = () =>
  // throttleUtil.getDataAfter(AdminSchedulerDataResp, 500);
   apiClient.post('/ui/administration/scheduler/get');

export const deleteAdminSchedulerJob = (id: string|number) =>
  // throttleUtil.getDataAfter({ property_name: propName }, 500);
    apiClient.post('/ui/administration/scheduler/delete', {
      data: { id },
    });
