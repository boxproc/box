import React from 'react';

import styled from 'theme';

import { Container } from 'containers/Block';

import { stringsUtil } from 'utils';

const Wrapper = styled.footer`
  padding: 40px 0 20px;
  font-size: 12px;
  text-align: center;

  .highlight {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: -13px;
      display: inline-block;
      height: 1px;
      width: 100%;
      background-image: linear-gradient(to left, hsla(0,0%,0%,0) 0, ${({ theme }) => theme.lightAccentColor} 50%, hsla(0,0%,0%,0) 100%);
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <span className="highlight">
          BOX Processing © {stringsUtil.currentYear} All rights reserved.
        </span>
      </Container>
    </Wrapper>
  );
};

export default Footer;
