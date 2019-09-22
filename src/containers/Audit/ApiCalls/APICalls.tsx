import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { ApiCallsFilterForm } from './forms';

import { ApiCallsItemPrepared } from 'store/domains';

interface ApiCallsProps {
  auditApiCalls: Array<ApiCallsItemPrepared>;
}

const ApiCalls: React.FC<ApiCallsProps> = ({
  auditApiCalls,
}) => {
  return (
    <TablePage
      title="API Calls"
      data={auditApiCalls}
      columns={tableColumns}
      editModalName={modalNamesConst.AUDIT_API_CALL}
      FilterForm={
        <ApiCallsFilterForm />
      }
    />
  );
};
export default withSpinner({
  isFixed: true,
})(ApiCalls);
