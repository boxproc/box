import styled from 'theme';

interface TabTitleProps {
  isDisabled?: boolean;
  hasTabs?: boolean;
}

export const TabTitle = styled.div<TabTitleProps>`
  position: relative;
  padding: 8px 15px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: ${({ isDisabled }) => isDisabled ? 'auto' : 'pointer'};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  letter-spacing: .4pt;
  border-bottom: 1px solid transparent;
  user-select: none;
  transition: all .1s linear;

  ${({ isDisabled, theme }) => !isDisabled && `
    &:hover {
      color: ${theme.colors.normalAccent};
    }
  `}

  ${({ isDisabled }) => isDisabled && `
    .title {
      opacity: .5;
    }
  `}

  &.is-active {
    color: ${({ theme }) => theme.colors.normalAccent};
    background-color: ${({ theme }) => theme.colors.lighterGrayHover};
    border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    cursor: default;
    user-select: inherit;

    ${({ hasTabs }) => hasTabs && `
      background-color: transparent;
      border-bottom-color: transparent;
    `}
  }
`;
