import React from 'react';

import { TableCell, TableHeader } from 'components';

import { IUsersActivityItem } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IUsersActivityItem> = ITableCell<IUsersActivityItem[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
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
    Header: <TableHeader title="User Name" />,
    accessor: 'username',
    Cell: (props: TCell<'username'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
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
    maxWidth: 350,
    Header: <TableHeader title="API Name" />,
    accessor: 'apiName',
    Cell: (props: TCell<'apiName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
