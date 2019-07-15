import { createGlobalStyle, css } from 'theme';

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
    border-radius: 8px;
  }
`;

export const ScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
