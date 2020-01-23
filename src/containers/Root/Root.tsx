import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import styled from 'theme';

import {
  Container,
  ExternalSpinnerProps,
  Footer,
  PrivateRoute,
} from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, modalTypesConst } from 'consts';

import Header from 'containers/Header';
import { Home, Login } from 'containers/Landings';
import Modals from 'containers/Modals';
import { pagesList } from 'containers/pagesList';

import { SetIsRelogin } from 'store/domains';

import { storageUtil } from 'utils';

interface RootWrapperProps {
  isBlured?: boolean;
}

const RootWrapper = styled.div<RootWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 1025px;
  height: 100vh;
  padding-top: 64px;

  ${({ isBlured }) => isBlured && `
    filter: blur(3px);
    pointer-events: none;
    user-select: none;
  `};
`;

const PagesWrapper = styled(Container)`
  padding-top: 15px;
`;

interface RootProps extends ExternalSpinnerProps, WithModalProps {
  visibleUiItemsList: Array<string>;
  setIsRelogin: SetIsRelogin;
  isRelogin: boolean;
}

const Root: React.FC<RootProps> = ({
  visibleUiItemsList,
  openModal,
  setIsRelogin,
  isRelogin,
}) => {
  const isLoggedIn = React.useMemo(
    () => storageUtil.getLoginFlag(),
    []
  );

  React.useEffect(
    () => {
      if (isLoggedIn && !storageUtil.getSessionId()) {
        setIsRelogin(true);
      }
    },
    [isLoggedIn, isRelogin, setIsRelogin]
  );

  React.useEffect(
    () => {
      if (isRelogin) {
        openModal({
          name: modalNamesConst.MESSAGE,
          payload: { type: modalTypesConst.SESSION_ENDED },
        });
      }
    },
    [isRelogin, openModal]
  );

  const routes = React.useMemo(
    () => !isRelogin
      && pagesList
      && pagesList.map(page => {
        return visibleUiItemsList
          && visibleUiItemsList.includes(page.path)
          && (
            <PrivateRoute
              exact={true}
              key={page.path}
              path={`${basePath}${page.path}`}
              component={() => page.component}
            />
          );
      }),
    [visibleUiItemsList, isRelogin]
  );

  return (
    <React.Fragment>
      <RootWrapper isBlured={isRelogin}>
        <div>
          <div>{isLoggedIn && (<Header />)}</div>
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
      <Modals isRelogin={isRelogin} />
    </React.Fragment>
  );
};

export default withModal(Root);
