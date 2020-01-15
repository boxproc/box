import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductFeeRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductFeeRevolvingCredit> =
  TableCellType<IllustrationProductFeeRevolvingCredit[T]>;

const columns = [
  {
    maxWidth: 100,
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
    maxWidth: 125,
    sortable: true,
    accessor: 'accruedFee',
    Header: <TableHeader title="Accrued Fee" />,
    Cell: (props: TCell<'accruedFee'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
      />
    ),
  },
];

interface IllustrationRevolvingCreditTableProps {
  feeIllustration: Array<IllustrationProductFeeRevolvingCredit>;
}

const IllustrationFeeTable: React.FC<IllustrationRevolvingCreditTableProps> = ({
  feeIllustration,
}) => {
  return (
    <Box pb="10px">
      <Table
        data={feeIllustration}
        columns={columns}
        isSmaller={true}
        isScrollbar={false}
      />
    </Box>
  );
};

export default IllustrationFeeTable;
