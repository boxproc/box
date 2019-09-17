import React from 'react';

import { TableCell, TableHeader } from 'components';

import { TableCellType } from 'types';

export interface ApiCallsItem {
  id: number;
  eventDatetime: string;
  endpointId: number;
  endpointName: string;
  apiName: string;
  description: string;
  institutionId: string;
}

type TCell<T extends keyof ApiCallsItem> = TableCellType<ApiCallsItem[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="ID" />,
    accessor: 'id',
    Cell: (props: TCell<'id'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Endpoint ID" />,
    accessor: 'endpointId',
    Cell: (props: TCell<'endpointId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Endpoint Name" />,
    accessor: 'endpointName',
    Cell: (props: TCell<'endpointName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Event Date Time" />,
    accessor: 'eventDatetime',
    Cell: (props: TCell<'eventDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="API Name" />,
    accessor: 'apiName',
    Cell: (props: TCell<'apiName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
