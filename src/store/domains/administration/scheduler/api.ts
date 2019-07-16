// import { throttleUtil } from 'utils';
// import { AdminSchedulerDataResp } from './mock';
import { apiClient } from 'services';

export const getAdminSchedulerJobs = () =>
  // throttleUtil.getDataAfter(AdminSchedulerDataResp, 500);
   apiClient.post('/administration/scheduler');
