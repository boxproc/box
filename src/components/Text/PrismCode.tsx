import React from 'react';

import styled from 'styled-components';

import Prism from 'prismjs';

const PrismCodeWrapper = styled.div`
  font-size: 13px;

  pre[class*="language-"] {
    background: transparent;
    padding: 0;
    margin: 0;
  }

  code[class*="language-"] {
    font-family: ${({ theme }) => theme.fonts.code};
  }
`;

interface PrismCodeProps {
  code: string;
  language?: string;
}

const PrismCode: React.FC<PrismCodeProps> = ({
  code,
  language = 'js',
}) => {
  React.useEffect(
    () => {
      Prism.highlightAll();
    },
    []
  );

  return (
    <PrismCodeWrapper>
      <pre className="line-numbers">
        <code className={`language-${language}`}>
          {code && code.trim()}
        </code>
      </pre>
    </PrismCodeWrapper>
  );
};

export default PrismCode;
