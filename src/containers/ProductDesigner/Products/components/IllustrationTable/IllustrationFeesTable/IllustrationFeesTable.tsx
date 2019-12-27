import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductFeeRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductFeeRevolvingCredit> =
TableCellType<IllustrationProductFeeRevolvingCredit[T]>;

interface IllustrationRevolvingCreditTableProps {
    feeIllustration: Array<IllustrationProductFeeRevolvingCredit>;
}

const IllustrationFeeTable: React.FC<IllustrationRevolvingCreditTableProps> =
({feeIllustration }) => {

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'productFeeId',
      Header: <TableHeader title="Product Fee ID" />,
      Cell: (props: TCell<'productFeeId'>) => (
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
