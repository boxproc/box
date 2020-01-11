import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UiSessionsFilter } from './forms';

import { AuditUiSessionsItem, HandleFilterAuditUiSessions, ResetUiSessions } from 'store/domains';

import { SelectValues } from 'types';

export interface UiSessionsProps {
  institutionsOptions: Array<SelectValues>;
  resetUiSessions: ResetUiSessions;
  auditUiSessions: Array<AuditUiSessionsItem>;
  filterUiSessions: HandleFilterAuditUiSessions;
}

const UiSessions: React.FC<UiSessionsProps> = ({
  institutionsOptions,
  auditUiSessions,
  filterUiSessions,
  resetUiSessions,
}) => {

  React.useEffect(
    () => {
      return () => resetUiSessions();
    },
    [resetUiSessions]
  );

  return (
    <PageTemplate
      title="UI Sessions"
      data={auditUiSessions}
      columns={tableColumns}
      isDownloadButton={true}
      filterAction={filterUiSessions}
      initialFilterValues={{
        institutionId: [institutionsOptions[0]],
      }}
      FilterForm={
        <UiSessionsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UiSessions);
