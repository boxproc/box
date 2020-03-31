import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UsersActivityFilter } from './forms';

import {
  IUsersActivityItem,
  THandleFilterUsersActivity,
  TResetUsersActivity,
} from 'store';
import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface IUsersActivity {
  institutionsOptions: Array<ISelectValue>;
  usersActivity: ImmutableArray<IUsersActivityItem>;
  filterUsersActivity: THandleFilterUsersActivity;
  resetUsersActivity: TResetUsersActivity;
  isLoading: boolean;
}

const UsersActivity: React.FC<IUsersActivity> = ({
  institutionsOptions,
  usersActivity,
  filterUsersActivity,
  resetUsersActivity,
  isLoading,
}) => {
  const [dateTimeFrom, setDateTimeFrom] = React.useState(null);
  const [dateTimeTo, setDateTimeTo] = React.useState(null);

  React.useEffect(
    () => {
      setDateTimeFrom(dateUtil.yesterdayDateTime());
      setDateTimeTo(dateUtil.todayDateTime());

      return () => resetUsersActivity();
    },
    [resetUsersActivity]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        usersActivityDateTimeFrom: dateTimeFrom,
        usersActivityDateTimeTo: dateTimeTo,
      };
    },
    [institutionsOptions, dateTimeFrom, dateTimeTo]
  );

  return (
    <PageTemplate
      title="User Activity"
      data={usersActivity}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
      filterAction={filterUsersActivity}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <UsersActivityFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default UsersActivity;
