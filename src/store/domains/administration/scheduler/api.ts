import { throttleUtil } from 'utils';
import { AdminSchedulerData } from './mock';
// import { apiClient } from 'services';

export const getAdminSchedulerJobs = () =>
  throttleUtil.getDataAfter(AdminSchedulerData, 500);
  // apiClient.post('/ui/administration/scheduler/get');

export const deleteAdminSchedulerJob = (id: string | number) =>
  throttleUtil.getDataAfter({ job_id: id }, 500);
  // apiClient.post('/ui/administration/scheduler/delete', {
  //   data: { id },
  // });
