import styled from 'theme';

interface WrapperProps {
  height?: string;
  minHeight?: string;
  whiteSpacePre?: boolean;
  visibilityHidden?: boolean;
}

export const EditorWrapper = styled.div<WrapperProps>`
  padding: 0;
  height: ${({ height }) => height ? height : '220px'};
  min-height: ${({ minHeight }) => minHeight ? minHeight : '220px'};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  font-size: 13px;
  line-height: 1.7;
  overflow: auto;
  user-select: text;

  * {
    font-family: ${({ theme }) => theme.fonts.code};
  }

  &.is-focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
  }

  textarea {
    background-color: ${({ theme }) => theme.colors.white} !important;

    &::-moz-selection,
    &::selection {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
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

    ${({ whiteSpacePre }) => whiteSpacePre && `
      white-space: pre !important;
    `}
  }

  .editor {
    float: left;
    min-width: 100%;
  }

  .react-contextmenu-wrapper {
    height: 100%;
  }
`;
