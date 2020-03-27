import { ISchedulerJobsData, ISchedulerJobsNames } from './types';

import { IResponseStatus } from 'types';

export const schedulerJobsMock: ISchedulerJobsData = {
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

export const schedulerNamesMock: ISchedulerJobsNames = {
  scheduler_names: [
    { id: 1, name: 'API test Job 1' },
    { id: 2, name: 'Shell script test Job 2' },
    { id: 3, name: 'Settlement - institution1' },
  ],
};

export const successResponseMock: IResponseStatus = {
  response_status: {
    status_code: '00',
  },
};
