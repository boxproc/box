import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';

import { basePath, cookiesNames } from 'consts';

import Header from 'containers/Header';
import Login from 'containers/Login';

import HomePage from 'containers/HomePage';
import { pages } from 'containers/Pages';

import Modals from 'containers/Modals';

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
              !isLoggedIn ? <Login /> : <Redirect from="*" to={`${basePath}`} />
            )}
          />
          <PrivateRoute path={`${basePath}ledger/customers`} component={pages.Customers} />
          <PrivateRoute path={`${basePath}ledger/accounts`} component={pages.Accounts} />
          <PrivateRoute
            path={`${basePath}administration/system_properties`}
            component={pages.SystemProperties}
          />
          <PrivateRoute
            path={`${basePath}administration/dictionaries/countries`}
            component={pages.Countries}
          />
          <PrivateRoute
            path={`${basePath}administration/dictionaries/currencies`}
            component={pages.Currencies}
          />
          <PrivateRoute path={`${basePath}`} component={HomePage} />
        </Switch>
      </PagesWrapper>
      <Footer />
      <Modals />
    </RootWrapper>
  );
};

export default Root;
