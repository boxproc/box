import { throttleUtil } from 'utils';
import { AdminSchedulerData } from './mock';
// import { apiClient } from 'services';

export const getAdminSchedulerJobs = () =>
  throttleUtil.getDataAfter(AdminSchedulerData, 500);
  //  apiClient.post('/administration/scheduler');
