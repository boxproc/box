import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { ApiCallsFilterForm } from './forms';

import { ApiCallsItemPrepared, HandleSetAuditApiCallId } from 'store/domains';

interface ApiCallsProps {
  auditApiCalls: Array<ApiCallsItemPrepared>;
  setAuditApiCallId: HandleSetAuditApiCallId;
}

const ApiCalls: React.FC<ApiCallsProps> = ({
  auditApiCalls,
  setAuditApiCallId,
}) => {
  return (
    <TablePage
      title="API Calls"
      data={auditApiCalls}
      columns={tableColumns}
      editModalName={modalNamesConst.AUDIT_API_CALL}
      setCurrentIdAction={setAuditApiCallId}
      FilterForm={
        <ApiCallsFilterForm />
      }
    />
  );
};
export default withSpinner({
  isFixed: true,
})(ApiCalls);
