import React from 'react';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { productTypesCodes } from 'consts';

import card from 'resources/icons/card.svg';
import creditCard from 'resources/icons/creditCard.svg';
import money from 'resources/icons/money.svg';
import percent from 'resources/icons/percent.svg';

const Wrapper = styled(Box)`
  min-width: 26px;
  width: 26px;
  margin-right: 7px;
  text-align: center;

  img {
    display: inline-block;
  }
`;

export const renderProductIcon = (iconName: string | number) => {
  switch (iconName) {
    case productTypesCodes.REVOLVING_CREDIT:
      return (
        <Wrapper>
          <img src={creditCard} width={20} alt="" />
        </Wrapper>
      );
    case productTypesCodes.PREPAID:
      return (
        <Wrapper mt="-3px">
          <img src={money} width={18} alt="" />
        </Wrapper>
      );
    case productTypesCodes.DEBIT:
      return (
        <Wrapper>
          <img src={card} width={26} alt="" />
        </Wrapper>
      );
    case productTypesCodes.LOAN:
      return (
        <Wrapper>
          <img src={percent} width={20} alt="" />
        </Wrapper>
      );
    default:
      return null;
  }
};
