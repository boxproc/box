import React from 'react';

import { Box } from '@rebass/grid';

import card from 'resources/icons/card.svg';
import creditCard from 'resources/icons/creditCard.svg';
import money from 'resources/icons/money.svg';
import percent from 'resources/icons/percent.svg';

export const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'C':
    case 'Revolving credit':
      return (
        <Box width="26px" mt="-1px" mr="7px">
          <img src={creditCard} width={26} alt="" />
        </Box>
      );
    case 'P':
    case 'Prepaid':
      return (
        <Box width="26px" mt="-1px" mr="7px">
          <img src={money} width={29} alt="" />
        </Box>
      );
    case 'D':
    case 'Debit':
      return (
        <Box width="26px" mt="-3px" mr="7px">
          <img src={card} width={26} alt="" />
        </Box>
      );
    case 'L':
    case 'Loan':
      return (
        <Box width="26px" mt="-3px" mr="7px">
          <img src={percent} width={24} alt="" />
        </Box>
      );
    default:
      return null;
  }
};
