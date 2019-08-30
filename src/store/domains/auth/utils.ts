import { AuthRequest, PreparedAuthRequest } from './types';

export const prepareAuthValues =
  (formData: AuthRequest): PreparedAuthRequest => {
    const { userName, password, rememberMe } = formData;

    return ({
      username: userName,
      password,
      remember_me: rememberMe,
    });
  };
