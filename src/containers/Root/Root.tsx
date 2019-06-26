import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';
import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';

import { basePath, cookiesNames } from 'consts';

import HomePage from 'containers/HomePage';
import Login from 'containers/Login';
import Page from 'containers/Page';

import { HandleGetUserInfo } from 'store/domains';

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
  getUserInfo: HandleGetUserInfo;
}

const Root: React.FC<RootProps> = ({
  getUserInfo,
}) => {
  const isLoggedIn = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

  React.useEffect(
    () => {
      getUserInfo();
    },
    [getUserInfo]
  );

  return (
    <RootWrapper>
      <Box>
        {isLoggedIn && (
          <Header />
        )}
      </Box>
      <PagesWrapper>
        <Switch>
          <Route
            path={`${basePath}login`}
            render={() => (
              !isLoggedIn
                ? <Login />
                : <Redirect from="*" to={`${basePath}`} />
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
