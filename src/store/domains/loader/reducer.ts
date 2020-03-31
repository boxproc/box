import { Action } from 'redux';

export interface ILoaderState {
  [key: string]: boolean;
}

const loadingReducer = (state: ILoaderState = {}, action: Action) => {
  const { type } = action;
  const matches = /(.*)_(PENDING|FULFILLED|REJECTED)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'PENDING',
  };
};

export default loadingReducer;
