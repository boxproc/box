import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminInstitutionsItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminInstitutionsItemPrepared> =
  TableCellType<AdminInstitutionsItemPrepared[T]>;

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
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="SFTP Location" />,
    accessor: 'sftpLocation',
    Cell: (props: TCell<'sftpLocation'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="SFTP Public Key" />,
    accessor: 'sftpPublicKey',
    Cell: (props: TCell<'sftpPublicKey'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
