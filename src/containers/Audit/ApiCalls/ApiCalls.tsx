import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { ApiCallsFilter } from './forms';

import { IApiCall, THandleFilterApiCalls, TResetApiCalls } from 'store';
import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface IApiCalls {
  apiCalls: ImmutableArray<IApiCall>;
  filterApiCalls: THandleFilterApiCalls;
  institutionsOptions: Array<ISelectValue>;
  resetApiCalls: TResetApiCalls;
  isLoading: boolean;
}

const ApiCalls: React.FC<IApiCalls> = ({
  apiCalls,
  filterApiCalls,
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
      data={apiCalls}
      columns={tableColumns}
      viewingModalName={modalNamesConst.API_CALL}
      filterAction={filterApiCalls}
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
