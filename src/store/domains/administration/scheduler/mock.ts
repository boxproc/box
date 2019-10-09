import { AdminSchedulerDataResp, AdminSchedulerLogFile, AdminSchedulerNameItems } from './types';

import { ResponseStatusType } from 'types';

export const adminSchedulerData: AdminSchedulerDataResp = {
  response_status: {
    status_code: 0,
  },
  s_scheduler: [
    {
      id: 1,
      institution_id: 1,
      name: 'API test Job 1',
      description: 'Job 1 description',
      status: 'A',
      cron_expression: '0 0/10  1/1  ? *',
      executable_type: 'A',
      executable: '',
      log_location: 'test_job1.log',
      last_execution_datetime: '2019-07-12 13:27:18',
      last_execution_result: 'U',
      parameters: '',
    },
    {
      id: 22,
      institution_id: 2,
      name: 'Shell script test Job 2',
      description: 'Job 2 description',
      status: 'A',
      cron_expression: '0 0/10  1/1  ? *',
      executable_type: 'S',
      executable: '',
      log_location: 'test_job2.log',
      last_execution_datetime: '2019-07-12 13:27:18',
      last_execution_result: 'U',
      parameters: '',
    },
  ],
};

export const schedulerNames: AdminSchedulerNameItems = {
  response_status: {
    status_code: 0,
  },
  scheduler_names: [
    {
      id: 1,
      name: 'API test Job 1',
    },
    {
      id: 2,
      name: 'Shell script test Job 2',
    },
    {
      id: 3,
      name: 'Settlement - institution1',
    },
  ],
};

export const schedulerLogFile: AdminSchedulerLogFile = {
  response_status: {
    status_code: 0,
  },
  // tslint:disable-next-line: max-line-length
  log_file: '2019-10-08 15:55:15 INFO   [main]: Job: 5 start/n 2019-10-08 16:02:37 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:02:51 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:03:03 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:04:03 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:04:35 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:05:17 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:05:44 INFO   [main]: Job: 5 execute_task/n 2019-10-08 16:16:06 INFO   [main]: Job: 5 execute_task',
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
