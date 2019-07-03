import React from 'react';

import { Box } from '@rebass/grid';
import styled from 'theme';

const Wrapper = styled(Box)`
  padding-top: 20px
`;

export const HomePage = () => (
  <Wrapper>Welcome!</Wrapper>
);

export const Customers = () => (
  <Wrapper>Customers</Wrapper>
);

export const Accounts = () => (
  <Wrapper>Accounts</Wrapper>
);

export const SystemProperties = () => (
  <Wrapper>System Properties</Wrapper>
);

export const Countries = () =>  (
  <Wrapper>Countries</Wrapper>
);

export const Currencies = () => (
  <Wrapper>Currencies</Wrapper>
);
