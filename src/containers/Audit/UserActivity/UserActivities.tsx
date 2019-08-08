import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { } from 'containers/Audit/UserActivity/forms';

import { tableColumns } from './userActivitiesComponents';

import { SelectValues } from 'types';
import UserActivitiesFilterForm from './forms/UserActivitiesFilterForm';

export interface UserActivityProps {
  institutionsOptions: Array<SelectValues>;
}

const UserActivities: React.FC<UserActivityProps> = ({
  institutionsOptions,
}) => {
  React.useEffect(
    () => {
      console.log();
    },
    []
  );

  return (
    <TablePage
      title="User Activities"
      // data={ledgerAccounts}
      columns={tableColumns}
      FilterForm={
        <UserActivitiesFilterForm
          // filterLedgerAccounts={filterLedgerAccounts}
          institutionsOptions={institutionsOptions}
          initialValues={{
            institutionId: institutionsOptions[0],
          }}
        />
      }
    />
  );
};

export default withSpinner()(UserActivities);
