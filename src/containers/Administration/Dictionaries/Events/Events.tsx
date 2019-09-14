import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { AdminEventsItem, HandleGetAdminEvents } from 'store/domains';

interface EventsProps {
  getAdminEvents: HandleGetAdminEvents;
  adminEventsItems: Array<AdminEventsItem>;
}

export const Events: React.FC<EventsProps> = ({
  getAdminEvents,
  adminEventsItems,
}) => {
  React.useEffect(
    () => {
      getAdminEvents();
    },
    [getAdminEvents]
  );

  return (
    <TablePage
      title="Events"
      data={adminEventsItems}
      columns={tableColumns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Events);
