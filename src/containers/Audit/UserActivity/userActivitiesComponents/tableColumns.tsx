import React from 'react';

import { Cell, Header } from 'components/Table';

import { AuditUserActivitiesItem } from 'store/domains/audit/userActivity';
import { TableCell } from 'types';

type ACell<T extends keyof AuditUserActivitiesItem> = TableCell<AuditUserActivitiesItem[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: ACell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="User Name" />,
    accessor: 'username',
    Cell: (props: ACell<'username'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Event Date Time" />,
    accessor: 'eventDatetime',
    Cell: (props: ACell<'eventDatetime'>) => (
      <Cell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <Header title="API Name" />,
    accessor: 'apiName',
    Cell: (props: ACell<'apiName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Description" />,
    accessor: 'description',
    Cell: (props: ACell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
