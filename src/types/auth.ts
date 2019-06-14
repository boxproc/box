import { Action } from 'redux';

import { Thunk, VoidThunk } from './common';

export type HandleLogin = VoidThunk;
export type HandleLogout = VoidThunk;
export type ClearAfterLogout = () => Thunk<void> | Action;
