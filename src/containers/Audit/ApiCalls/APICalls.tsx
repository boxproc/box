import React from 'react';

import { TablePage, withSpinner } from 'components';
import { ApiCallsFilterForm } from './forms';

import { tableColumns } from './components';

import { ApiCallsItemPrepared } from 'store/domains';

interface ApiCallsProps {
  auditApiCalls: Array<ApiCallsItemPrepared>;
}

const ApiCalls: React.FC<ApiCallsProps> = ({ auditApiCalls }) => {
  return (
    <TablePage
      title="API Calls"
      data={auditApiCalls}
      columns={tableColumns}
      FilterForm={
        <ApiCallsFilterForm />
      }
    />
  );
};
export default withSpinner({
  isFixed: true,
})(ApiCalls);
