import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Container } from 'components/Block';
import HighlightLink from 'components/HighlightLink';

import { basePath } from 'consts';

import Navbar from 'components/Navbar';

import { HandleUserLogout, UiItemPrepared } from 'store/domains';

import logo from 'resources/images/logo.png';

const Wrapper = styled.header`
  width: 100%;
  padding: 10px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.lighterGrayColor};
`;

interface HeaderProps {
  userLogout: HandleUserLogout;
  uiItems: Array<UiItemPrepared>;
}

const Header: React.FC<HeaderProps> = ({
  userLogout,
  uiItems,
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
            <Box mr="20px">
              <a href={`${basePath}`}>
                <img src={logo} width={62} alt="" />
              </a>
            </Box>
            {uiItems && <Navbar uiItems={uiItems}/>}
          </Flex>
          <Box>
            <HighlightLink
              text="Log out"
              onClick={handleUserLogout}
            />
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Header;
