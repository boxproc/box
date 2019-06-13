import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  breakpoints: Array<string>;

  blackColor: string;
}

export const theme: Theme = {
  breakpoints: getBreakpointsRange(400, 1500),

  blackColor: '#000000',
};
