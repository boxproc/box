import React from 'react';

import { Box } from '@rebass/grid';
import { ContextMenuTrigger } from 'react-contextmenu';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Editor from 'react-simple-code-editor';

import jslint from 'libs/jslint';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import './prism.css';

import { ContextMenuList, WarningIcon } from 'components';

import { EditorWrapper } from './EditorWrapper';

import { ContextMenuItem } from 'types';

const WarningsCount = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.darkGray};
  user-select: text;

  .text {
    margin-left: 5px;
  }
`;

const WarningIconWrapper = styled(WarningIcon)`
  color: ${({ theme }) => theme.colors.normalAccent};
`;

interface HighlightCodeProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  fontSize?: number;
  height?: string;
  padding?: number;
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
  padding = 10,
  whiteSpacePre,
  isScrollbarBottom,
  contextMenuItems,
  onContextMenuClick,
  menuId,
  noDataStr,
  checkJSSyntax,
}) => {
  const [codeWarnings, setCodeWarnings] = React.useState([]);
  const [isHidden, setIsHidden] = React.useState(isScrollbarBottom);

  React.useEffect(
    () => {
      const wrapper = document.querySelector('.scrollbar-editor-wrapper');
      if (isScrollbarBottom && wrapper) {
        wrapper.scrollTop = wrapper.scrollHeight;
        setTimeout(() => setIsHidden(false), 10);
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

  const warningsCount = React.useMemo(
    () => codeWarnings
      && codeWarnings.length
      && `${codeWarnings.length} ${codeWarnings.length === 1 ? ' warning' : ' warnings'}`,
    [codeWarnings]
  );

  const preparedWarnings = React.useMemo(
    () => codeWarnings.join('\n'),
    [codeWarnings]
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
        visibilityHidden={isHidden}
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
              onFocus={addFocusClass}
              onBlur={removeFocusClass}
              tabSize={4}
              padding={padding}
              className="editor"
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
        <Box mt="10px">
          <WarningsCount>
            <WarningIconWrapper size="12" />
            <div className="text">{warningsCount}</div>
          </WarningsCount>
          <HighlightCode
            value={preparedWarnings}
            height="60px"
            fontSize={8.5}
            padding={5}
            whiteSpacePre={true}
          />
          </Box>
      )}
    </React.Fragment>
  );
};

export default HighlightCode;
