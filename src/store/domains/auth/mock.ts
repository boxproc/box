import { AuthResponse, AuthStepTwoResponse } from './types';

import { ResponseStatusType } from 'types';

export const authResponseStepOneData: { status: string } = {
  status: 'A',
};

export const authResponseFullData: AuthResponse = {
  session_id: '123',
  first_name: 'John',
  last_name: 'Doe',
  username: 'admin',
  last_activity: '01/09/2019 13:27:38',
  status: 'A',
  requires_2fa_flag: 'N',
};

export const authSecretKeyData: AuthStepTwoResponse = {
  two_factor_authentication: {
    secret_key: 'dapdwjiEfreo2804FdlpsP9el2flsdpw',
    // tslint:disable-next-line: max-line-length
    data_url: 'data:image/png;base64,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',
  },
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
