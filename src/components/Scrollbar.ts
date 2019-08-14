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

  scrollbar-color: #ffa400 #e6e6e6;
  scrollbar-width: thin;
  // scrollbar-highlight-color: #ffa400;
  // scrollbar-shadow-color: #ffa400;
  // scrollbar-3Dlight-color: #ffa400;
  // scrollbar-arrow-color: #ffa400;
  // scrollbar-track-color: #e6e6e6;
  // scrollbar-darkshadow-color: #ffa400;
`;

export const ScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
