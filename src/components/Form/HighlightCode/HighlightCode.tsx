import React from 'react';
import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import { scrollbarCss } from 'components/Scrollbar';

import './prism.css';

export const Wrapper = styled.div`
  ${scrollbarCss};
  height: auto;
  padding: 0;
  max-height: 132px;
  border: 1px solid ${({ theme }) => theme.grayColor};
  border-radius: 2px;
  font-size: 13px;
  line-height: 1.7;
  overflow: auto;

  * {
    font-family: ${({ theme }) => theme.codeFont};
  }

  &.is-focus {
    border-color: ${({ theme }) => theme.normalAccentColor};
  }

  textarea::placeholder {
    color: ${({ theme }) => theme.grayColor};
  }

  pre {
    min-height: 130px;
  }
`;

interface HighlightCodeProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const HighlightCode: React.FC<HighlightCodeProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const wrapperRef = React.useRef(null);
  const handleChange = React.useCallback(
    code => onChange(code),
    [onChange]
  );
  const addFocusClass = () => {
    wrapperRef.current.classList.add('is-focus');
  };
  const removeFocusClass = () => {
    wrapperRef.current.classList.remove('is-focus');
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Editor
        value={value.toString()}
        onValueChange={handleChange}
        highlight={code => highlight(code, languages.js)}
        textareaId={id}
        name={name}
        placeholder={placeholder}
        padding={10}
        onFocus={addFocusClass}
        onBlur={removeFocusClass}
        style={{
          fontFamily: '"Roboto Mono", monospace',
          fontSize: 13,
        }}
      />
    </Wrapper>
  );
};

export default HighlightCode;
