import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UserActivityFilter } from './forms';

import {
  AuditUserActivityItem,
  HandleFilterAuditUserActivity,
  ResetUserActivity,
} from 'store/domains';
import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface UserActivityProps {
  institutionsOptions: Array<SelectValues>;
  auditUserActivity: Array<AuditUserActivityItem>;
  filterAuditUserActivity: HandleFilterAuditUserActivity;
  resetUserActivity: ResetUserActivity;
}

const UserActivity: React.FC<UserActivityProps> = ({
  institutionsOptions,
  auditUserActivity,
  filterAuditUserActivity,
  resetUserActivity,
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
      filterAction={filterAuditUserActivity}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <UserActivityFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UserActivity);
