import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductRewardsRevolvingCreditResp } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductRewardsRevolvingCreditResp> =
  TableCellType<IllustrationProductRewardsRevolvingCreditResp[T]>;

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
    width: 140,
    sortable: true,
    accessor: 'accruedReward',
    Header: <TableHeader title="Accrued Reward" />,
    Cell: (props: TCell<'accruedReward'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
      />
    ),
  },
];

interface IllustrationRevolvingCreditTableProps {
  rewardIllustration: Array<IllustrationProductRewardsRevolvingCreditResp>;
}

const IllustrationRewardTable: React.FC<IllustrationRevolvingCreditTableProps> = ({
  rewardIllustration,
}) => {
  return (
    <Box pb="10px">
      <Table
        data={rewardIllustration}
        columns={columns}
        isSmaller={true}
        isScrollbar={false}
      />
    </Box>
  );
};

export default IllustrationRewardTable;
