import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  breakpoints: Array<string>;

  decorateFont: string;
  codeFont: string;

  normalAccentColor: string;
  lighterAccentColor: string;
  lightAccentColor: string;
  accentColorOpacity7: string;

  blackColor: string;
  blackColorOpacity7: string;

  redColor: string;

  grayColor: string;
  lightGrayColor: string;
  lighterGrayColor: string;
  darkGrayColor: string;

  greenColor: string;

  whiteColor: string;
  whiteOpacityColor: string;

  boxShadow: string;
  boxShadowBottom: string;
}

export const theme: Theme = {
  breakpoints: getBreakpointsRange(400, 1500),

  decorateFont: 'Raleway, sans-serif',
  codeFont: 'Roboto Mono, monospace',

  normalAccentColor: '#ffa400',
  lighterAccentColor: 'rgba(255, 164, 0, .9)',
  lightAccentColor: '#ffbf4d',
  accentColorOpacity7: 'rgba(255, 164, 0, .7)',

  blackColor: '#333333',
  blackColorOpacity7: 'rgba(0, 0, 0, .7)',

  redColor: '	#FF0000',

  grayColor: '#999999',
  lightGrayColor: '#e6e6e6',
  lighterGrayColor: '#f3f3f3',
  darkGrayColor: '#6c6c6c',

  greenColor: '#00CC00',

  whiteColor: '#ffffff',
  whiteOpacityColor: 'rgba(255, 255, 255, .8)',

  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
  boxShadowBottom: '0 3px 3px 0 rgba(0, 0, 0, .1)',
};
