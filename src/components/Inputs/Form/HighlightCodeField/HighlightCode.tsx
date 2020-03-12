import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './prism.css';

import { ContextMenuList } from 'components';

import { EditorWrapper } from './EditorWrapper';

import { ContextMenuItemProps, ContextSubMenuType } from 'types';

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
  readOnly,
}) => {
  React.useEffect(
    () => {
      const wrapper = wrapperRef.current;

      if (isScrollbarBottom && wrapper) {
        wrapper.scrollTop = wrapper.scrollHeight;
      }
    },
    [isScrollbarBottom]
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
    </React.Fragment>
  );
};

export default HighlightCode;
