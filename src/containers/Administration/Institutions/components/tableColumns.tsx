import React from 'react';

import { Cell, Header } from 'components/Table';

import { TableCell } from 'types';

interface AdminInstitutionsItemPrepared {
  id: number;
  name: string;
  status: number | string;
  sftpLocation?: string;
  sftpPublicKey?: string;
}

type ICell<T extends keyof AdminInstitutionsItemPrepared> =
  TableCell<AdminInstitutionsItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: ICell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Name" />,
    accessor: 'name',
    Cell: (props: ICell<'name'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <Header title="Status" />,
    accessor: 'status',
    Cell: (props: ICell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="SFTP Location" />,
    accessor: 'sftpLocation',
    Cell: (props: ICell<'sftpLocation'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="SFTP Public Key" />,
    accessor: 'sftpPublicKey',
    Cell: (props: ICell<'sftpPublicKey'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
