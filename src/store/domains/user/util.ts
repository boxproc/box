import { UserLoginData } from './types';

export const prepareLoginValues =
  (formData: UserLoginData): UserLoginData => {
    const { userName, passwordHash } = formData;

    return ({ userName, passwordHash });
  };
