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
  min-height: 100vh;
  padding-top: 64px;
`;

const PagesWrapper = styled(Container)`
  padding-top: 15px;
`;

interface IRoot extends ISpinner {
  visibleUiItemsList: ImmutableArray<string>;
}

const Root: React.FC<IRoot> = ({
  visibleUiItemsList = [],
}) => {
  const isLoggedIn = storageUtil.getLoginFlag();

  const privateRoutes = React.useMemo(
    () => {
      const preparedRoutes: Array<object> = [];

      for (const page in pagesList) {
        if (visibleUiItemsList.includes(page)) {
          preparedRoutes.push(
            <PrivateRoute
              exact={true}
              key={page}
              path={`${basePath}${page}`}
              component={() => pagesList[page]}
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
              <Switch>
                <Route
                  exact={true}
                  path={`${basePath}login`}
                  render={
                    () => isLoggedIn ? <Redirect from="*" to={basePath} /> : <Login />
                  }
                />
                {privateRoutes}
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
