import React from 'react';

import { renderCheckBoxTableCell, TableCell, TableHeader } from 'components';
import { IInstitution } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IInstitution> = ITableCell<IInstitution[T]>;

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
    maxWidth: 280,
    Header: <TableHeader title="Name" />,
    accessor: 'institutionName',
    Cell: (props: TCell<'institutionName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 280,
    Header: <TableHeader title="SFTP Location" />,
    accessor: 'sftpLocation',
    Cell: (props: TCell<'sftpLocation'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 280,
    Header: <TableHeader title="SFTP Public Key" />,
    accessor: 'sftpPublicKey',
    Cell: (props: TCell<'sftpPublicKey'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Limit at Customer Level" />,
    accessor: 'limitAtCustomerLevelFlag',
    filterable: false,
    Cell: renderCheckBoxTableCell(),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Master Institution" />,
    accessor: 'masterInstitutionFlag',
    filterable: false,
    Cell: renderCheckBoxTableCell(),
  },
];
