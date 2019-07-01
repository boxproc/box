import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Container } from 'components/Block';
import { Button } from 'components/Buttons';

import { basePath } from 'consts';

import Navbar from './Navbar';

import { HandleUserLogout } from 'store/domains';

import logo from 'resources/images/logo.png';

const Wrapper = styled.header`
  width: 100%;
  padding: 10px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

interface HeaderProps {
  userLogout: HandleUserLogout;
}

const Header: React.FC<HeaderProps> = ({
  userLogout,
}) => {
  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
  );

  return (
    <Wrapper>
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            <Box mr="15px">
              <a href={`${basePath}`}>
                <img src={logo} width={62} alt="" />
              </a>
            </Box>
            <Navbar />
          </Flex>
          <Box>
            <Button
              text="Logout"
              onClick={handleUserLogout}
            />
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Header;
