import { AdminSchedulerDataResp } from './types';

export const AdminSchedulerData: AdminSchedulerDataResp = {
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
    },
  ],
};
