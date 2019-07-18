// import { throttleUtil } from 'utils';
// import { AdminSchedulerData } from './mock';
import { apiClient } from 'services';
import { AdminSchedulerItemResp } from './types';
export const getAdminSchedulerJobs = () =>
 // throttleUtil.getDataAfter(AdminSchedulerData, 500);
   apiClient.post('/ui/administration/scheduler/get');

export const deleteAdminSchedulerJob = (id: string | number) =>
  // throttleUtil.getDataAfter({ property_name: propName }, 500);
  apiClient.post('/ui/administration/scheduler/delete', {
    data: { id },
  });

export const addAdminSchedulerJob = (data: AdminSchedulerItemResp) =>
  // throttleUtil.getDataAfter(AdminSysPropsItemsAddedData, 500);
  apiClient.post('/ui/administration/scheduler/create', { data });
