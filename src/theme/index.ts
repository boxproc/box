import * as styledComponents from 'styled-components';

import { theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents;

export { css, createGlobalStyle, keyframes, ThemeProvider, theme };

export default styled;
