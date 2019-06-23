import React from 'react';
import { match as Match, Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';

import { basePath, cookiesNames } from 'consts';

import HomePage from 'containers/HomePage';
import Login from 'containers/Login';
import Page from 'containers/Page';

import { HandleGetUserInfo, HandleUserLogout } from 'store/domains';

import { cookiesUtil } from 'utils';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  min-height: 100vh;
`;

const PagesWrapper = styled(Container)``;

interface RootProps {
  match: Match<string>;
  getUserInfo: HandleGetUserInfo;
  userLogout: HandleUserLogout;
}

const Root: React.FC<RootProps> = ({
  match,
  getUserInfo,
  userLogout,
}) => {
  const isLoggedIn = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

  React.useEffect(
    () => {
      getUserInfo();
    },
    [getUserInfo]
  );

  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
  );

  return (
    <RootWrapper>
      <Box>
        {isLoggedIn && (
          <Container>
            <Flex justifyContent="space-between">
              <Box>
                <div><Link to="/">Home Page</Link></div>
                <div><Link to="/page">Page</Link></div>
              </Box>
              <Box>
                <Button onClick={handleUserLogout}>Logout</Button>
              </Box>
            </Flex>
          </Container>
        )
        }
      </Box>
      <PagesWrapper>
        <Switch>
          <Route
            path={`${match.path}login`}
            render={() => (
              !isLoggedIn
                ? <Login />
                : <Redirect from="*" to={`${match.path}`} />
            )}
          />
          <PrivateRoute path={`${basePath}page`} component={Page} />
          <PrivateRoute path={`${basePath}`} component={HomePage} />
        </Switch>
      </PagesWrapper>
      <Footer />
    </RootWrapper>
  );
};

export default Root;
