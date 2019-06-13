import { StoreState } from 'store/StoreState';

export const createLoadingSelector = (actions: Array<string>) => (state: StoreState) =>
  actions.some(action => state.loader[action] === true);
