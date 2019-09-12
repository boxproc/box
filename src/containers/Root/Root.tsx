import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'theme/customScrollbar.css';

import styled from 'theme';

import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';

import { basePath, cookiesNames } from 'consts';

import Header from 'containers/Header';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Modals from 'containers/Modals';
import { pagesList } from 'containers/pagesList';

import { cookiesUtil } from 'utils';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 1025px;
  height: 100vh;
  padding-top: 70px;
`;

const PagesWrapper = styled(Container)`
  padding-top: 30px;
`;

interface RootProps {
  visibleUiItems: Array<string>;
}

const Root: React.FC<RootProps> = ({ visibleUiItems }) => {
  const isLoggedIn = cookiesUtil.get(cookiesNames.SESSION_ID)
    && !cookiesUtil.get(cookiesNames.AUTH_PENDING);

  return (
    <PerfectScrollbar>
      <RootWrapper className="main-wrapper">
        <div>
          <div>
            {isLoggedIn && (
              <Header />
            )}
          </div>
          <PagesWrapper>
            <Switch>
              <Route
                exact={true}
                path={`${basePath}login`}
                render={() => (
                  !isLoggedIn ? <Login /> : <Redirect from="*" to={basePath} />
                )}
              />
              {pagesList && pagesList.map(page => {
                return visibleUiItems
                  && visibleUiItems.includes(page.path)
                  && (
                    <PrivateRoute
                      exact={true}
                      key={page.path}
                      path={`${basePath}${page.path}`}
                      component={() => page.component}
                    />
                  );
              })
              }
              <PrivateRoute
                // exact={true}
                path={basePath}
                component={Home}
              />
              {!isLoggedIn && (
                <Redirect from="*" to={basePath} />
              )}
            </Switch>
          </PagesWrapper>
        </div>
        <Footer />
      </RootWrapper>
      <Modals />
    </PerfectScrollbar>
  );
};

export default Root;
