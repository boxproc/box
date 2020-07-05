import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Container, HighlightLink, Logo, Navbar, SmallText, withSpinner } from 'components';

import { basePath } from 'consts';

import { HelpDropdown, UserDropdown } from './components';

import {
  IUiItem,
  IUserInstitution,
  THandleGetUiItems,
  THandleGetUserInstitutions,
  THandleUserLogout,
} from 'store';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 64px;
  padding: 7px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.normalBox};
  font-size: 13px;
  white-space: nowrap;
  z-index: 100;

  .user {
    position: relative;
  }

  .location {
    position: absolute;
    right: 21px;
    top: 100%;
    line-height: 1;

    .read-only {
      margin-right: 7px;
      margin-top: 1px;
    }

    a {
      text-decoration: none;
    }
  }
`;

interface IHeader extends RouteComponentProps {
  getInstitutions: THandleGetUserInstitutions;
  getUiItems: THandleGetUiItems;
  helpLink: string;
  institutions: ImmutableArray<IUserInstitution>;
  isReadOnly: boolean;
  uiItems: Array<IUiItem>;
  userLogout: THandleUserLogout;
}

const Header: React.FC<IHeader> = ({
  getInstitutions,
  getUiItems,
  helpLink,
  institutions,
  isReadOnly,
  location,
  uiItems,
  userLogout,
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

  const institutionName = React.useMemo(
    () => {
      const institution = institutions[0];

      return institution && institution.institutionName;
    },
    [institutions]
  );

  const currentPathname = React.useMemo(
    () => location.pathname.split('/').slice(2).join('/'),
    [location]
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
              <Logo />
            </Box>
            {uiItems && (
              <Navbar uiItems={uiItems} />
            )}
          </Flex>
          <Box
            ml="50px"
            className="user"
          >
            <Flex alignItems="center">
              <Box mr="7px" fontSize="0px">
                <HelpDropdown
                  location={location}
                  helpLink={helpLink}
                />
              </Box>
              {institutionName && (
                <Box mr="15px" fontSize="12px">{institutionName}</Box>
              )}
              <UserDropdown userLogout={userLogout} />
            </Flex>
            <Flex
              alignItems="center"
              className="location"
            >
              {isReadOnly && (
                <SmallText
                  light={true}
                  className="read-only"
                >
                  READ ONLY
                </SmallText>
              )}
              {currentPathname && (
                <a href={`${basePath}${currentPathname}`} >
                  <HighlightLink
                    text={currentPathname}
                    fontSize="11px"
                    isActive={true}
                  />
                </a>
              )}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default withSpinner({
  isFixed: true,
  maxHeight: '64px',
})(Header);
