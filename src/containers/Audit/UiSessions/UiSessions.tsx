import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UiSessionsFilter } from './forms';

import { basePath, cookiesExpiresConst, iconNamesConst, uiItemsConst } from 'consts';

import {
  IUiSession,
  THandleFilterUiSessions,
  THandleFilterUsersActivityByData,
  TResetUiSessions,
} from 'store';

import { ISelectValue } from 'types';
import { cookiesUtil, dateUtil, storageUtil } from 'utils';

interface IUiSessions extends RouteComponentProps {
  institutionsOptions: Array<ISelectValue>;
  resetUiSessions: TResetUiSessions;
  uiSessions: ImmutableArray<IUiSession>;
  filterUiSessions: THandleFilterUiSessions;
  filterUsersActivity: THandleFilterUsersActivityByData;
  currentUserId: number;
  isLoading: boolean;
}

const UiSessions: React.FC<IUiSessions> = ({
  institutionsOptions,
  uiSessions,
  filterUiSessions,
  filterUsersActivity,
  resetUiSessions,
  currentUserId,
  history,
  isLoading,
}) => {
  React.useEffect(
    () => {
      return () => resetUiSessions();
    },
    [resetUiSessions]
  );

  const currentUserDataForFilter = React.useMemo(
    () => {
      const userData = uiSessions.find(el => el.id === currentUserId);

      if (!userData) {
        return null;
      }

      return {
        username: {
          value: userData.username,
          label: `${userData.firstName} ${userData.lastName}`,
        },
        institutionId: {
          value: userData.institutionId,
          label: userData.institutionName,
        },
        usersActivityDateTimeFrom: dateUtil.yesterdayDateTime(),
        usersActivityDateTimeTo: dateUtil.todayDateTime(),
      };
    },
    [uiSessions, currentUserId]
  );

  const loggedInUsername = React.useMemo(
    () => {
      const userData = storageUtil.getUserData();

      return userData && userData.username;
    },
    []
  );

  const handleGoToUsersActivity = React.useCallback(
    () => {
      const usersActivityPathName = `${basePath}${uiItemsConst.USERS_ACTIVITY}`;

      cookiesUtil.set(
        `${usersActivityPathName}-${loggedInUsername}`,
        JSON.stringify(currentUserDataForFilter),
        { expires: cookiesExpiresConst.MONTH }
      );

      history.push(usersActivityPathName);
      filterUsersActivity(currentUserDataForFilter);
    },
    [history, currentUserDataForFilter, filterUsersActivity, loggedInUsername]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Show user activity',
        icon: iconNamesConst.SHORT_TEXT,
        action: handleGoToUsersActivity,
      },
    ],
    [handleGoToUsersActivity]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: [institutionsOptions[0]],
      };
    },
    [institutionsOptions]
  );

  return (
    <React.Fragment>
      <PageTemplate
        title="UI Sessions"
        data={uiSessions}
        columns={tableColumns}
        isDownloadButton={true}
        filterAction={filterUiSessions}
        isSearchable={true}
        isLoading={isLoading}
        contextMenuItems={contextMenuItems}
        initialFilterValues={initialFilterValues}
        FilterForm={
          <UiSessionsFilter
            isDisabled={isLoading}
            institutionsOptions={institutionsOptions}
          />
        }
      />

    </React.Fragment>
  );
};

export default withRouter(UiSessions);
