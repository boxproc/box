// import { uiSessionsData } from './mock';
import { AuditUiSessionsFilterPrepared } from './types';

import { apiClientService } from 'services';

// import { throttleUtil } from 'utils';

export const filterAuditUiSessions = (data: AuditUiSessionsFilterPrepared) =>
  // throttleUtil.getDataAfter(uiSessionsData, 500);
  apiClientService.post('ui/audit/ui_sessions/get', { data });
