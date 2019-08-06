import React from 'react';

import { Cell, Header } from 'components/Table';

import { TableCell } from 'types';

interface CustomerItem {
  id: number;
  institutionId: number;
  firstName: string;
  lastName: string;
  status: string;
  dateOfBirth: string;
  email: string;
  mobilePhoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressTown: string;
  addressPostCode: string;
  addressCountryCode: string;
  nationalityCountryCode: string;
  dateCreated: string;
  dateClosed: string;
}

type CCell<T extends keyof CustomerItem> = TableCell<CustomerItem[T]>;

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
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Line 1" showSortIcons={true} />,
  //   accessor: 'addressLine1',
  //   Cell: (props: CCell<'addressLine1'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Line 2" showSortIcons={true} />,
  //   accessor: 'addressLine2',
  //   Cell: (props: CCell<'addressLine2'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Line 3" showSortIcons={true} />,
  //   accessor: 'addressLine3',
  //   Cell: (props: CCell<'addressLine3'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Line 4" showSortIcons={true} />,
  //   accessor: 'addressLine4',
  //   Cell: (props: CCell<'addressLine4'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Town" showSortIcons={true} />,
  //   accessor: 'addressTown',
  //   Cell: (props: CCell<'addressTown'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Post Code" showSortIcons={true} />,
  //   accessor: 'addressPostCode',
  //   Cell: (props: CCell<'addressPostCode'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Address Country Code" showSortIcons={true} />,
  //   accessor: 'addressCountryCode',
  //   Cell: (props: CCell<'addressCountryCode'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Nationality Country Code" showSortIcons={true} />,
  //   accessor: 'nationalityCountryCode',
  //   Cell: (props: CCell<'nationalityCountryCode'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Date Created" showSortIcons={true} />,
  //   accessor: 'dateCreated',
  //   Cell: (props: CCell<'dateCreated'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
  // {
  //   sortable: true,
  //   filterable: true,
  //   Header: <Header title="Date Closed" showSortIcons={true} />,
  //   accessor: 'dateClosed',
  //   Cell: (props: CCell<'dateClosed'>) => (
  //     <Cell
  //       value={props.value}
  //     />
  //   ),
  // },
];
