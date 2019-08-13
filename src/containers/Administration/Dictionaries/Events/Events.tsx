import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage';

import { AdminEventsItem, HandleGetAdminEvents } from 'store/domains';

import { TableCell } from 'types';

interface EventsProps {
  getAdminEvents: HandleGetAdminEvents;
  adminEventsItems: Array<AdminEventsItem>;
}

interface EventsItem {
  id: number;
  name: string;
}

type EventsCell<T extends keyof EventsItem> = TableCell<EventsItem[T]>;

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

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" />,
      accessor: 'id',
      Cell: (props: EventsCell<'id'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 300,
      sortable: true,
      filterable: true,
      Header: <Header title="Name" />,
      accessor: 'name',
      Cell: (props: EventsCell<'name'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <TablePage
      title="Events"
      data={adminEventsItems}
      columns={columns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Events);
