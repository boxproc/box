import { apiUrls } from 'consts';

// import { uiSessionsData } from './mock';
import { AuditUiSessionsFilterPrepared } from './types';

import { apiClient } from 'services';

// import { throttleUtil } from 'utils';

export const filterAuditUiSessions = (data: AuditUiSessionsFilterPrepared) =>
  // throttleUtil.getDataAfter(uiSessionsData, 500);
  apiClient.post(apiUrls.audit.GET_UI_SESSIONS, { data });
