import { css } from 'theme';

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
      linear-gradient(to left, hsla(0,0%,0%,0) 0,
      ${({ theme }) => theme.lighterAccentColor} 50%,
      hsla(0,0%,0%,0) 100%);
  }
`;
