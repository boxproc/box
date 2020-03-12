import { createGlobalStyle, css, theme } from './index';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${theme.colors.black};
    font-size: 14px;
    line-height: 1.35;
    overflow: auto;
  }

  input {
    background-clip: padding-box;
  }

  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  b {
    font-weight: 500;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.normal};
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  * :focus {
    outline: none;
  }

  ::-moz-selection {
    background-color: ${theme.colors.normalAccent};
    color: ${theme.colors.black};
  }

  ::selection {
    background-color: ${theme.colors.normalAccent};
    color: ${theme.colors.black};
  }
`;

export const highlightCss = css`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: inline-block;
    height: 1px;
    background-image:
      linear-gradient(to left,
        hsla(0,0%,0%,0) 0,
        ${theme.colors.lighterAccent} 50%,
        hsla(0,0%,0%,0) 100%
      );
  }
`;

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    border: 1px solid ${theme.colors.white};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 8px;
  }
`;

export const ScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
