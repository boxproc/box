import React from 'react';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { ApiCallsFilter } from './forms';

import { ApiCallsItemPrepared, HandleFilterAuditApiCalls, ResetApiCalls } from 'store/domains';
import { SelectValue } from 'types';
import { dateUtil } from 'utils';

interface ApiCallsProps {
  auditApiCalls: Array<ApiCallsItemPrepared>;
  filterAuditApiCalls: HandleFilterAuditApiCalls;
  institutionsOptions: Array<SelectValue>;
  resetApiCalls: ResetApiCalls;
  isLoading: boolean;
}

const ApiCalls: React.FC<ApiCallsProps> = ({
  auditApiCalls,
  filterAuditApiCalls,
  institutionsOptions,
  resetApiCalls,
  isLoading,
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

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        apiCallsDateTimeFrom: dateTimeFrom,
        apiCallsDateTimeTo: dateTimeTo,
      };
    },
    [institutionsOptions, dateTimeFrom, dateTimeTo]
  );

  return (
    <PageTemplate
      title="API Calls"
      data={auditApiCalls}
      columns={tableColumns}
      editModalName={modalNamesConst.AUDIT_API_CALL}
      filterAction={filterAuditApiCalls}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <ApiCallsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};
export default ApiCalls;
