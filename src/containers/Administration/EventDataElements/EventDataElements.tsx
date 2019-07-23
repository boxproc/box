import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

import { AdminEventDataElementsItem, HandleGetAdminEventDataElements } from 'store/domains';

import { TableCell } from 'types';

interface EventDataElementsProps {
  getAdminEventDataElements: HandleGetAdminEventDataElements;
  adminEventDataElementsItems: Array<AdminEventDataElementsItem>;
}

type EDECell<T extends keyof AdminEventDataElementsItem> = TableCell<AdminEventDataElementsItem[T]>;

export const EventDataElements: React.FC<EventDataElementsProps> = ({
  getAdminEventDataElements,
  adminEventDataElementsItems,
}) => {
  React.useEffect(
    () => {
      getAdminEventDataElements();
    },
    [getAdminEventDataElements]
  );

  const columns = [
    {
      maxWidth: 80,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" showSortIcons={true} />,
      accessor: 'eventId',
      Cell: (props: EDECell<'eventId'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Name" showSortIcons={true} />,
      accessor: 'name',
      Cell: (props: EDECell<'name'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Description" showSortIcons={true} />,
      accessor: 'description',
      Cell: (props: EDECell<'description'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Data Type" showSortIcons={true} />,
      accessor: 'dataType',
      Cell: (props: EDECell<'dataType'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <TablePage
      title="Event Data Elements"
      data={adminEventDataElementsItems}
      columns={columns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(EventDataElements);
