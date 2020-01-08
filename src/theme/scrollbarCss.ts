import { createGlobalStyle, css } from 'theme';

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #999999;
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
