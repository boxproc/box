import React from 'react';
import { RouterProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'theme/customScrollbar.css';

import styled from 'theme';

import {
  Container,
  ExternalSpinnerProps,
  Footer,
  PrivateRoute,
  withSpinner,
} from 'components';

import { basePath } from 'consts';

import Header from 'containers/Header';
import { Home, Login } from 'containers/Landings';
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

interface RootProps extends ExternalSpinnerProps, RouterProps {
  visibleUiItems: Array<string>;
}

const Root: React.FC<RootProps> = ({ visibleUiItems, history }) => {
  const isLoggedIn = storageUtil.getLoginFlag();
  const sessionId = storageUtil.getSessionId();

  React.useEffect(
    () => {
      if (isLoggedIn && !sessionId) {
        storageUtil.clear();
        history.push(basePath);
        // urlUtil.openLocation(basePath);
      }
    },
    [isLoggedIn, sessionId, history]
  );

  const routes = React.useMemo(
    () => pagesList && pagesList.map(page => {
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
    }),
    [visibleUiItems]
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
          <main>
            <PagesWrapper>
              <Switch>
                <Route
                  exact={true}
                  path={`${basePath}login`}
                  render={() => (
                    !isLoggedIn ? <Login /> : <Redirect from="*" to={basePath} />
                  )}
                />
                {routes}
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
          </main>
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
