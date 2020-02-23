import React from 'react';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { productTypesCodes } from 'consts';

import card from 'resources/icons/card.svg';
import creditCard from 'resources/icons/creditCard.svg';
import money from 'resources/icons/money.svg';
import percent from 'resources/icons/percent.svg';

const Wrapper = styled(Box)`
  min-width: 24px;
  width: 24px;
  margin-right: 5px;
  text-align: center;
  font-size: 0;

  img {
    display: inline-block;
  }
`;

export const renderProductIcon = (iconName: string | number) => {
  switch (iconName) {
    case productTypesCodes.REVOLVING_CREDIT:
      return (
        <Wrapper>
          <img src={creditCard} width={18} alt="" title="Revolving credit" />
        </Wrapper>
      );
    case productTypesCodes.PREPAID:
      return (
        <Wrapper mt="-5px">
          <img src={money} width={17} alt="" title="Prepaid" />
        </Wrapper>
      );
    case productTypesCodes.DEBIT:
      return (
        <Wrapper>
          <img src={card} width={24} alt="" title="Debit" />
        </Wrapper>
      );
    case productTypesCodes.LOAN:
      return (
        <Wrapper>
          <img src={percent} width={18} alt="" title="Loan" />
        </Wrapper>
      );
    default:
      return null;
  }
};
