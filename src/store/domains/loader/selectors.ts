import { StoreState } from 'store';

export const createLoadingSelector = (actions: Array<string>) => (state: StoreState) =>
  actions.some(action => state.loader[action] === true);
