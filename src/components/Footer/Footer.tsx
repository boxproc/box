import React from 'react';

import styled from 'theme';

import { Container } from 'components/Block';
import { highlightCss } from 'components/highlightCss';

import { stringsUtil } from 'utils';

const Wrapper = styled.footer`
  padding: 40px 0 20px;
  font-size: 12px;
  text-align: center;

  .highlight {
    display: inline-block;
    ${highlightCss}
    &:before {
      top: -13px;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="highlight">
          BOX Processing © {stringsUtil.currentYear} All rights reserved.
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
