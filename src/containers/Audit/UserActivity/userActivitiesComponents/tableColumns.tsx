import React from 'react';

import { Cell, Header } from 'components/Table';

import { AuditUserActivitiesItem } from 'store/domains/audit/userActivity';
import { TableCell } from 'types';

type ACell<T extends keyof AuditUserActivitiesItem> = TableCell<AuditUserActivitiesItem[T]>;

export const tableColumns = [
  {
    maxWidth: 70,
    sortable: true,
    filterable: true,
    Header: <Header title="ID" showSortIcons={true} />,
    accessor: 'id',
    Cell: (props: ACell<'id'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    filterable: true,
    Header: <Header title="User Name" showSortIcons={true} />,
    accessor: 'username',
    Cell: (props: ACell<'username'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 180,
    sortable: true,
    filterable: true,
    Header: <Header title="Event Date Time" showSortIcons={true} />,
    accessor: 'eventDatetime',
    Cell: (props: ACell<'eventDatetime'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    filterable: true,
    Header: <Header title="Api Name" showSortIcons={true} />,
    accessor: 'apiName',
    Cell: (props: ACell<'apiName'>) => (
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
    Cell: (props: ACell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
