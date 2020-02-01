import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductAprRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductAprRevolvingCredit> =
  TableCellType<IllustrationProductAprRevolvingCredit[T]>;

const columns = [
  {
    maxWidth: 120,
    accessor: 'description',
    Header: <TableHeader title="Description" />,
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    width: 100,
    accessor: 'accruedInterest',
    Header: <TableHeader title="Accrued Interest" />,
    Cell: (props: TCell<'accruedInterest'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    accessor: 'rate',
    Header: <TableHeader title="Rate %" />,
    Cell: (props: TCell<'rate'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
];

interface IllustrationRevolvingCreditTableProps {
  data: Array<IllustrationProductAprRevolvingCredit>;
}

const AprTable: React.FC<IllustrationRevolvingCreditTableProps> = ({ data }) => {
  return (
    <Box pb="10px">
      <Table
        data={data}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default AprTable;
