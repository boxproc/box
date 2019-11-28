import React from 'react';

import { TableCell, TableHeader } from 'components';

import { ApiCallsItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof ApiCallsItemPrepared> = TableCellType<ApiCallsItemPrepared[T]>;

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
    maxWidth: 130,
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
    maxWidth: 200,
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
    maxWidth: 150,
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
    maxWidth: 120,
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
    Header: <TableHeader title="Request Body" />,
    accessor: 'requestBody',
    Cell: (props: TCell<'requestBody'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="Response Body" />,
    accessor: 'responseBody',
    Cell: (props: TCell<'responseBody'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
