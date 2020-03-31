import { apiClientService } from 'services';
// import { uiSessionsMock } from './mock';
import { IUiSessionsFilterToSend } from './types';
// import { throttleUtil } from 'utils';

export const filterUiSessions = (data: IUiSessionsFilterToSend) =>
  // throttleUtil.getDataAfter(uiSessionsMock, 500);
  apiClientService.post('ui/audit/ui_sessions/get', { data });
