import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RouteComponentProps } from 'react-router';

import styled from 'theme';

import { Container } from 'components/Block';
import HighlightLink from 'components/HighlightLink';
import Navbar from 'components/Navbar';
import { withSpinner } from 'components/Spinner';

import { basePath } from 'consts';

import { HandleGetUiItems, HandleUserLogout, UiItemPrepared } from 'store/domains';

import logo from 'resources/images/logo.png';

const Wrapper = styled.header`
  width: 100%;
  padding: 10px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

interface HeaderProps extends RouteComponentProps {
  getUiItems: HandleGetUiItems;
  userLogout: HandleUserLogout;
  uiItems: Array<UiItemPrepared>;
}

const Header: React.FC<HeaderProps> = ({
  getUiItems,
  userLogout,
  uiItems,
  history,
  location,
  match,
}) => {
  React.useEffect(
    () => {
      getUiItems();
    },
    [getUiItems]
  );

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
              <a href={basePath}>
                <img src={logo} width={62} alt="" />
              </a>
            </Box>
            {uiItems && (
              <Navbar
                uiItems={uiItems}
                history={history}
                location={location}
                match={match}
              />
            )}
          </Flex>
          <Box>
            <HighlightLink
              text="Log out"
              iconName="logOut"
              onClick={handleUserLogout}
            />
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default withSpinner({
  isFixed: true,
})(Header);
