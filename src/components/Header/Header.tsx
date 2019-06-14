import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'theme';

import logo from 'resources/images/logo.png';

const Wrapper = styled.header`
  max-width: 1560px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link
        to="/"
        target="_self"
      >
        <img src={logo} width={100} />
      </Link>
    </Wrapper>
  );
};

export default Header;
