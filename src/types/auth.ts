import { Action } from 'redux';

import { Thunk } from './common';

export type ClearAfterLogout = () => Thunk<void> | Action;
