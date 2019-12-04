import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RouteComponentProps } from 'react-router';

import styled from 'theme';

import { Container, Navbar, withSpinner } from 'components';

import { basePath } from 'consts';

import { HelpDropdown, UserDropdown } from './components';

import {
  HandleGetInstitutions,
  HandleGetUiItems,
  HandleUserLogout,
  InstitutionItem,
  UiItemPrepared,
} from 'store/domains';

import logo from 'resources/images/logo.png';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 70px;
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.normalBox};
  font-size: 13px;
  white-space: nowrap;
  z-index: 100;
`;

interface HeaderProps extends RouteComponentProps {
  uiItems: Array<UiItemPrepared>;
  institutions: Array<InstitutionItem>;
  firstName: string;
  lastName: string;
  username: string;
  getUiItems: HandleGetUiItems;
  getInstitutions: HandleGetInstitutions;
  userLogout: HandleUserLogout;
}

const Header: React.FC<HeaderProps> = ({
  getUiItems,
  getInstitutions,
  userLogout,
  uiItems,
  institutions,
  history,
  location,
  match,
}) => {
  React.useEffect(
    () => {
      Promise.all([
        getUiItems(),
        getInstitutions(),
      ]);
    },
    [getUiItems, getInstitutions]
  );

  const institution = React.useMemo(
    () => institutions[0],
    [institutions]
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
              <a href={basePath} aria-label="BOX UI">
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
          <Box ml="50px">
            <Flex alignItems="center">
              <Box mr="7px" fontSize="0px">
                <HelpDropdown
                  location={location}
                  uiItems={uiItems}
                />
              </Box>
              {institution && (
                <Box mr="15px" fontSize="12px">{institution.institutionName}</Box>
              )}
              <UserDropdown userLogout={userLogout} />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default withSpinner({
  isFixed: true,
  maxHeight: '70px',
})(Header);
