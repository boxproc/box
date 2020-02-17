import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RouteComponentProps } from 'react-router';

import styled from 'theme';

import { Container, HighlightLink, Logo, Navbar, SmallText, withSpinner } from 'components';

import { basePath } from 'consts';

import { HelpDropdown, UserDropdown } from './components';

import {
  HandleGetInstitutions,
  HandleGetUiItems,
  HandleUserLogout,
  InstitutionItem,
  UiItemPrepared,
} from 'store/domains';

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

interface HeaderProps extends RouteComponentProps {
  uiItems: Array<UiItemPrepared>;
  institutions: Array<InstitutionItem>;
  firstName: string;
  lastName: string;
  username: string;
  getUiItems: HandleGetUiItems;
  getInstitutions: HandleGetInstitutions;
  userLogout: HandleUserLogout;
  isReadOnly: boolean;
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
  isReadOnly,
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
              <Navbar
                uiItems={uiItems}
                history={history}
                location={location}
                match={match}
              />
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
                  uiItems={uiItems}
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
