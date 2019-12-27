import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import {
  IllustrationProductAprRevolvingCredit,
} from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductAprRevolvingCredit> =
TableCellType<IllustrationProductAprRevolvingCredit[T]>;

interface IllustrationRevolvingCreditTableProps {
  aprIllustration: Array<IllustrationProductAprRevolvingCredit>;
}

const IllustrationAprTable: React.FC<IllustrationRevolvingCreditTableProps> =
({aprIllustration }) => {

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'productAprId',
      Header: <TableHeader title="Product APR ID" />,
      Cell: (props: TCell<'productAprId'>) => (
        <TableCell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 125,
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
  ];

  return (
    <Box pb="10px">
      <Table
        data={aprIllustration}
        columns={columns}
        isSmaller={true}
        isScrollbar={false}
      />
    </Box>
  );
};

export default IllustrationAprTable;
