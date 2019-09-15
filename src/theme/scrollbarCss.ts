import { createGlobalStyle, css } from 'theme';

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #e6e6e6;
    border: 1px solid white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffa400;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #e6e6e6;
    -webkit-box-shadow: inset 0 0 5px #e6e6e6;
    border-radius: 8px;
  }
  // scrollbar-width: thin;
  // scrollbar-color: #ffa400 #f3f3f3;
`;

export const ScrollDisable = createGlobalStyle`
  body {
  // .main-wrapper {
    overflow: hidden;
  }
`;
