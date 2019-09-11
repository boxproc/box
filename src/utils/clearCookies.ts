import { cookiesNames } from 'consts';

import { cookiesUtil } from 'utils';

export const clear = () => {
  cookiesUtil.remove(cookiesNames.SESSION_ID);
  cookiesUtil.remove(cookiesNames.AUTH_PENDING);
  cookiesUtil.remove(cookiesNames.AUTH_REGISTRATION_PENDING);
  cookiesUtil.remove(cookiesNames.FULL_NAME);
};
