import React from 'react';

import { SmallText, withSpinner } from 'components';

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
    <React.Fragment>
      <SmallText>(Temporarily works on mocks)</SmallText>
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

    </React.Fragment>
  );
};

export default withSpinner({
  isFixed: true,
})(UiSessions);
