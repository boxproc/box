import React from 'react';

import { TablePage, withSpinner } from 'components';

import { UserActivityFilter } from './forms';

import { tableColumns } from './components';

import { AuditUserActivitiesItem, HandleFilterAuditUserActivities } from 'store/domains';
import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface UserActivityProps {
  institutionsOptions: Array<SelectValues>;
  auditUserActivities: Array<AuditUserActivitiesItem>;
  filterAuditUserActivities: HandleFilterAuditUserActivities;
}

const UserActivities: React.FC<UserActivityProps> = ({
  institutionsOptions,
  auditUserActivities,
  filterAuditUserActivities,
}) => {
  return (
    <TablePage
      title="User Activities"
      data={auditUserActivities}
      columns={tableColumns}
      filterAction={filterAuditUserActivities}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        datetimeFrom: dateUtil.yesterdayDateTime,
        datetimeTo: dateUtil.todayDateTime,
      }}
      FilterForm={
        <UserActivityFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner()(UserActivities);
