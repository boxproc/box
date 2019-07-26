import { createGlobalStyle, css } from 'theme';

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.lightGrayColor};
    border: 1px solid white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.grayColor};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.lightGrayColor};
    -webkit-box-shadow: inset 0 0 5px ${({ theme }) => theme.lightGrayColor};
    border-radius: 8px;
  }
`;

export const ScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
