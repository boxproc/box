import React from 'react';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { productTypesConst } from 'consts';

import { card, creditCard, money, percent } from 'resources/images';

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

export const ProductImages = {
  [productTypesConst.REVOLVING_CREDIT]: (
    <Wrapper>
      <img
        src={creditCard}
        width={18}
        alt=""
        title="Revolving credit"
      />
    </Wrapper>
  ),
  [productTypesConst.PREPAID]: (
    <Wrapper mt="-5px">
      <img
        src={money}
        width={17}
        alt=""
        title="Prepaid"
      />
    </Wrapper>
  ),
  [productTypesConst.DEBIT]: (
    <Wrapper>
      <img
        src={card}
        width={24}
        alt=""
        title="Debit"
      />
    </Wrapper>
  ),
  [productTypesConst.LOAN]: (
    <Wrapper>
      <img
        src={percent}
        width={18}
        alt=""
        title="Loan"
      />
    </Wrapper>
  ),
};
