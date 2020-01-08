import styled from 'theme';

interface ButtonWrapperProps {
  size?: string;
  width?: string;
  bordered?: boolean;
  underline?: boolean;
  hasIcon?: boolean;
  textTransformNone?: boolean;
  isTabsTheme?: boolean;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
  display: flex;
  width: ${({ width }) => width ? width : 'auto'};
  background-color: ${({ theme }) => theme.colors.lighterGray};
  font-size: ${({ size }) => size ? size + 'px' : '13px'};
  text-transform: uppercase;
  letter-spacing: .2pt;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  line-height: 1.3;
  user-select: none;
  transition: all .1s linear;

  .text-wrapper {
    position: relative;
  }

  &:hover,
  &.is-focused:not(:disabled) {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  ${({ hasIcon }) => hasIcon && `
    background-color: transparent;
  `}

  ${({ hasIcon, theme }) => !hasIcon && `
    padding: 8px 10px 6px;
    border-radius: 2px;
    border: 1px solid transparent;

    &.is-focused:not(:disabled) {
      background-color: ${theme.colors.lighterGray};
      box-shadow: ${theme.shadows.bottomBox};
    }

    &:hover,
    &.is-focused:hover {
      background-color: ${theme.colors.lighterGrayHover};
      box-shadow: ${theme.shadows.bottomBox};
    }

    &:disabled {
      background-color: transparent;
    }
  `}

  ${({ isTabsTheme, theme }) => isTabsTheme && `
    background-color: transparent;
    border-bottom: 1px solid transparent;

    &.is-focused:not(:disabled) {
      background-color: ${theme.colors.lighterGrayHover};
      box-shadow: none;
      border-bottom-color: ${theme.colors.normalAccent};
      pointer-events: none;
    }

    &:hover,
    &.is-focused:hover {
      background-color: transparent;
      box-shadow: none;
    }
  `}

  ${({ underline, theme }) => underline && `
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.lightAccent};

    &:hover,
    &.is-focused:not(:disabled) {
      background-color: inherit;
      color: ${theme.colors.gray};
      border-bottom-color: ${theme.colors.normalAccent};
    }
  `};

  ${({ bordered, theme }) => bordered && `
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 2px;
    padding: 8px 10px 7px;
    justify-content: center;
    background-color: ${theme.colors.lighterGray};
    line-height: 1.25;

    &:hover,
    &.is-focused:not(:disabled) {
      box-shadow: ${theme.shadows.normalBox};
    }
  `};

  ${({ textTransformNone }) => textTransformNone && `
    text-transform: none;
    font-weight: normal;
  `};

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`;
