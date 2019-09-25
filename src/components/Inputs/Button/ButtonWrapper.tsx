import styled from 'theme';

interface ButtonWrapperProps {
  size?: string;
  bordered?: boolean;
  underline?: boolean;
  hasIcon?: boolean;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
  display: flex;
  background: transparent;
  font-size: ${({ size }) => size ? size + 'px' : '13px'};
  text-transform: uppercase;
  letter-spacing: .2pt;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  user-select: none;

  ${({ hasIcon, theme }) => !hasIcon && `
    padding: 8px 10px 6px;
    border-radius: 2px;
    border: 1px solid transparent;
    &:hover,
    &.is-focused:not(:disabled) {
      background-color: ${theme.colors.lighterGray};
    }
  `}

  ${({ underline, theme }) => underline && `
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.normalAccent};
  `}

  ${({ bordered, theme }) => bordered && `
    border: 1px solid ${theme.colors.gray};
    border-radius: 2px;
    padding: 8px 10px 7px;
    width: 100%;
    justify-content: center;
    background-color: ${theme.colors.lighterGray};
    line-height: 1.25;
    box-shadow: ${theme.shadows.normalBox};
  `};

  &:hover,
  &.is-focused:not(:disabled) {
    color: ${({ theme }) => theme.colors.normalAccent};

    ${({ bordered, theme }) => bordered && `
      border-color: ${theme.colors.normalAccent};
      background-color: ${theme.colors.white};
    `};

    ${({ underline }) => underline && `
      background-color: inherit;
  `};
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`;
