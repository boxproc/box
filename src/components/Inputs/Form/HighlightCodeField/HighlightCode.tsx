import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Editor from 'react-simple-code-editor';

import jslint from 'libs/jslint';

import { highlight, languages } from 'prismjs/components/prism-core';

import { Box, Flex } from '@rebass/grid';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import './prism.css';

import { ContextMenuList, WarningIcon } from 'components';

import { EditorWrapper } from './EditorWrapper';

import { ContextMenuItem } from 'types';

const WarningIconWrapper = styled(WarningIcon)`
  color: ${({ theme }) => theme.colors.normalAccent};
`;

const WarningsWrapper = styled.div`
  padding-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
  user-select: text;
`;

interface HighlightCodeProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  fontSize?: number;
  height?: string;
  whiteSpacePre?: boolean;
  isScrollbarBottom?: boolean;
  contextMenuItems?: Array<ContextMenuItem>;
  onContextMenuClick?: () => void;
  menuId?: string;
  noDataStr?: string;
  checkJSSyntax?: boolean;
}

const HighlightCode: React.FC<HighlightCodeProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  fontSize,
  height,
  whiteSpacePre,
  isScrollbarBottom,
  contextMenuItems,
  onContextMenuClick,
  menuId,
  noDataStr,
  checkJSSyntax,
}) => {
  const [codeWarnings, setCodeWarnings] = React.useState([]);

  React.useEffect(
    () => {
      if (isScrollbarBottom) {
        const wrapper = document.querySelector('.scrollbar-editor-wrapper');

        if (wrapper) {
          wrapper.scrollTop = wrapper.scrollHeight;
        }
      }
    },
    [isScrollbarBottom]
  );

  React.useEffect(
    () => {
      const warnings = jslint(value.toString()).warnings;
      const warningsList = warnings.map((warning: { message: string }) => warning.message);

      if (checkJSSyntax) {
        setCodeWarnings(warningsList);
      }
    },
    [value, checkJSSyntax]
  );

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
    <React.Fragment>
      <EditorWrapper
        ref={wrapperRef}
        height={height}
        whiteSpacePre={whiteSpacePre}
      >
        <PerfectScrollbar className="scrollbar-editor-wrapper">
          <ContextMenuTrigger id={menuId ? menuId : 'context-menu-trigger'}>
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
              tabSize={4}
              style={{
                overflow: 'visible',
                fontFamily: '"Roboto Mono", monospace',
                fontSize: fontSize ? fontSize : 13,
              }}
            />
          </ContextMenuTrigger>
          {contextMenuItems && (
            <ContextMenuList
              menuId={menuId}
              onClick={onContextMenuClick}
              items={contextMenuItems}
              noDataStr={noDataStr}
            />
          )}
        </PerfectScrollbar>
      </EditorWrapper>
      {codeWarnings && codeWarnings.length && (
        <WarningsWrapper>
          {codeWarnings.map((warning: string, index: number) => (
            <Flex
              key={index}
              alignItems="center"
            >
              <WarningIconWrapper size="12" />
              <Box ml="7px">{warning}</Box>
            </Flex>
          ))}
        </WarningsWrapper>
      )}
    </React.Fragment>
  );
};

export default HighlightCode;
