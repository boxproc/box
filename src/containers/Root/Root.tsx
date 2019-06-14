import React from 'react';

import styled from 'theme';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import Login from 'containers/Login';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  min-height: 100vh;
`;

const Root = () => {
  return (
    <RootWrapper>
      <Header />
      <Login />
      <Footer />
    </RootWrapper>
  );
};

export default Root;
