import React from 'react';

import { TablePage } from 'components';
import { ApiCallsFilterForm } from './forms';

import { tableColumns } from './components';

const APICallsItems = [
  {
    id: 1,
    eventDatetime: '16/09/2019 11:03:37',
    endpointId: 1,
    endpointName: 'BOX API endpoint',
    apiName: 'api_name',
    description: 'description',
    institutionId: 'BOX Institution',
  },
  {
    id: 2,
    eventDatetime: '16/09/2019 11:03:37',
    endpointId: 2,
    endpointName: 'BOX API endpoint',
    apiName: 'api_name',
    description: 'description',
    institutionId: 'BOX Institution',
  },
  {
    id: 3,
    eventDatetime: '16/09/2019 11:03:37',
    endpointId: 3,
    endpointName: 'BOX API endpoint',
    apiName: 'api_name',
    description: 'description',
    institutionId: 'BOX Institution',
  },
];

const ApiCalls: React.FC = () => {
  return (
    <TablePage
      title="API Calls"
      data={APICallsItems}
      columns={tableColumns}
      FilterForm={
        <ApiCallsFilterForm />
      }
    />
  );
};

export default ApiCalls;
