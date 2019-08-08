import { apiClient } from 'services';

export const getAuditUserActivity = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/audit/users_activity/get');
