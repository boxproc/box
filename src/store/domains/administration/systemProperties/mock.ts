import { AdminSysPropsDataResp } from './types';

import { SuccessResponseStatusType } from 'types';

export const AdminSysPropsItemsData: AdminSysPropsDataResp = {
  response_status: {
    status_code: 0,
  },
  system_properties: [
    {
      property_name: 'scheduler.ip',
      current_value: '10.10.10.1',
      previous_value: '10.10.10.1',
      last_datetime: '2019-07-01 21:44:15',
      locked_flag: 'N',
    },
    {
      property_name: 'scheduler.rmi_port',
      current_value: '32000',
      previous_value: '32000',
      last_datetime: '2019-07-01 21:44:53',
      locked_flag: 'Y',
    },
    {
      property_name: 'scheduler.rmi_port 2',
      current_value: '32000',
      previous_value: '32000',
      last_datetime: '2019-07-01 21:44:53',
      locked_flag: 'Y',
    },
    {
      property_name: 'scheduler.rmi_port 3',
      current_value: '32000',
      previous_value: '32000',
      last_datetime: '2019-07-01 21:44:53',
      locked_flag: 'N',
    },
  ],
};

export const AdminSysPropsItemsFilteredData: AdminSysPropsDataResp = {
  response_status: {
    status_code: 0,
  },
  system_properties: [
    {
      property_name: 'scheduler.ip',
      current_value: '10.10.10.1',
      previous_value: '10.10.10.1',
      last_datetime: '2019-07-01 21:44:15',
      locked_flag: 'N',
    },
    {
      property_name: 'scheduler filtered',
      current_value: '32000',
      previous_value: '32000',
      last_datetime: '2019-07-01 21:44:53',
      locked_flag: 'Y',
    },
  ],
};

export const SuccessResponseStatus: SuccessResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
