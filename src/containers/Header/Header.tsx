import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RouteComponentProps } from 'react-router';
import { User } from 'styled-icons/fa-solid/User';

import styled from 'theme';

import { Container } from 'components/Block';
import { Button } from 'components/Buttons';
import Navbar from 'components/Navbar';
import { withSpinner } from 'components/Spinner';

import { basePath, boxInstitutionName, cookiesExpires, cookiesNames } from 'consts';

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
  padding: 10px 0;
  background: ${({ theme }) => theme.whiteColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-size: 14px;
  white-space: nowrap;
  z-index: 1;
`;

const UserIcon = styled(User)`
  margin-right: 5px;
  color: ${({ theme }) => theme.grayColor};
`;

const UserBlock = () => (
  <Flex alignItems="baseline">
    <UserIcon size="12"/>
    <div>{cookiesUtil.get(cookiesNames.FULL_NAME)}</div>
  </Flex>
);

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

      if (firstName && lastName) {
        cookiesUtil.set(cookiesNames.FULL_NAME, `${firstName} ${lastName}`, {
          maxAge: cookiesExpires.WEEK,
        });
      }
    },
    [getUiItems, getInstitutions, firstName, lastName]
  );

  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
  );

  const institution = institutions.length === 1
    ? institutions[0]
    : institutions.find(el => el.name === boxInstitutionName);

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
            <Flex alignItems="center">
              <Box mx="15px">
                <UserBlock/>
              </Box>
              {institution && (
                <Box mr="30px">
                  {institution && institution.name}
                </Box>
              )}
              <Button
                text="Log out"
                iconName="logOut"
                onClick={handleUserLogout}
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
