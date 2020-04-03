import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ImmutableArray } from 'seamless-immutable';

import styled from 'theme';

import { Container, Footer, ISpinner, PrivateRoute } from 'components';

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
  padding-top: 64px;
`;

const PagesWrapper = styled(Container)`
  padding-top: 15px;
`;

interface IRoot extends ISpinner {
  visibleUiItemsList: ImmutableArray<string>;
}

const Root: React.FC<IRoot> = ({ visibleUiItemsList }) => {
  const isLoggedIn = storageUtil.getLoginFlag();

  const routes = React.useMemo(
    () => {
      const preparedRoutes: Array<object> = [];

      isLoggedIn && visibleUiItemsList && pagesList.forEach(page => {
        if (visibleUiItemsList.includes(page.path)) {
          preparedRoutes.push(
            <PrivateRoute
              exact={true}
              key={page.path}
              path={`${basePath}${page.path}`}
              component={() => page.component}
            />
          );
        }
      });

      return preparedRoutes;
    },
    [visibleUiItemsList, isLoggedIn]
  );

  return (
    <React.Fragment>
      <RootWrapper>
        <div>
          <div>
            {isLoggedIn && (<Header />)}
          </div>
          <main>
            <PagesWrapper>
              <Switch>
                <Route
                  exact={true}
                  path={`${basePath}login`}
                  render={
                    () => isLoggedIn ? (<Redirect from="*" to={basePath} />) : (<Login />)
                  }
                />
                {routes}
                <PrivateRoute
                  path={basePath}
                  component={Home}
                />
                {!isLoggedIn && (<Redirect from="*" to={basePath} />)}
              </Switch>
            </PagesWrapper>
          </main>
        </div>
        <Footer />
      </RootWrapper>
      <Modals />
    </React.Fragment>
  );
};

export default Root;
