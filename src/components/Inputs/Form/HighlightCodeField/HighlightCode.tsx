import React from 'react';
import Editor from 'react-simple-code-editor';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import './prism.css';

export const Wrapper = styled.div`
  padding: 0;
  min-height: 220px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 2px;
  font-size: 13px;
  line-height: 1.7;
  overflow: auto;

  * {
    font-family: ${({ theme }) => theme.fonts.code};
  }

  &.is-focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
  }

  textarea {
    min-height: 218px;
    background-color: ${({ theme }) => theme.colors.white} !important;
  }

  textarea::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  pre {
    word-break: break-word !important;
    line-height: 1.7;
    min-height: 218px;
  }
`;

interface HighlightCodeProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
}

const HighlightCode: React.FC<HighlightCodeProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const wrapperRef = React.useRef(null);
  const handleChange = React.useCallback(
    code => onChange ? onChange(code) : null,
    [onChange]
  );
  const addFocusClass = () => {
    wrapperRef.current.classList.add('is-focus');
  };
  const removeFocusClass = () => {
    wrapperRef.current.classList.remove('is-focus');
  };

  return (
    <Wrapper
      ref={wrapperRef}
    >
      <PerfectScrollbar>
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
          overflow: 'visible',
          fontFamily: '"Roboto Mono", monospace',
          fontSize: 13,
        }}
      />
      </PerfectScrollbar>
    </Wrapper>
  );
};

export default HighlightCode;
