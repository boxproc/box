import React from 'react';

import { withSpinner } from 'components';

import { ScheduledJobsFilter } from './forms';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  AuditScheduledJobsItemPrepared,
  HandleFilterAuditScheduledJobs,
  ResetScheduledJobs,
} from 'store/domains';
import { SelectValues } from 'types';

export interface ScheduledJobsProps {
  institutionsOptions: Array<SelectValues>;
  auditScheduledJobs: Array<AuditScheduledJobsItemPrepared>;
  filterAuditScheduledJobs: HandleFilterAuditScheduledJobs;
  resetScheduledJobs: ResetScheduledJobs;
}

const ScheduledJobs: React.FC<ScheduledJobsProps> = ({
  institutionsOptions,
  auditScheduledJobs,
  filterAuditScheduledJobs,
  resetScheduledJobs,
}) => {
  React.useEffect(
    () => {
      return () => resetScheduledJobs();
    },
    [resetScheduledJobs]
  );

  return (
    <PageTemplate
      title="Scheduled Jobs"
      data={auditScheduledJobs}
      columns={tableColumns}
      filterAction={filterAuditScheduledJobs}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
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
