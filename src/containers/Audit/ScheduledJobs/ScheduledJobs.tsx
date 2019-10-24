import React from 'react';

import { withSpinner } from 'components';

import { ScheduledJobsFilter } from './forms';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { iconNamesConst, stringsConst, systemMonitorTables } from 'consts';

import {
  AuditScheduledJobsItemPrepared,
  HandleFilterAuditScheduledJobs,
  HandleGetLogData,
  ResetScheduledJobs,
} from 'store/domains';
import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface ScheduledJobsProps {
  institutionsOptions: Array<SelectValues>;
  auditScheduledJobs: Array<AuditScheduledJobsItemPrepared>;
  filterAuditScheduledJobs: HandleFilterAuditScheduledJobs;
  getLogData: HandleGetLogData;
  resetScheduledJobs: ResetScheduledJobs;
  currentSchedulerId: number;
  currentScheduledJobsName: string;
}

const ScheduledJobs: React.FC<ScheduledJobsProps> = ({
  institutionsOptions,
  auditScheduledJobs,
  filterAuditScheduledJobs,
  resetScheduledJobs,
  getLogData,
  currentSchedulerId,
  currentScheduledJobsName,
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
        name: stringsConst.SHOW_LOG,
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getLogData({
          id: currentSchedulerId,
          name: systemMonitorTables.SCHEDULER_JOBS,
          title: currentScheduledJobsName,
        }),
      },
    ],
    [getLogData, currentSchedulerId]
  );

  return (
    <PageTemplate
      title="Scheduled Jobs"
      data={auditScheduledJobs}
      columns={tableColumns}
      filterAction={filterAuditScheduledJobs}
      contextMenuItems={contextMenuItems}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        scheduledJobsDateTimeFrom: dateTimeFrom,
        scheduledJobsDateTimeTo: dateTimeTo,
      }}
      FilterForm={
        <ScheduledJobsFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(ScheduledJobs);
