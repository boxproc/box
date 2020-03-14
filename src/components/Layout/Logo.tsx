import React from 'react';

import styled from 'theme';

import { basePath } from 'consts';

import { logo } from 'resources/images';

const Wrapper = styled.a`
  display: inline-block;
  min-width: 62px;
  min-height: 46px;
  font-size: 0;
`;

const Logo: React.FC = () => {
  return (
    <Wrapper
      href={basePath}
      aria-label="BOX UI"
    >
      <img src={logo} width={62} alt="" />
    </Wrapper>
  );
};

export default Logo;
