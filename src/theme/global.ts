import { createGlobalStyle } from './index';

export const GlobalStyles = createGlobalStyle`
  body {
    color: #333333;
    font-size: 14px;
    line-height: 1.35;
    overflow: hidden;
  }

  ::-moz-selection {
    background-color: #ffa400;
    color: #333333;
  }

  ::selection {
    background-color: #ffa400;
    color: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;

    box-sizing: border-box;
  }

  input {
    background-clip: padding-box;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  * :focus {
    outline: none;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  b {
    font-weight: 500;
  }
`;
