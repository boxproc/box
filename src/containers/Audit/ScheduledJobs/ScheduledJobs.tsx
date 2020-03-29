import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { ScheduledJobsFilter } from './forms';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { iconNamesConst, systemMonitorTablesConst } from 'consts';

import {
  AuditScheduledJobsItemPrepared,
  HandleFilterAuditScheduledJobs,
  HandleGetLogData,
  ResetScheduledJobs,
} from 'store';
import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface IScheduledJobs {
  institutionsOptions: Array<ISelectValue>;
  scheduledJobs: ImmutableArray <AuditScheduledJobsItemPrepared>;
  filterScheduledJobs: HandleFilterAuditScheduledJobs;
  getLogData: HandleGetLogData;
  resetScheduledJobs: ResetScheduledJobs;
  currentSchedulerId: number;
  currentScheduledJobName: string;
  isLoading: boolean;
}

const ScheduledJobs: React.FC<IScheduledJobs> = ({
  institutionsOptions,
  scheduledJobs,
  filterScheduledJobs,
  resetScheduledJobs,
  getLogData,
  currentSchedulerId,
  currentScheduledJobName,
  isLoading,
}) => {
  const [dateTimeFrom, setDateTimeFrom] = React.useState(null);
  const [dateTimeTo, setDateTimeTo] = React.useState(null);

  React.useEffect(
    () => {
      setDateTimeFrom(dateUtil.yesterdayDateTime());
      setDateTimeTo(dateUtil.todayDateTime());

      return () => resetScheduledJobs();
    },
    [resetScheduledJobs]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Show log',
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getLogData({
          id: currentSchedulerId,
          name: systemMonitorTablesConst.SCHEDULER_JOBS,
          title: currentScheduledJobName,
        }),
      },
    ],
    [getLogData, currentSchedulerId, currentScheduledJobName]
  );

  return (
    <PageTemplate
      title="Scheduled Jobs"
      data={scheduledJobs}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
      filterAction={filterScheduledJobs}
      contextMenuItems={contextMenuItems}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        scheduledJobsDateTimeFrom: dateTimeFrom,
        scheduledJobsDateTimeTo: dateTimeTo,
      }}
      FilterForm={
        <ScheduledJobsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default ScheduledJobs;
