import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductAprRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductAprRevolvingCredit> =
  TableCellType<IllustrationProductAprRevolvingCredit[T]>;

const columns = [
  {
    maxWidth: 125,
    sortable: true,
    accessor: 'description',
    Header: <TableHeader title="Description" />,
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    width: 140,
    sortable: true,
    accessor: 'accruedInterest',
    Header: <TableHeader title="Accrued Interest" />,
    Cell: (props: TCell<'accruedInterest'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
      />
    ),
  },
  {
    maxWidth: 125,
    sortable: true,
    accessor: 'rate',
    Header: <TableHeader title="Rate %" />,
    Cell: (props: TCell<'rate'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
      />
    ),
  },
];

interface IllustrationRevolvingCreditTableProps {
  aprIllustration: Array<IllustrationProductAprRevolvingCredit>;
}

const IllustrationAprTable: React.FC<IllustrationRevolvingCreditTableProps> = ({
  aprIllustration,
}) => {
  return (
    <Box pb="10px">
      <Table
        data={aprIllustration}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default IllustrationAprTable;
