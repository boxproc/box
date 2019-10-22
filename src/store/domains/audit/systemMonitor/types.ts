import { ImmutableArray } from 'seamless-immutable';

interface Status {
  status: string;
}

interface InstitutionInfo {
  institutionId: number;
  institutionName: string;
}

interface PlainInfo extends InstitutionInfo {
  name: string;
}

export interface SystemMonitorCounts {
  countActive: number;
  countFaulty: number;
}

export interface SystemMonitorItem extends PlainInfo, Status {
  lastMessageDatetime: string;
  lastFaultDatetime: string;
}

export interface SystemMonitorTransaction extends InstitutionInfo {
  transactionDatetime: string;
}

export interface SystemMonitorSchedulerItem extends PlainInfo, Status { }

export interface SystemMonitorInterfaces {
  interface_name: string;
  interface_last_message_datetime: string;
  interface_last_fault_datetime: string;
  interface_status: string;
  interface_institution_id: number;
  interface_institution_name: string;
}

export interface SystemMonitorInterfacesData {
  system_monitor_interfaces: {
    interfaces_data: Array<SystemMonitorInterfaces>;
    total_active_interfaces: number;
    total_faulty_interfaces: number;
  };
}

export interface SystemMonitorEndpoints {
  endpoint_name: string;
  endpoint_last_message_datetime: string;
  endpoint_last_fault_datetime: string;
  endpoint_status: string;
  endpoint_institution_id: number;
  endpoint_institution_name: string;
}

export interface SystemMonitorEndpointsData {
  system_monitor_endpoints: {
    endpoints_data: Array<SystemMonitorEndpoints>;
    total_active_endpoints: number;
    total_faulty_endpoints: number;
  };
}

export interface SystemMonitorScheduler {
  scheduler_name: string;
  scheduler_status: string;
  scheduler_institution_id: number;
  scheduler_institution_name: string;
}

export interface SystemMonitorSchedulerData {
  system_monitor_scheduler_jobs: {
    scheduler_data: Array<SystemMonitorScheduler>;
    total_active_scheduler_jobs: number;
    total_faulty_scheduler_jobs: number;
  };
}

export interface SystemMonitorTransactionItem {
  institution_id: number;
  institution_name: string;
  transaction_datetime: string;
}

export interface SystemMonitorTransactionsData {
  transactions: Array<SystemMonitorTransactionItem>;
}

export interface SystemMonitorState {
  interfaces: {
    interfaces_data: ImmutableArray<SystemMonitorInterfaces>;
    total_active_interfaces: number;
    total_faulty_interfaces: number;
  };
  endpoints: {
    endpoints_data: ImmutableArray<SystemMonitorEndpoints>;
    total_active_endpoints: number;
    total_faulty_endpoints: number;
  };
  scheduler: {
    scheduler_data: ImmutableArray<SystemMonitorScheduler>;
    total_active_scheduler_jobs: number;
    total_faulty_scheduler_jobs: number;
  };
  lastTransactions: ImmutableArray<SystemMonitorTransactionItem>;
}
