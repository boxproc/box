import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UiSessionsFilter } from './forms';

import { basePath, cookiesExpires, iconNamesConst, uiItemConsts } from 'consts';

import {
  AuditUiSessionsItem,
  HandleFilterAuditUiSessions,
  HandleFilterAuditUserActivityByData,
  ResetUiSessions,
} from 'store/domains';

import { SelectValues } from 'types';
import { cookiesUtil, dateUtil, storageUtil } from 'utils';

export interface UiSessionsProps extends RouteComponentProps {
  institutionsOptions: Array<SelectValues>;
  resetUiSessions: ResetUiSessions;
  uiSessions: Array<AuditUiSessionsItem>;
  filterUiSessions: HandleFilterAuditUiSessions;
  filterUserActivity: HandleFilterAuditUserActivityByData;
  currentUserId: number;
}

const UiSessions: React.FC<UiSessionsProps> = ({
  institutionsOptions,
  uiSessions,
  filterUiSessions,
  filterUserActivity,
  resetUiSessions,
  currentUserId,
  history,
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
        userActivityDateTimeFrom: dateUtil.yesterdayDateTime(),
        userActivityDateTimeTo: dateUtil.todayDateTime(),
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

  const handleGoToUserActivity = React.useCallback(
    () => {
      const userActivityPathName = `${basePath}${uiItemConsts.AUDIT_USER_ACTIVITY}`;

      cookiesUtil.set(
        `${userActivityPathName}-${loggedInUsername}`,
        JSON.stringify(currentUserDataForFilter),
        { expires: cookiesExpires.MONTH }
      );

      history.push(userActivityPathName);
      filterUserActivity(currentUserDataForFilter);
    },
    [history, currentUserDataForFilter, filterUserActivity, loggedInUsername]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Show user activity',
        icon: iconNamesConst.SHORT_TEXT,
        action: handleGoToUserActivity,
      },
    ],
    [handleGoToUserActivity]
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
        contextMenuItems={contextMenuItems}
        initialFilterValues={initialFilterValues}
        FilterForm={
          <UiSessionsFilter
            institutionsOptions={institutionsOptions}
          />
        }
      />

    </React.Fragment>
  );
};

export default withSpinner({
  isFixed: true,
})(withRouter(UiSessions));
