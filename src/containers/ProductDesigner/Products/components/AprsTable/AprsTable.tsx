import React from 'react';
import { CellInfo } from 'react-table';

import { Box } from '@rebass/grid';

import { Button, renderEditableTableCell, Table, TableCell, TableHeader } from 'components';

import { iconNamesConst } from 'consts';

import { TableCellType } from 'types';

interface ProductApr {
  id: number;
  productId: number;
  repaymentSequence: number;
  description: string;
  calculationMethod: string;
  rate: string;
  graceNumberOfDays: number;
}

const data = [
  {
    id: 1,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 1,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 1,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 1,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
  {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  }, {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  }, {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  }, {
    id: 2,
    productId: 1,
    repaymentSequence: 1,
    description: 'Test description',
    calculationMethod: 'Actual/Actual',
    rate: '00.00',
    graceNumberOfDays: 1,
  },
];

type TCell<T extends keyof ProductApr> = TableCellType<ProductApr[T]>;

interface AprsTableProps { }

const AprsTable: React.FC<AprsTableProps> = () => {
  const columns = [
    {
      maxWidth: 150,
      sortable: true,
      accessor: 'repaymentSequence',
      Header: <TableHeader title="Repayment Sequence" />,
      Cell: renderEditableTableCell({
        updateAction: () => console.log('---updating'),
        isSmaller: true,
        isNumber: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 180,
      sortable: true,
      accessor: 'description',
      Header: <TableHeader title="Description" />,
      Cell: renderEditableTableCell({
        updateAction: () => console.log('---updating'),
        isSmaller: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 150,
      sortable: true,
      accessor: 'calculationMethod',
      Header: <TableHeader title="Calculation Method" />,
      Cell: (props: TCell<'calculationMethod'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 150,
      sortable: true,
      accessor: 'rate',
      Header: <TableHeader title="Rate" />,
      Cell: renderEditableTableCell({
        updateAction: () => console.log('---updating'),
        isSmaller: true,
        isNumber: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 150,
      sortable: true,
      accessor: 'graceNumberOfDays',
      Header: <TableHeader title="Grace Number of&nbsp;Days" />,
      Cell: renderEditableTableCell({
        updateAction: () => console.log('---updating'),
        isSmaller: true,
        isNumber: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 80,
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName={iconNamesConst.DELETE}
          text="Delete"
          size="10"
          iconSize="15"
          withConfirmation={true}
          confirmationText={`Confirm want you delete APR?`}
          onClick={() => console.log('---deleting')}
        />
      ),
    },
  ];

  return (
    <Box mb="10px">
      <Table
        data={data}
        columns={columns}
        pageSize={8}
        isSmaller={true}
      />
    </Box>
  );
};

export default AprsTable;
