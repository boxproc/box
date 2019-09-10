import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RouteComponentProps } from 'react-router';

import styled from 'theme';

import { Container } from 'components/Container';
import Navbar from 'components/Navbar';
import { withSpinner } from 'components/Spinner';
import { HelpDropdown, UserDropdown } from './components';

import { basePath, boxInstitutionName, cookiesNames } from 'consts';

import {
  HandleGetInstitutions,
  HandleGetUiItems,
  HandleUserLogout,
  InstitutionItem,
  UiItemPrepared,
} from 'store/domains';

import logo from 'resources/images/logo.png';

import { cookiesUtil } from 'utils';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 70px;
  padding: 10px 0;
  background: ${({ theme }) => theme.whiteColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-size: 13px;
  white-space: nowrap;
  z-index: 10;
`;

interface HeaderProps extends RouteComponentProps {
  getUiItems: HandleGetUiItems;
  userLogout: HandleUserLogout;
  uiItems: Array<UiItemPrepared>;
  getInstitutions: HandleGetInstitutions;
  institutions: Array<InstitutionItem>;
  firstName: string;
  lastName: string;
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
  lastName,
  firstName,
}) => {
  React.useEffect(
    () => {
      getUiItems();
      getInstitutions();
    },
    [getUiItems, getInstitutions]
  );
  React.useEffect(
    () => {
      if (firstName && lastName) {
        cookiesUtil.set(cookiesNames.FULL_NAME, `${firstName} ${lastName}`);
      }
      return cookiesUtil.remove(cookiesNames.FULL_NAME);
    },
    [firstName, lastName]
  );

  const institution = institutions.length === 1
    ? institutions[0]
    : institutions.find(el => el.institutionName === boxInstitutionName);

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
          <Box ml="50px">
            <Flex alignItems="center">
              <Box mr="7px">
                <HelpDropdown
                  location={location}
                  uiItems={uiItems}
                />
              </Box>
              {institution && (
                <Box mr="15px">
                  {institution && institution.institutionName}
                </Box>
              )}
              <UserDropdown
                userLogout={userLogout}
              />
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
