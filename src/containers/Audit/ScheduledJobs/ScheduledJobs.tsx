import React from 'react';

import { TablePage, withSpinner } from 'components';

import { ScheduledJobsFilter } from './forms';

import { tableColumns } from './components';

import { AuditScheduledJobsItemPrepared, HandleFilterAuditScheduledJobs } from 'store/domains';
import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface ScheduledJobsProps {
  institutionsOptions: Array<SelectValues>;
  auditScheduledJobs: Array<AuditScheduledJobsItemPrepared>;
  filterAuditScheduledJobs: HandleFilterAuditScheduledJobs;
}

const ScheduledJobs: React.FC<ScheduledJobsProps> = ({
  institutionsOptions,
  auditScheduledJobs,
  filterAuditScheduledJobs,
}) => {
  return (
    <TablePage
      title="Scheduled Jobs"
      data={auditScheduledJobs}
      columns={tableColumns}
      filterAction={filterAuditScheduledJobs}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        startDatetime: dateUtil.yesterdayDate,
        finishDatetime: dateUtil.todayDate,
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
