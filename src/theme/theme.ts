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
  whiteOpacityColor: string;

  boxShadow: string;
}

export const theme: Theme = {
  breakpoints: getBreakpointsRange(400, 1500),

  decorateFont: 'Raleway, sans-serif',

  normalAccentColor: '#ffa400',
  lighterAccentColor: 'rgba(255, 164, 0, .9)',
  lightAccentColor: '#ffbf4d',

  blackColor: '#000000',

  redColor: '	#FF0000',

  grayColor: '#999999',
  lightGrayColor: '#e6e6e6',
  // lighterGrayColor: '#eeeeee',
  lighterGrayColor: '#f3f3f3',
  darkGrayColor: '#4d4d4d',

  whiteColor: '#ffffff',
  whiteOpacityColor: 'rgba(255, 255, 255, .8)',

  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
};
