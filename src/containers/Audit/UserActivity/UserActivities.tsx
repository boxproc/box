import React from 'react';

import { TablePage, withSpinner } from 'components';

import UserActivitiesFilterForm from './forms/UserActivitiesFilterForm';
import { tableColumns } from './userActivitiesComponents';

import { AuditUserActivitiesItem } from 'store/domains';
import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface UserActivityProps {
  institutionsOptions: Array<SelectValues>;
  auditUserActivities: Array<AuditUserActivitiesItem>;
}

const UserActivities: React.FC<UserActivityProps> = ({
  institutionsOptions,
  auditUserActivities,
}) => {
  return (
    <TablePage
      title="User Activities"
      data={auditUserActivities}
      columns={tableColumns}
      FilterForm={
        <UserActivitiesFilterForm
          institutionsOptions={institutionsOptions}
          initialValues={{
            institutionId: institutionsOptions[0],
            datetimeFrom: dateUtil.yesterday,
            datetimeTo: dateUtil.today,
          }}
        />
      }
    />
  );
};

export default withSpinner()(UserActivities);
