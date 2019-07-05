import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  breakpoints: Array<string>;
  decorateFont: string;

  normalAccentColor: string;
  lighterAccentColor: string;
  lightAccentColor: string;

  blackColor: string;

  redColor: string;

  grayColor: string;
  lightGrayColor: string;
  lighterGrayColor: string;
  darkGrayColor: string;

  whiteColor: string;

  boxShadow: string;
}

export const theme: Theme = {
  breakpoints: getBreakpointsRange(400, 1500),

  decorateFont: 'Raleway, sans-serif',

  normalAccentColor: '#ffa400',
  lighterAccentColor: 'rgba(255, 164, 0, .9)',
  lightAccentColor: 'rgba(255, 164, 0, .7)',

  blackColor: '#000000',

  redColor: '	#FF0000',

  grayColor: '#999999',
  lightGrayColor: '#e6e6e6',
  lighterGrayColor: 'rgba(230, 230, 230, 0.7)',
  darkGrayColor: '#4d4d4d',

  whiteColor: '#ffffff',

  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
};
