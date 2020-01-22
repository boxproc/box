import React from 'react';

import { Box } from '@rebass/grid';

import {
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import {
  HandleGetRepaymentDirectDebits,
  RepaymentDirectDebitsItemPrepared,
} from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof RepaymentDirectDebitsItemPrepared> =
  TableCellType<RepaymentDirectDebitsItemPrepared[T]>;

interface RepaymentDirectDebitsTableProps {
  repaymentDirectDebits: Array<RepaymentDirectDebitsItemPrepared>;
  getRepaymentDirectDebits: HandleGetRepaymentDirectDebits;
}

const RepaymentDirectDebitsTable: React.FC<RepaymentDirectDebitsTableProps> = ({
  repaymentDirectDebits,
  getRepaymentDirectDebits,
}) => {
  React.useEffect(
    () => {
      getRepaymentDirectDebits();
    },
    [getRepaymentDirectDebits]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 100,
        sortable: true,
        accessor: 'customerId',
        Header: <TableHeader title="Customer ID" />,
        Cell: (props: TCell<'customerId'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 150,
        sortable: true,
        accessor: 'account',
        Header: <TableHeader title="Account" />,
        Cell: (props: TCell<'account'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 150,
        sortable: true,
        accessor: 'accountExt',
        Header: <TableHeader title="Account Ext" />,
        Cell: (props: TCell<'accountExt'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 150,
        sortable: true,
        accessor: 'accountholderName',
        Header: <TableHeader title="Accountholder Name" />,
        Cell: (props: TCell<'accountholderName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 70,
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
      {
        maxWidth: 150,
        sortable: true,
        accessor: 'repaymentInterfaceName',
        Header: <TableHeader title="Repayment Interface" />,
        Cell: (props: TCell<'repaymentInterfaceName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 150,
        sortable: true,
        accessor: 'repayProviderCustomerId',
        Header: <TableHeader title="Repay Provider Customer ID" />,
        Cell: (props: TCell<'repayProviderCustomerId'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        sortable: true,
        accessor: 'lastUpdateDatetime',
        Header: <TableHeader title="Last Update Datetime" />,
        Cell: (props: TCell<'lastUpdateDatetime'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isDate={true}
          />
        ),
      },
    ],
    []
  );

  return (
    <Box pb="10px">
      <Table
        data={repaymentDirectDebits}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(RepaymentDirectDebitsTable);
