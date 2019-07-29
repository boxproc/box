import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import styled from 'theme';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';

import { basePath, cookiesExpires, cookiesNames } from 'consts';
// import { basePath, cookiesNames } from 'consts';

import Header from 'containers/Header';
import Login from 'containers/Login';
import { HomePage } from 'containers/Pages/Pages';

import Modals from 'containers/Modals';
import { pagesList } from './pagesList';

import { cookiesUtil } from 'utils';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 1025px;
  min-height: 100vh;
  padding-top: 70px;
`;

const PagesWrapper = styled(Container)`
  padding-top: 30px;
`;

interface RootProps {
  visibleUiItems: Array<string>;
  sessionId: string;
  userName: string;
  isRememberedMe: boolean;
}

const Root: React.FC<RootProps> = ({
  visibleUiItems,
  sessionId,
  userName,
  isRememberedMe,
}) => {
  const isLoggedIn = cookiesUtil.get(cookiesNames.SESSION_ID);
  React.useEffect(
    () => {
      if (sessionId) {
        cookiesUtil.set(cookiesNames.SESSION_ID, sessionId, {
          expires: cookiesExpires.SESSION_ID,
        });
      }
      if (isLoggedIn && isRememberedMe) {
        cookiesUtil.set(cookiesNames.USER_NAME, userName, {
          maxAge: cookiesExpires.WEEK,
        });
      }
    },
    [sessionId, userName, isRememberedMe, isLoggedIn]
  );

  return (
    <React.Fragment>
      <RootWrapper>
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
                component={HomePage}
              />
              {!isLoggedIn &&
                <Redirect from="*" to={basePath} />
              }
            </Switch>
          </PagesWrapper>
        </div>
        <Footer />
      </RootWrapper>
      <Modals />
    </React.Fragment>
  );
};

export default Root;
