import React from 'react';

import { Box } from '@rebass/grid';

import { productTypesCodes } from 'consts';

import card from 'resources/icons/card.svg';
import creditCard from 'resources/icons/creditCard.svg';
import money from 'resources/icons/money.svg';
import percent from 'resources/icons/percent.svg';

export const renderProductIcon = (iconName: string | number) => {
  switch (iconName) {
    case productTypesCodes.REVOLVING_CREDIT:
      return (
        <Box width="26px" mr="7px">
          <img src={creditCard} width={26} alt="" />
        </Box>
      );
    case productTypesCodes.PREPAID:
      return (
        <Box width="26px" mt="-3px" mr="7px">
          <img src={money} width={29} alt="" />
        </Box>
      );
    case productTypesCodes.DEBIT:
      return (
        <Box width="26px" mr="7px">
          <img src={card} width={26} alt="" />
        </Box>
      );
    case productTypesCodes.LOAN:
      return (
        <Box width="26px" mr="7px">
          <img src={percent} width={24} alt="" />
        </Box>
      );
    default:
      return null;
  }
};
