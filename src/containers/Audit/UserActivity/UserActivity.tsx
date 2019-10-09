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
  React.useEffect(
    () => {
      return () => resetUserActivity();
    },
    [resetUserActivity]
  );

  return (
    <PageTemplate
      title="User Activity"
      data={auditUserActivity}
      columns={tableColumns}
      filterAction={filterAuditUserActivity}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        dateTimeFrom: dateUtil.yesterdayDateTime,
        dateTimeTo: dateUtil.todayDateTime,
      }}
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
