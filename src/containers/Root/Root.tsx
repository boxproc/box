import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { ImmutableArray } from 'seamless-immutable';

import styled from 'theme';

import { Container, Footer, PrivateRoute, Spinner } from 'components';

import { basePath } from 'consts';

import Header from 'containers/Header';
import { Home, Login } from 'containers/Landings';
import Modals from 'containers/Modals';
import { screensList } from 'containers/screensList';

import { storageUtil } from 'utils';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 1025px;
  min-height: 100vh;
  padding-top: 64px;
`;

const PagesWrapper = styled(Container)`
  padding-top: 15px;
`;

interface IRoot extends RouteComponentProps {
  visibleUiItemsList: ImmutableArray<string>;
  isLoadedUiItems: number;
}

const Root: React.FC<IRoot> = ({
  isLoadedUiItems,
  location,
  visibleUiItemsList = [],
}) => {
  const isLoggedIn = storageUtil.getLoginFlag();
  const registrationPendingFlag = storageUtil.getRegistrationPendingFlag();
  const lastPathname = storageUtil.getLastScreenPathname();

  React.useEffect(
    () => {
      if (!isLoggedIn) {
        storageUtil.setLastScreenPathname(location.pathname);
      } else {
        if (lastPathname && isLoadedUiItems) {
          storageUtil.removeLastScreenPathname();
        }
      }
    },
    [location, isLoggedIn, isLoadedUiItems, lastPathname]
  );

  const isRedirectionToLastScreen = React.useMemo(
    () => isLoggedIn && isLoadedUiItems && visibleUiItemsList.includes(lastPathname),
    [visibleUiItemsList, lastPathname, isLoadedUiItems, isLoggedIn]
  );

  const privateRoutes = React.useMemo(
    () => {
      const preparedRoutes: Array<object> = [];

      for (const path in screensList) {
        if (visibleUiItemsList.includes(path)) {
          preparedRoutes.push(
            <PrivateRoute
              key={path}
              path={`${basePath}${path}`}
              component={() => screensList[path]}
            />
          );
        }
      }

      return preparedRoutes;
    },
    [visibleUiItemsList]
  );

  return (
    <React.Fragment>
      <RootWrapper>
        <div>
          <div>{isLoggedIn && (<Header />)}</div>
          <main>
            <PagesWrapper>
              <Suspense fallback={<Spinner isFixed={true} />}>
                <Switch>
                  <Route
                    exact={true}
                    path={`${basePath}login`}
                    render={() => isLoggedIn
                      ? <Redirect to={basePath} />
                      : <Login />
                    }
                  />

                  {privateRoutes}

                  {isRedirectionToLastScreen && (
                    <Route
                      path={`${basePath}${lastPathname}`}
                      render={() => screensList[lastPathname]}
                    />
                  )}

                  {isRedirectionToLastScreen && (
                    <Redirect from={basePath} to={`${basePath}${lastPathname}`} />
                  )}

                  {(isLoadedUiItems || registrationPendingFlag) && !isRedirectionToLastScreen && (
                    <PrivateRoute
                      exact={true}
                      path={basePath}
                      component={Home}
                    />
                  )}

                  {!isLoggedIn && (<Redirect from="*" to={`${basePath}login`} />)}

                </Switch>
              </Suspense>
            </PagesWrapper>
          </main>
        </div>
        <Footer />
      </RootWrapper>
      <Modals />
    </React.Fragment>
  );
};

export default withRouter(Root);
