import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { TableItemWrapper } from './TableItemWrapper';

interface TableHeaderProps {
  title: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <TableItemWrapper>
        <Box className="title">{title}</Box>
      </TableItemWrapper>
    </Flex>
  );
};
