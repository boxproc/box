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
import { HomePage } from 'containers/Pages/Pages';

import Modals from 'containers/Modals';
import { pagesList } from '../Pages/pagesList';

import { HandleGetUiItems, UiItemPrepared } from 'store/domains';

import { cookiesUtil } from 'utils';
// import Notfound from 'components/NotFound';

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
  getUiItems: HandleGetUiItems;
  uiItems: Array<UiItemPrepared>;
  visibleUiItems: Array<string>;
}

const Root: React.FC<RootProps> = ({
  getUiItems,
  visibleUiItems,
}) => {
  React.useEffect(
    () => {
      getUiItems();
    },
    [getUiItems]
  );

  const isLoggedIn = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

  return (
    <RootWrapper>
      <div>
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
            {pagesList.map(page => {
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
            <PrivateRoute path={basePath} component={HomePage} />
            {/* <Route exact={true} component={Notfound} /> */}
          </Switch>
        </PagesWrapper>
      </div>
      <Footer />
      <Modals />
    </RootWrapper>
  );
};

export default Root;
