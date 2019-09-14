import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'theme/customScrollbar.css';

import styled from 'theme';

import {
  Container,
  Footer,
  PrivateRoute,
  ExternalSpinnerProps,
  withSpinner,
} from 'components';

import { basePath } from 'consts';

import Header from 'containers/Header';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Modals from 'containers/Modals';
import { pagesList } from 'containers/pagesList';

import { storageUtil } from 'utils';

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

interface RootProps extends ExternalSpinnerProps {
  visibleUiItems: Array<string>;
}

const Root: React.FC<RootProps> = ({ visibleUiItems }) => {
  const isLoggedIn = storageUtil.getLoginFlag();
  const sessionId = storageUtil.getSessionId();

  React.useEffect(
    () => {
      if (isLoggedIn && !sessionId) {
        storageUtil.clear();
      }
    },
    [isLoggedIn, sessionId]
  );

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

export default withSpinner({
  isFixed: true,
})(Root);
