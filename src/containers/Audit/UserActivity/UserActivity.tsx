import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UserActivityFilter } from './forms';

import {
  AuditUserActivityItem,
  HandleFilterAuditUserActivity,
  ResetUserActivity,
} from 'store';
import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface IUserActivity {
  institutionsOptions: Array<ISelectValue>;
  auditUserActivity: ImmutableArray<AuditUserActivityItem>;
  filterAuditUserActivity: HandleFilterAuditUserActivity;
  resetUserActivity: ResetUserActivity;
  isLoading: boolean;
}

const UserActivity: React.FC<IUserActivity> = ({
  institutionsOptions,
  auditUserActivity,
  filterAuditUserActivity,
  resetUserActivity,
  isLoading,
}) => {
  const [dateTimeFrom, setDateTimeFrom] = React.useState(null);
  const [dateTimeTo, setDateTimeTo] = React.useState(null);

  React.useEffect(
    () => {
      setDateTimeFrom(dateUtil.yesterdayDateTime());
      setDateTimeTo(dateUtil.todayDateTime());

      return () => resetUserActivity();
    },
    [resetUserActivity]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        userActivityDateTimeFrom: dateTimeFrom,
        userActivityDateTimeTo: dateTimeTo,
      };
    },
    [institutionsOptions, dateTimeFrom, dateTimeTo]
  );

  return (
    <PageTemplate
      title="User Activity"
      data={auditUserActivity}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
      filterAction={filterAuditUserActivity}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <UserActivityFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default UserActivity;
