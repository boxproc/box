import { IStoreState } from 'store';

export const createLoadingSelector = (actions: Array<string>) => (state: IStoreState) =>
  actions.some(action => state.loader[action] === true);
