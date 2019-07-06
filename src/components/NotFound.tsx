import React from 'react';

import { Flex } from '@rebass/grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.grayColor };
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;

export const Notfound = () => (
  <Wrapper>
    <Flex alignItems="center" justifyContent="space-around">Not Found</Flex>
  </Wrapper>
);

export default Notfound;
