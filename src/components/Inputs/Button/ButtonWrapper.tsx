import styled, { css } from 'theme';

interface IButtonWrapper {
  hasIcon?: boolean;
  size?: string;
  width?: string;
}

const borderStyles = css`
  padding: 7px 10px 5px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lighterGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 2px;

  &:hover:not(:disabled),
  &.is-focused:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.lighterGrayHover};
    box-shadow: ${({ theme }) => theme.shadows.bottomBox};
  }

  &:disabled {
    background-color: transparent;
  }
`;

export const ButtonWrapper = styled.button<IButtonWrapper>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: 0;
  width: ${({ width }) => width || 'auto'};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ size }) => size ? `${size}px` : '13px'};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .2pt;
  line-height: 1.3;
  outline: 0;
  user-select: none;
  cursor: pointer;
  transition: all .1s linear;

  &:hover:not(:disabled),
  &.is-focused:not(:disabled) {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  .text-wrapper {
    position: relative;
    z-index: 1;
  }

  ${({ hasIcon }) => !hasIcon && borderStyles};

  &.is-bordered {
    ${borderStyles}
  }

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

  &.no-text-transform {
    text-transform: none;
    font-weight: normal;
  }

  &:disabled {
    cursor: default;

    .text-wrapper,
    .icon {
      opacity: .5;
    }
  }
`;
