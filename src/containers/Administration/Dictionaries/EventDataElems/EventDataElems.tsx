import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage';

import { cookiesExpires, cookiesNames } from 'consts';

import { EventDataElemsFilter } from 'containers/Administration/Dictionaries/EventDataElems/forms';

import {
  AdminEventDataElemsFilterParams,
  AdminEventDataElemsItem,
  HandleFilterAdminEventDataElems,
  HandleGetAdminEventDataElems,
  HandleGetAdminEvents,
} from 'store/domains';

import { SelectValues, TableCell } from 'types';

import { cookiesUtil } from 'utils';

interface EventDataElemsProps {
  getAdminEventDataElems: HandleGetAdminEventDataElems;
  getAdminEvents: HandleGetAdminEvents;
  adminEventDataElemsItems: Array<AdminEventDataElemsItem>;
  adminEventsOptions: Array<SelectValues>;
  filterAdminEventDataElemsParams: AdminEventDataElemsFilterParams;
  filterAdminEventDataElems: HandleFilterAdminEventDataElems;
}

type EDECell<T extends keyof AdminEventDataElemsItem> = TableCell<AdminEventDataElemsItem[T]>;

export const EventDataElems: React.FC<EventDataElemsProps> = ({
  getAdminEventDataElems,
  getAdminEvents,
  adminEventDataElemsItems,
  adminEventsOptions,
  filterAdminEventDataElemsParams,
  filterAdminEventDataElems,
}) => {
  React.useEffect(
    () => {
      getAdminEventDataElems();
      getAdminEvents();
    },
    [getAdminEventDataElems, getAdminEvents]
  );

  React.useEffect(
    () => {
      if (filterAdminEventDataElemsParams) {
        cookiesUtil.set(
          cookiesNames.EVENT_DATA_ELEMS_FILTER,
          JSON.stringify(filterAdminEventDataElemsParams), {
            expires: cookiesExpires.WEEK,
          }
        );
      }
    },
    [filterAdminEventDataElemsParams]
  );

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" />,
      accessor: 'eventId',
      Cell: (props: EDECell<'eventId'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Name" />,
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
      Header: <Header title="Description" />,
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
      Header: <Header title="Data Type" />,
      accessor: 'dataType',
      Cell: (props: EDECell<'dataType'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];

  const filterParams = cookiesUtil.get(cookiesNames.EVENT_DATA_ELEMS_FILTER);
  const initialFilterValues = filterParams && JSON.parse(filterParams);

  return (
    <TablePage
      title="Event Data Elements"
      data={adminEventDataElemsItems}
      columns={columns}
      FilterForm={
        <EventDataElemsFilter
          eventOptions={adminEventsOptions}
          filterAdminEventDataElems={filterAdminEventDataElems}
          initialValues={initialFilterValues}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(EventDataElems);
