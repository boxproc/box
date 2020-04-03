import styled from 'theme';

interface ITableItemWrapper {
  color?: string;
  isAccentColor?: boolean;
  isDate?: boolean;
  isEditable?: boolean;
  isSelect?: boolean;
  isSmaller?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
}

export const TableItemWrapper = styled.div<ITableItemWrapper>`
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
    padding: 4px 6px;
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
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    font-size: 11px;
    line-height: 1.6;
    text-align: center;
  }
`;
