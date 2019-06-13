import { css } from 'styled-components';

export const sizes = {
  desktop4K: 2560,
  desktopL: 1440,
  desktopM: 1160,
  desktop: 1024,
  tablet: 769,
  tabletS: 550,
  phone: 426,
  phoneS: 320,
};

export const getBreakpointsRange = (start: number, end: number) =>
  Object.values(sizes)
    .filter(el => el >= start && el <= end)
    .sort((a, b) => a - b)
    .map(el => (el / 16).toFixed(1) + 'em');

type Media = Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: object[]) => string>;

export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (...args: [TemplateStringsArray, string]) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css.apply(null, args)}
      }
    `;

    return acc;
  },
  {} as Media
);
