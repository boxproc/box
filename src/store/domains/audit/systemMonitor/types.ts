import { ImmutableArray } from 'seamless-immutable';

/**
 * System monitor common interfaces
 */

interface IStatus {
  status: string;
}

interface IInstitutionInfo {
  institutionId: number;
  institutionName: string;
}

interface IPlainInfo extends IInstitutionInfo {
  name: string;
  id: number;
}

export interface ISysMonitorCounts {
  countActive: number;
  countFaulty: number;
}

export interface ISysMonitorItem extends IPlainInfo, IStatus {
  lastMessageDatetime: string;
  lastFaultDatetime: string;
}

/**
 * System monitor transactions interfaces
 */

export interface ISysMonitorTransaction extends IInstitutionInfo {
  transactionDatetime: string;
}

export interface ISysMonitorTransactionData {
  institution_id: number;
  institution_name: string;
  transaction_datetime: string;
}

export interface ISysMonitorTransactionsData {
  transactions: Array<ISysMonitorTransactionData>;
}

/**
 * System monitor scheduler interfaces
 */

export interface ISysMonitorScheduler extends IPlainInfo, IStatus { }

export interface ISysMonitorSchedulerJob {
  scheduler_name: string;
  scheduler_id: number;
  scheduler_status: string;
  scheduler_institution_id: number;
  scheduler_institution_name: string;
}

export interface ISysMonitorSchedulerData {
  system_monitor_scheduler_jobs: {
    scheduler_data: Array<ISysMonitorSchedulerJob>;
    total_active_scheduler_jobs: number;
    total_faulty_scheduler_jobs: number;
  };
}

/**
 * System monitor interfaces interfaces
 */

export interface ISysMonitorInterfaceData {
  interface_name: string;
  interface_id: number;
  interface_last_message_datetime: string;
  interface_last_fault_datetime: string;
  interface_status: string;
  interface_institution_id: number;
  interface_institution_name: string;
}

export interface ISysMonitorInterfacesData {
  system_monitor_interfaces: {
    interfaces_data: Array<ISysMonitorInterfaceData>;
    total_active_interfaces: number;
    total_faulty_interfaces: number;
  };
}

/**
 * System monitor endpoints interfaces
 */

export interface ISysMonitorEndpointData {
  endpoint_name: string;
  endpoint_id: number;
  endpoint_last_message_datetime: string;
  endpoint_last_fault_datetime: string;
  endpoint_status: string;
  endpoint_institution_id: number;
  endpoint_institution_name: string;
}

export interface ISysMonitorEndpointsData {
  system_monitor_endpoints: {
    endpoints_data: Array<ISysMonitorEndpointData>;
    total_active_endpoints: number;
    total_faulty_endpoints: number;
  };
}

/**
 * System monitor log data request interfaces
 */

export interface ISysMonitorLogDataReq {
  id: object;
  apiPathName: string;
}

export interface ISysMonitorLogData {
  name: string;
  id?: number;
  title?: string;
}

/** System monitor state */
export interface ISysMonitorState {
  interfaces: {
    interfaces_data: ImmutableArray<ISysMonitorInterfaceData>;
    total_active_interfaces: number;
    total_faulty_interfaces: number;
  };
  endpoints: {
    endpoints_data: ImmutableArray<ISysMonitorEndpointData>;
    total_active_endpoints: number;
    total_faulty_endpoints: number;
  };
  scheduler: {
    scheduler_data: ImmutableArray<ISysMonitorSchedulerJob>;
    total_active_scheduler_jobs: number;
    total_faulty_scheduler_jobs: number;
  };
  lastTransactions: ImmutableArray<ISysMonitorTransactionData>;
  activeItemInfoForLogData: ISysMonitorLogData;
}
