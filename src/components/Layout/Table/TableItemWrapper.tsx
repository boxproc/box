import styled from 'theme';

interface TableItemWrapperProps {
  color?: string;
  textRight?: boolean;
  isDate?: boolean;
  isAccentColor?: boolean;
  textCenter?: boolean;
  isSmaller?: boolean;
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

  ${({ isSmaller }) => isSmaller && `
    font-size: 12px;
  `};

  ${({ textRight }) => textRight && `
    justify-content: flex-end;
  `}

  ${({ textCenter }) => textCenter && `
    justify-content: center;
  `}

  ${({ isDate, theme, isSmaller }) => isDate && `
    color: ${theme.colors.gray};
    font-size: ${isSmaller ? '10px' : '12px'}
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
