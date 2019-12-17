import styled from 'theme';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
  isDate?: boolean;
  isAccentColor?: boolean;
  textCenter?: boolean;
  isSmaller?: boolean;
  isEditable?: boolean;
  isSelect?: boolean;
}

export const TableItemWrapper = styled.div<TableItemWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 13px;
  line-height: 1.5;
  white-space: normal;
  border: 1px solid transparent;
  color: inherit;
  padding: 6px;

  ${({ isSmaller }) => isSmaller && `
    font-size: 12px;
    padding: 4px;
  `};

  ${({ isEditable }) => isEditable && `
    padding-left: 0;
    padding-right: 0;
  `};

  ${({ isSelect }) => isSelect && `
    padding-left: 3px;
    padding-right: 3px;
  `};

  ${({ isSelect, isEditable }) => isSelect && !isEditable && `
    min-height: 38px;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 12px;
    margin-right: 15px;
    align-items: center;
  `};

  ${({ textRight }) => textRight && `
    justify-content: flex-end;
  `}

  ${({ textCenter }) => textCenter && `
    justify-content: center;
  `}

  ${({ isDate, theme, isSmaller }) => isDate && `
    color: ${theme.colors.gray};
    font-size: ${isSmaller ? '10px' : '12px'};
    line-height: ${isSmaller ? 1.8 : 'inherit'};
  `}

  ${({ isAccentColor, theme }) => isAccentColor && `
    color: ${theme.colors.normalAccent};
  `}

  .title {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    font-size: 11px;
    line-height: 1.6;
    text-align: center;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
  }
`;
