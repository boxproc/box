import React from 'react';

import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import { sharedInputCss } from 'components/Form/sharedInputCss';
import { scrollbarCss } from 'components/Scrollbar';

import './prism.css';

export const Wrapper = styled.div`
  ${sharedInputCss};
  ${scrollbarCss};
  height: auto;
  padding: 0;
  max-height: 180px;
  border: 1px solid ${({ theme }) => theme.grayColor};
  border-radius: 2px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.codeFont};
  line-height: 1.7;
  overflow: auto;
`;

interface HighlightCodeProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const HighlightCode: React.FC<HighlightCodeProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = React.useCallback(
    code => onChange(code),
    [onChange]
  );
  return (
    <Wrapper>
      <Editor
        value={value.toString()}
        onValueChange={handleChange}
        highlight={code => highlight(code, languages.js)}
        textareaId={id}
        name={name}
        placeholder={placeholder}
        padding={10}
      />
    </Wrapper>
  );
};

export default HighlightCode;
