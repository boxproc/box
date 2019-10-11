import React from 'react';
import Editor from 'react-simple-code-editor';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import './prism.css';

interface WrapperProps {
  height?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 0;
  height: ${({ height }) => height ? height : '220px'};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
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
    background-color: ${({ theme }) => theme.colors.white} !important;
  }

  textarea::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  pre {
    word-break: break-word !important;
    line-height: 1.7;
  }

  textarea,
  pre {
    min-height: ${({ height }) => height ? `calc(${height} - 2px)` : '218px'};
    white-space: pre !important;
  }

  .editor {
    float: left;
  }
`;

interface HighlightCodeProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  fontSize?: number;
  height?: string;
}

const HighlightCode: React.FC<HighlightCodeProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  fontSize,
  height,
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
      height={height}
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
        className="editor"
        style={{
          overflow: 'visible',
          fontFamily: '"Roboto Mono", monospace',
          fontSize: fontSize ? fontSize : 13,
        }}
      />
      </PerfectScrollbar>
    </Wrapper>
  );
};

export default HighlightCode;
