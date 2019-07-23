import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

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
      maxWidth: 80,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" showSortIcons={true}/>,
      accessor: 'id',
      Cell: (props: EventsCell<'id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 300,
      sortable: true,
      filterable: true,
      Header: <Header title="Name" showSortIcons={true}/>,
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
