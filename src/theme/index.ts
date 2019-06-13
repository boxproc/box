import * as styledComponents from 'styled-components';

import Theme, { theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, theme };
export default styled;
