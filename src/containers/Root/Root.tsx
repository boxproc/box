import React from 'react';
import { match as Match, Redirect, Route, Switch } from 'react-router';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Footer } from 'components/Footer';

import { Container } from 'components/Block';

import { basePath } from 'consts';

import Login from 'containers/Login';
import Page from 'containers/Page';

import { HandleGetUserInfo } from 'store/domains';

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
          <Route path={`${match.path}login`} component={Login} />
          <Route path={`${match.path}page`} component={Page} />
          <Redirect from="*" to={`${basePath}login`} />
        </Switch>
      </PagesWrapper>
      <Footer />
    </RootWrapper>
  );
};

export default Root;
