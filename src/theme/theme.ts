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

  blackColor: string;
  blackColorOpacity5: string;
  blackColorOpacity6: string;
  blackColorOpacity7: string;
  blackColorOpacity8: string;

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
  codeFont: 'Inconsolata, monospace',

  normalAccentColor: '#ffa400',
  lighterAccentColor: 'rgba(255, 164, 0, .9)',
  lightAccentColor: '#ffbf4d',

  blackColor: '#000000',
  blackColorOpacity5: 'rgba(0, 0, 0, .5)',
  blackColorOpacity6: 'rgba(0, 0, 0, .6)',
  blackColorOpacity7: 'rgba(0, 0, 0, .7)',
  blackColorOpacity8: 'rgba(0, 0, 0, .8)',

  redColor: '	#FF0000',

  grayColor: '#999999',
  lightGrayColor: '#e6e6e6',
  lighterGrayColor: '#f3f3f3',
  darkGrayColor: '#4d4d4d',

  greenColor: '#00CC00',

  whiteColor: '#ffffff',
  whiteOpacityColor: 'rgba(255, 255, 255, .8)',

  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
  boxShadowBottom: '0 3px 3px 0 rgba(0, 0, 0, .1)',
};
