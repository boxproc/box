import {
  SystemMonitorEndpointsData,
  SystemMonitorInterfacesData,
  SystemMonitorSchedulerData,
  SystemMonitorTransactionData,
} from './types';

export const systemMonitorInterfaces: SystemMonitorInterfacesData = {
  system_monitor_interfaces: {
    interfaces_data: [
      {
        interface_name: 'Tutuka card management interface',
        interface_last_message_datetime: '15/10/2019 17:27:52',
        interface_last_fault_datetime: '15/10/2019 17:27:52',
        interface_status: 'A',
        interface_institution_id: 1,
      },
      {
        interface_name: 'Tribe card management interface',
        interface_last_message_datetime: '15/10/2019 17:27:52',
        interface_last_fault_datetime: '15/10/2019 17:27:52',
        interface_status: 'A',
        interface_institution_id: 1,
      },
    ],
    total_active_interfaces: 27,
    total_faulty_interfaces: 2,
  },
};

export const systemMonitorEndpoints: SystemMonitorEndpointsData = {
  system_monitor_endpoints: {
    endpoints_data: [
      {
        endpoint_name: 'BOX API endpoint',
        endpoint_last_message_datetime: '15/10/2019 17:27:52',
        endpoint_last_fault_datetime: '15/10/2019 17:27:52',
        endpoint_status: 'A',
        endpoint_institution_id: 1,
      },
      {
        endpoint_name: 'ribe card transactions endpoint',
        endpoint_last_message_datetime: '15/10/2019 17:27:52',
        endpoint_last_fault_datetime: '15/10/2019 17:27:52',
        endpoint_status: 'A',
        endpoint_institution_id: 1,
      },
    ],
    total_active_endpoints: 40,
    total_faulty_endpoints: 5,
  },
};

export const systemMonitorScheduler: SystemMonitorSchedulerData = {
  system_monitor_scheduler_jobs: {
    scheduler_data: [
      {
        scheduler_name: 'API test Job 1',
        scheduler_status: 'A',
        scheduler_institution_id: 1,
      },
      {
        scheduler_name: 'API test Job 1',
        scheduler_status: 'A',
        scheduler_institution_id: 1,
      },
    ],
    total_active_scheduler_jobs: 20,
    total_faulty_scheduler_jobs: 3,
  },
};

export const systemMonitorLastTransaction: SystemMonitorTransactionData = {
  transaction: {
    institution_id: 1,
    institution_name: 'BOX Institution',
    transaction_datetime: '2019-10-16 13:49:31',
  },
};
