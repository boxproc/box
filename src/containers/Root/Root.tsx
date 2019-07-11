import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Cookies } from 'react-cookie';

import styled from 'theme';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';

import { basePath, cookiesExpires, cookiesNames } from 'consts';

import Header from 'containers/Header';
import Login from 'containers/Login';
import { HomePage } from 'containers/Pages/Pages';

import Modals from 'containers/Modals';
import { pagesList } from './pagesList';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  min-height: 100vh;
`;

const PagesWrapper = styled(Container)`
  padding-top: 30px;
`;

interface RootProps {
  visibleUiItems: Array<string>;
  sessionId: string;
  userName: string;
  isRememberedMe: boolean;
  cookies: Cookies;
}

const Root: React.FC<RootProps> = ({
  visibleUiItems,
  sessionId,
  userName,
  isRememberedMe,
  cookies,
}) => {
  const isLoggedIn = cookies.get(cookiesNames.SESSION_ID);
  React.useEffect(
    () => {
      if (sessionId) {
        cookies.set(cookiesNames.SESSION_ID, sessionId, {
          maxAge: cookiesExpires.SESSION_ID,
        });
      }
      if (isLoggedIn && isRememberedMe) {
        cookies.set(cookiesNames.USER_NAME, userName, {
          maxAge: cookiesExpires.WEEK,
        });
      }
    },
    [cookies, sessionId, userName, isRememberedMe, isLoggedIn]
  );

  return (
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
                !isLoggedIn ? <Login /> : <Redirect from="*" to={`${basePath}`} />
              )}
            />
            <PrivateRoute
              exact={true}
              path={basePath}
              component={HomePage}
            />
            {pagesList && pagesList.map(page => {
              return visibleUiItems
                && visibleUiItems.includes(page.path)
                && (
                  <PrivateRoute
                    key={page.path}
                    path={`${basePath}${page.path}`}
                    component={() => page.component}
                  />
                );
              })
            }
          </Switch>
        </PagesWrapper>
      </div>
      <Footer />
      <Modals />
    </RootWrapper>
  );
};

export default Root;
