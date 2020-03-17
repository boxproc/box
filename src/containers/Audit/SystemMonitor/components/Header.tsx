import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { SmallText, T4 } from 'components';

import { SystemMonitorCounts } from 'store';

interface HeaderProps {
  title: string;
  counts?: SystemMonitorCounts;
}

const Header: React.FC<HeaderProps> = ({
  title,
  counts,
}) => {
  return (
    <Flex alignItems="baseline" justifyContent="space-between">
      <Box mr="10px">
        <T4>{title}</T4>
      </Box>
      {counts && (
        <SmallText>{counts.countActive} active, {counts.countFaulty} faulty</SmallText>
      )}
    </Flex>
  );
};

export default Header;
