import { createSelector } from 'reselect';

import { selectDefaultCurrentProduct } from '../products';
import { prepareProductGLToRender } from './utils';

export const selectProductGL = createSelector(
  selectDefaultCurrentProduct,
  current => prepareProductGLToRender(current)
);
