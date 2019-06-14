import React from 'react';

import styled from 'theme';

const Wrapper = styled.footer`
  max-width: 1560px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.lightGrayColor};
`;
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Wrapper>
      © {currentYear}
    </Wrapper>
  );
};

export default Footer;
