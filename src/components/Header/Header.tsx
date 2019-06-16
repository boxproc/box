import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'theme';

import { Container } from 'components/Block';

import logo from 'resources/images/logo.png';

const Wrapper = styled.header``;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link
          to="/"
          target="_self"
        >
          <img src={logo} width={80} alt="" />
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Header;
