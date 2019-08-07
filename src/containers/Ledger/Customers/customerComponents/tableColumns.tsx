import React from 'react';

import { Cell, Header } from 'components/Table';

import { LedgerCustomerItemPrepared } from 'store/domains';

import { TableCell } from 'types';

type CCell<T extends keyof LedgerCustomerItemPrepared> = TableCell<LedgerCustomerItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 70,
    sortable: true,
    filterable: true,
    Header: <Header title="ID" showSortIcons={true} />,
    accessor: 'id',
    Cell: (props: CCell<'id'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Institution" showSortIcons={true} />,
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
    Header: <Header title="First Name" showSortIcons={true} />,
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
    Header: <Header title="Last Name" showSortIcons={true} />,
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
    Header: <Header title="Status" showSortIcons={true} />,
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
    Header: <Header title="Date of Birth" showSortIcons={true} />,
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
    Header: <Header title="Email" showSortIcons={true} />,
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
    Header: <Header title="Mobile Phone Number" showSortIcons={true} />,
    accessor: 'mobilePhoneNumber',
    Cell: (props: CCell<'mobilePhoneNumber'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
