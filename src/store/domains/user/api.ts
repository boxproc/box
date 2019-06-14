import { User } from './mock';

import { throttleUtil } from 'utils';

export const getUserInfo = () =>
  throttleUtil.getDataAfter(User, 300);

export const logOut = () =>
  throttleUtil.getDataAfter({ message: 'success' }, 300);
