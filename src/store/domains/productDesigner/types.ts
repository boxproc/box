import { CyclesEditorState } from './cycles';
import { ProductsState } from './products';

export interface ProductDesignerState {
  cyclesEditor: CyclesEditorState;
  products: ProductsState;
}
