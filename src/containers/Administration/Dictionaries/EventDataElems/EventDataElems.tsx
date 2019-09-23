import React from 'react';

import { TablePage, withSpinner } from 'components';

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
}

export const EventDataElems: React.FC<EventDataElemsProps> = ({
  getAdminEvents,
  adminEventDataElemsItems,
  adminEventsOptions,
  filterAdminEventDataElems,
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
      filterAction={filterAdminEventDataElems}
      FilterForm={
        <EventDataElemsFilter eventOptions={adminEventsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(EventDataElems);
