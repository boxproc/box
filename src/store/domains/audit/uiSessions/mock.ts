import { AuditUiSessionsDataResp } from './types';

export const uiSessionsData: AuditUiSessionsDataResp = {
  ui_sessions: [
    {
      user_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      last_datetime: '2020-01-08 22:55:12',
      ip_address: '10.37.10.3',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0',
      status: 'V',
      institution_id: 1,
      institution_name: 'BOX',
      username: 'admin',
    },
    {
      user_id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      last_datetime: '2020-01-08 22:55:12',
      ip_address: '10.37.10.3',
      user_agent: 'PostmanRuntime/7.21.0',
      status: 'V',
      institution_id: 1,
      institution_name: 'BOX',
      username: 'Operator',
    },
  ],
};
