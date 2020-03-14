import React from 'react';

import styled from 'theme';
import { highlightCss } from 'theme/styles';

import { Container } from './../Layout';

import { dateUtil } from 'utils';

const Wrapper = styled.footer`
  padding: 70px 0 15px;
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
          BOX Processing © 2019 - {dateUtil.getCurrentYear()} All rights reserved.
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
