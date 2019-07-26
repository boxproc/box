import React from 'react';
import styled from 'theme';

import Prism from 'prismjs';
import './prism.css';

import { scrollbarCss } from 'components/Scrollbar';

const Wrapper = styled.div`
  pre {
    ${scrollbarCss};
    max-height: 250px;
  }
`;

interface HighlightCodeProps {
  script?: string;
}

const HighlightCode: React.FC<HighlightCodeProps> = ({
  script,
}) => {
  React.useEffect(
    () => {
      Prism.highlightAll();
    }
  );

  return (
    <Wrapper>
      <pre>
        <code className="language-javascript">
          {script}
        </code>
      </pre>
    </Wrapper>
  );
};

export default HighlightCode;
