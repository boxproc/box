import React from 'react';

import { Box } from '@rebass/grid';

import {
  Table,
  TableCell,
  TableHeader,
} from 'components';

import { TableCellType } from 'types';

interface RepaymentStatusItem {
  installments: number;
  date: string;
  principal: string;
  interest: string;
  paymentDue: string;
  balance: string;
  status: string;
}

const data = [
  {
    installments: 0,
    date: 'Jan 19, 2019',
    principal: '',
    interest: '',
    paymentDue: '',
    balance: '£1000.00',
    status: '',
  },
  {
    installments: 1,
    date: 'Feb 19, 2019',
    principal: '£250.00',
    interest: '£40.00',
    paymentDue: '£290.00',
    balance: '£750.00',
    status: 'Repaid',
  },
  {
    installments: 2,
    date: 'Mar 19, 2019',
    principal: '£250.00',
    interest: '£30.00',
    paymentDue: '£280.00',
    balance: '£500.00',
    status: 'Repaid',
  },
  {
    installments: 3,
    date: 'Apr 19, 2019',
    principal: '£250.00',
    interest: '£20.00',
    paymentDue: '£270.00',
    balance: '£250.00',
    status: 'Due',
  },
  {
    installments: 4,
    date: 'May 19, 2019',
    principal: '£250.00',
    interest: '£10.00',
    paymentDue: '£260.00',
    balance: '£0.00',
    status: 'Due',
  },
];

type TCell<T extends keyof RepaymentStatusItem> = TableCellType<RepaymentStatusItem[T]>;

interface RepaymentStatusTableProps { }

const RepaymentStatusTable: React.FC<RepaymentStatusTableProps> = () => {
  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'installments',
      Header: <TableHeader title="Installments" />,
      Cell: (props: TCell<'installments'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'date',
      Header: <TableHeader title="Date" />,
      Cell: (props: TCell<'date'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isDate={true}
        />
      ),
    },
    {
      maxWidth: 160,
      sortable: true,
      accessor: 'principal',
      Header: <TableHeader title="Principal" />,
      Cell: (props: TCell<'principal'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 160,
      sortable: true,
      accessor: 'interest',
      Header: <TableHeader title="Interest" />,
      Cell: (props: TCell<'interest'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 160,
      sortable: true,
      accessor: 'paymentDue',
      Header: <TableHeader title="Payment Due" />,
      Cell: (props: TCell<'paymentDue'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 160,
      sortable: true,
      accessor: 'balance',
      Header: <TableHeader title="Balance" />,
      Cell: (props: TCell<'principal'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'status',
      Header: <TableHeader title="Status" />,
      Cell: (props: TCell<'status'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
        />
      ),
    },
  ];

  return (
    <Box pb="10px">
      <Table
        data={data}
        columns={columns}
        pageSize={5}
        isSmaller={true}
      />
    </Box>
  );
};

export default RepaymentStatusTable;
