import { auditURLs } from 'consts';

// import { uiSessionsData } from './mock';
import { AuditUiSessionsFilterPrepared } from './types';

import { apiClient } from 'services';

// import { throttleUtil } from 'utils';

export const filterAuditUiSessions = (data: AuditUiSessionsFilterPrepared) =>
  // throttleUtil.getDataAfter(uiSessionsData, 500);
  apiClient.post(auditURLs.GET_UI_SESSIONS, { data });
