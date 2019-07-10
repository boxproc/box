import { AuthRequest, PreparedAuthRequest } from './types';

export const prepareAuthValues =
  (formData: AuthRequest): PreparedAuthRequest => {
    const { userName, password } = formData;

    return ({
      username: userName,
      password_hash: password,
    });
  };
