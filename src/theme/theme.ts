import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  breakpoints: Array<string>;

  normalAccentColor: string;
  lightAccentColor: string;

  blackColor: string;

  redColor: string;

  grayColor: string;
  lightGrayColor: string;

  whiteColor: string;
}

export const theme: Theme = {
  breakpoints: getBreakpointsRange(400, 1500),

  normalAccentColor: '#ffa400',
  lightAccentColor: 'rgba(255, 164, 0, .9)',

  blackColor: '#000000',

  redColor: '	#FF0000',

  grayColor: '#999999',
  lightGrayColor: '#e6e6e6',

  whiteColor: '#ffffff',
};
