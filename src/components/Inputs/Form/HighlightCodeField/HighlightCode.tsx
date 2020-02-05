import React from 'react';

import { Box } from '@rebass/grid';
import { ContextMenuTrigger } from 'react-contextmenu';
import Editor from 'react-simple-code-editor';

import jslint from 'libs/jslint';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import styled from 'theme';

import './prism.css';

import { ContextMenuList, WarningIcon } from 'components';

import { EditorWrapper } from './EditorWrapper';

import { ContextMenuItemProps, ContextSubMenuType } from 'types';

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
  minHeight?: string;
  padding?: number;
  whiteSpacePre?: boolean;
  isScrollbarBottom?: boolean;
  contextMenuItems?: Array<ContextMenuItemProps>;
  contextSubMenuItems?: ContextSubMenuType;
  onContextMenuClick?: () => void;
  setCursorCurrentPosition?: () => void;
  menuId?: string;
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
  minHeight,
  padding = 10,
  whiteSpacePre = true,
  isScrollbarBottom,
  contextMenuItems,
  contextSubMenuItems,
  onContextMenuClick,
  setCursorCurrentPosition,
  menuId,
  checkJSSyntax,
  readOnly,
}) => {
  const [codeWarnings, setCodeWarnings] = React.useState([]);

  React.useEffect(
    () => {
      const wrapper = wrapperRef.current;

      if (isScrollbarBottom && wrapper) {
        wrapper.scrollTop = wrapper.scrollHeight;
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
      && `${codeWarnings.length} warning(s)`,
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
        minHeight={minHeight}
        whiteSpacePre={whiteSpacePre}
      >
        <ContextMenuTrigger
          id={menuId ? menuId : 'context-menu-trigger'}
          disable={readOnly}
        >
          <Editor
            value={value.toString()}
            onValueChange={handleChange}
            highlight={code => highlight(code, languages.js)}
            textareaId={id}
            name={name}
            placeholder={placeholder}
            onFocus={addFocusClass}
            onBlur={removeFocusClass}
            onKeyUp={setCursorCurrentPosition}
            onClick={setCursorCurrentPosition}
            onContextMenu={setCursorCurrentPosition}
            tabSize={4}
            padding={padding}
            className="editor"
            disabled={readOnly}
            style={{
              overflow: 'visible',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: fontSize ? fontSize : 8.5,
            }}
          />
        </ContextMenuTrigger>
        {!readOnly && (contextMenuItems || contextSubMenuItems) && (
          <ContextMenuList
            menuId={menuId}
            onClick={onContextMenuClick}
            items={contextMenuItems}
            subMenuItems={contextSubMenuItems}
          />
        )}
      </EditorWrapper>
      {!readOnly && codeWarnings && codeWarnings.length && (
        <Box mt="5px">
          <WarningsCount>
            <WarningIconWrapper size="12" />
            <div className="text">{warningsCount}</div>
          </WarningsCount>
          <HighlightCode
            value={preparedWarnings}
            height="60px"
            minHeight="60px"
            padding={5}
            isScrollbarBottom={true}
          />
        </Box>
      )}
    </React.Fragment>
  );
};

export default HighlightCode;
