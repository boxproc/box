import { Action } from 'redux';

import { Thunk, VoidThunk } from './common';

export type HandleUserLogout = VoidThunk;
export type ClearAfterLogout = () => Thunk<void> | Action;
