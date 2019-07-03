import { UserLoginData } from './types';

export const prepareLoginValues =
  (formData: UserLoginData): UserLoginData => {
    const { username, password_hash } = formData;

    return ({ username, password_hash });
  };
