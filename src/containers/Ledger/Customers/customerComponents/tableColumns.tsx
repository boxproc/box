import React from 'react';

import { Cell, Header } from 'components/Table';

import { LedgerCustomerItemPrepared } from 'store/domains';

import { TableCell } from 'types';

type CCell<T extends keyof LedgerCustomerItemPrepared> = TableCell<LedgerCustomerItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    filterable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: CCell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: CCell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="First Name" />,
    accessor: 'firstName',
    Cell: (props: CCell<'firstName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Last Name" />,
    accessor: 'lastName',
    Cell: (props: CCell<'lastName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Status" />,
    accessor: 'status',
    Cell: (props: CCell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Date of Birth" />,
    accessor: 'dateOfBirth',
    Cell: (props: CCell<'dateOfBirth'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Email" />,
    accessor: 'email',
    Cell: (props: CCell<'email'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Mobile Phone" />,
    accessor: 'mobilePhoneNumber',
    Cell: (props: CCell<'mobilePhoneNumber'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
