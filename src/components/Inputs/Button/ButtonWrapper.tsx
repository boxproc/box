import styled from 'theme';

interface ButtonWrapperProps {
  classNames?: Array<string>;
  hasIcon?: boolean;
  size?: string;
  width?: string;
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
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ theme }) => theme.colors.lighterGray};
  font-size: ${({ size }) => size ? `${size}px` : '13px'};
  text-transform: uppercase;
  letter-spacing: .2pt;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  line-height: 1.3;
  user-select: none;
  transition: all .1s linear;

  .text-wrapper {
    position: relative;
    z-index: 1;
  }

  &:hover:not(:disabled),
  &.is-focused:not(:disabled) {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  &.no-text-transform {
    text-transform: none;
    font-weight: normal;
  }

  ${({ hasIcon }) => hasIcon && `
    background-color: transparent;
  `}

  ${({ hasIcon, theme }) => !hasIcon && `
    padding: 7px 10px 5px;
    border-radius: 2px;
    border: 1px solid ${theme.colors.lightGray};

    &.is-focused:not(:disabled) {
      background-color: ${theme.colors.lighterGray};
      box-shadow: ${theme.shadows.bottomBox};
    }

    &:hover:not(:disabled),
    &.is-focused:not(:disabled):hover {
      background-color: ${theme.colors.lighterGrayHover};
      box-shadow: ${theme.shadows.bottomBox};
    }

    &:disabled {
      background-color: transparent;
    }
  `}

  &.is-tabs {
    background-color: transparent;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border: 0;
    border-bottom: 1px solid transparent;

    &.is-focused:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.lighterGrayHover};
      box-shadow: none;
      border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
      pointer-events: none;
    }

    &:hover:not(:disabled),
    &.is-focused:not(:disabled):hover {
      background-color: transparent;
      box-shadow: none;
    }
  }

  &.is-bordered {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 2px;
    padding: 7px 10px 5px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    line-height: 1.25;

    &:hover:not(:disabled),
    &.is-focused:not(:disabled) {
      box-shadow: ${({ theme }) => theme.shadows.normalBox};
    }
  }

  &.is-animated {
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: ${({ theme }) => theme.colors.lightGray};
      opacity: 0;
      border-radius: 50%;
      transform: scale(1, 1) translate(-50%);
      transform-origin: 50% 50%;
    }

    &:focus:not(:active):after {
      animation: ripple .5s ease-out;
    }
  }

  &:disabled {
    border-color: transparent;
    cursor: default;

    .text-wrapper,
    .icon {
      opacity: .5;
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(15, 15);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(30, 30);
    }
  }
`;
