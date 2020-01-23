import React from 'react';

import { ScheduledJobsFilter } from './forms';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { iconNamesConst, systemMonitorTables } from 'consts';

import {
  AuditScheduledJobsItemPrepared,
  HandleFilterAuditScheduledJobs,
  HandleGetLogData,
  ResetScheduledJobs,
} from 'store/domains';
import { SelectValue } from 'types';
import { dateUtil } from 'utils';

export interface ScheduledJobsProps {
  institutionsOptions: Array<SelectValue>;
  auditScheduledJobs: Array<AuditScheduledJobsItemPrepared>;
  filterAuditScheduledJobs: HandleFilterAuditScheduledJobs;
  getLogData: HandleGetLogData;
  resetScheduledJobs: ResetScheduledJobs;
  currentSchedulerId: number;
  currentScheduledJobsName: string;
  isLoading: boolean;
}

const ScheduledJobs: React.FC<ScheduledJobsProps> = ({
  institutionsOptions,
  auditScheduledJobs,
  filterAuditScheduledJobs,
  resetScheduledJobs,
  getLogData,
  currentSchedulerId,
  currentScheduledJobsName,
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
          name: systemMonitorTables.SCHEDULER_JOBS,
          title: currentScheduledJobsName,
        }),
      },
    ],
    [getLogData, currentSchedulerId, currentScheduledJobsName]
  );

  return (
    <PageTemplate
      title="Scheduled Jobs"
      data={auditScheduledJobs}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
      filterAction={filterAuditScheduledJobs}
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
