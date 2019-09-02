import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { tableColumns } from './components';

import { EventDataElemsFilter } from 'containers/Administration/Dictionaries/EventDataElems/forms';

import {
  AdminEventDataElemsItem,
  HandleFilterAdminEventDataElems,
  HandleGetAdminEvents,
} from 'store/domains';

import { SelectValues } from 'types';

interface EventDataElemsProps {
  getAdminEvents: HandleGetAdminEvents;
  adminEventDataElemsItems: Array<AdminEventDataElemsItem>;
  adminEventsOptions: Array<SelectValues>;
  filterAdminEventDataElems: HandleFilterAdminEventDataElems;
  isFilterFormDirty: boolean;
}

export const EventDataElems: React.FC<EventDataElemsProps> = ({
  getAdminEvents,
  adminEventDataElemsItems,
  adminEventsOptions,
  filterAdminEventDataElems,
  isFilterFormDirty,
}) => {
  React.useEffect(
    () => {
      getAdminEvents();
    },
    [getAdminEvents]
  );

  return (
    <TablePage
      title="Event Data Elements"
      data={adminEventDataElemsItems}
      columns={tableColumns}
      FilterForm={
        <EventDataElemsFilter
          eventOptions={adminEventsOptions}
          filterAdminEventDataElems={filterAdminEventDataElems}
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(EventDataElems);
