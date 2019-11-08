import React from 'react';
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
import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, modalTypesConst } from 'consts';

import Header from 'containers/Header';
import { Home, Login } from 'containers/Landings';
import Modals from 'containers/Modals';
import { pagesList } from 'containers/pagesList';

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
  padding-top: 70px;

  ${({ isBlured }) => isBlured && `
    filter: blur(3px);
    pointer-events: none;
  `};
`;

const PagesWrapper = styled(Container)`
  padding-top: 30px;
`;

interface RootProps extends ExternalSpinnerProps, WithModalProps {
  visibleUiItems: Array<string>;
}

const Root: React.FC<RootProps> = ({
  visibleUiItems,
  openModal,
}) => {
  const [isRelogin, setIsRelogin] = React.useState(false);
  const isLoggedIn = storageUtil.getLoginFlag();

  React.useEffect (
    () => {
      if (isLoggedIn && !storageUtil.getSessionId()) {
        setIsRelogin(true);
      }
    },
    [isLoggedIn, isRelogin]
  );

  React.useEffect(
    () => {
      if (isRelogin) {
        openModal({
          name: modalNamesConst.MESSAGE_MODAL,
          payload: { type: modalTypesConst.SESSION_ENDED },
        });
      }
    },
    [isRelogin, openModal]
  );

  const handleCheckIsRelogin = React.useCallback(
    () => {
      if (isLoggedIn && !storageUtil.getSessionId()) {
        setIsRelogin(true);
      }
    },
    [isLoggedIn]
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
      <RootWrapper
        isBlured={isRelogin}
        className="main-wrapper"
      >
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
      <Modals
        isRelogin={isRelogin}
        onClick={handleCheckIsRelogin}
      />
    </PerfectScrollbar>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(Root));
