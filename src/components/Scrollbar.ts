import { createGlobalStyle, css } from 'theme';

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.darkGrayColor};
    border: 1px solid white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(38, 46, 62, 0.2);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    -webkit-box-shadow: inset 0 0 5px grey;
    border-radius: 8px;
  }
`;

export const ScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
