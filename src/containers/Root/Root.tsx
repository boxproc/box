import React from 'react';
import { match as Match, Route, Switch } from 'react-router';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Footer } from 'components/Footer';

import { Container } from 'containers/Block';
import Login from 'containers/Login';

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
}

const Root: React.FC<RootProps> = ({ match }) => {
  return (
    <RootWrapper>
      <Box/>
      <PagesWrapper>
        <Switch>
          <Route path={`${match.path}`} component={Login} />
        </Switch>
      </PagesWrapper>
      <Footer />
    </RootWrapper>
  );
};

export default Root;
