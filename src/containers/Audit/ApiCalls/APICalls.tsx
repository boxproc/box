import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { ApiCallsFilter } from './forms';

import { ApiCallsItemPrepared, HandleFilterAuditApiCalls, ResetApiCalls } from 'store/domains';
import { SelectValues } from 'types';
import { dateUtil } from 'utils';

interface ApiCallsProps {
  auditApiCalls: Array<ApiCallsItemPrepared>;
  filterAuditApiCalls: HandleFilterAuditApiCalls;
  institutionsOptions: Array<SelectValues>;
  resetApiCalls: ResetApiCalls;
}

const ApiCalls: React.FC<ApiCallsProps> = ({
  auditApiCalls,
  filterAuditApiCalls,
  institutionsOptions,
  resetApiCalls,
}) => {
  React.useEffect(
    () => {
      return () => resetApiCalls();
    },
    [resetApiCalls]
  );
  return (
    <TablePage
      title="API Calls"
      data={auditApiCalls}
      columns={tableColumns}
      editModalName={modalNamesConst.AUDIT_API_CALL}
      filterAction={filterAuditApiCalls}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        dateFrom: dateUtil.yesterdayDateTime,
        dateTo: dateUtil.todayDateTime,
      }}
      FilterForm={
        <ApiCallsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};
export default withSpinner({
  isFixed: true,
})(ApiCalls);
