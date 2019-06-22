import React from 'react';
import { match as Match, Redirect, Route, Switch } from 'react-router';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';

import Login from 'containers/Login';
import Page from 'containers/Page';

import { HandleGetUserInfo } from 'store/domains';

import { stringsUtil } from 'utils';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  min-height: 100vh;
`;

const PagesWrapper = styled(Container)`
`;

interface RootProps {
  match: Match<string>;
  getUserInfo: HandleGetUserInfo;
}

const Root: React.FC<RootProps> = ({
  match,
  getUserInfo,
}) => {
  React.useEffect(
    () => {
      getUserInfo();
    },
    [getUserInfo]
  );

  return (
    <RootWrapper>
      <Box />
      <PagesWrapper>
        <Switch>
          <Route
            exact={true}
            path={`${match.path}`}
            render={() => (
              stringsUtil.getSessionStorage('isLoggedIn') === 'true'
                ? <Page />
                : <Redirect from="*" to={`${match.path}login`} />
            )}
          />
          <Route
            exact={true}
            path={`${match.path}login`}
            render={() => (
              stringsUtil.getSessionStorage('isLoggedIn') === 'false'
                ? <Login />
                : <Redirect from="*" to={`${match.path}`} />
            )}
          />
        </Switch>
      </PagesWrapper>
      <Footer />
    </RootWrapper>
  );
};

export default Root;
