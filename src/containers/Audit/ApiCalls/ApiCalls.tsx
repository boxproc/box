import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
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
  const [dateTimeFrom, setDateTimeFrom] = React.useState(null);
  const [dateTimeTo, setDateTimeTo] = React.useState(null);

  React.useEffect(
    () => {
      setDateTimeFrom(dateUtil.yesterdayDateTime());
      setDateTimeTo(dateUtil.todayDateTime());

      return () => resetApiCalls();
    },
    [resetApiCalls]
  );

  return (
    <PageTemplate
      title="API Calls"
      data={auditApiCalls}
      columns={tableColumns}
      editModalName={modalNamesConst.AUDIT_API_CALL}
      filterAction={filterAuditApiCalls}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        apiCallsDateTimeFrom: dateTimeFrom,
        apiCallsDateTimeTo: dateTimeTo,
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
