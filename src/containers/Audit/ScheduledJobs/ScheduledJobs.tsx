import React from 'react';

import { withSpinner } from 'components';

import { ScheduledJobsFilter } from './forms';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { iconNamesConst } from 'consts';

import {
  AuditScheduledJobsItemPrepared,
  HandleFilterAuditScheduledJobs,
  HandleGetSchedulerLogFile,
  ResetScheduledJobs,
} from 'store/domains';
import { SelectValues } from 'types';

export interface ScheduledJobsProps {
  institutionsOptions: Array<SelectValues>;
  auditScheduledJobs: Array<AuditScheduledJobsItemPrepared>;
  filterAuditScheduledJobs: HandleFilterAuditScheduledJobs;
  getSchedulerLogFile: HandleGetSchedulerLogFile;
  resetScheduledJobs: ResetScheduledJobs;
  currentSchedulerId: number;
}

const ScheduledJobs: React.FC<ScheduledJobsProps> = ({
  institutionsOptions,
  auditScheduledJobs,
  filterAuditScheduledJobs,
  resetScheduledJobs,
  getSchedulerLogFile,
  currentSchedulerId,
}) => {
  React.useEffect(
    () => {
      return () => resetScheduledJobs();
    },
    [resetScheduledJobs]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Show log',
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getSchedulerLogFile(currentSchedulerId),
      },
    ],
    [getSchedulerLogFile, currentSchedulerId]
  );

  return (
    <PageTemplate
      title="Scheduled Jobs"
      data={auditScheduledJobs}
      columns={tableColumns}
      filterAction={filterAuditScheduledJobs}
      contextMenuItems={contextMenuItems}
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
