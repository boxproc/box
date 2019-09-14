import React from 'react';

import styled from 'theme';

import { Container } from 'components/Container';
import { highlightCss } from 'components/highlightCss';

import { stringsUtil } from 'utils';

const Wrapper = styled.footer`
  padding: 70px 0 20px;
  font-size: 12px;
  text-align: center;

  .highlight {
    display: inline-block;
    color: ${({ theme }) => theme.colors.gray};
    ${highlightCss}
    &:before {
      top: -12px;
    }
  }
`;

const Footer: React.FC = () => {
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
