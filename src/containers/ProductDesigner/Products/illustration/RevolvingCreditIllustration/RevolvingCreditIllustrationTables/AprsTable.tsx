import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductAprRevolvingCredit } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IllustrationProductAprRevolvingCredit> =
  ITableCell<IllustrationProductAprRevolvingCredit[T]>;

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
    accessor: 'currAccruedInterest',
    Header: <TableHeader title="Accrued Interest" />,
    Cell: (props: TCell<'currAccruedInterest'>) => (
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

interface IAprTable {
  data: ImmutableArray<IllustrationProductAprRevolvingCredit>;
}

const AprTable: React.FC<IAprTable> = ({ data }) => {
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
