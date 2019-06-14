import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  breakpoints: Array<string>;

  normalAccentColor: string;
  lightAccentColor: string;

  blackColor: string;
  lightBlackColor: string;
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
  lightBlackColor: 'rgba(0, 0, 0, .9)',
  redColor: '	#FF0000',
  grayColor: '#BEBEBE',
  lightGrayColor: '#D0D0D0',
  whiteColor: '#ffffff',
};
