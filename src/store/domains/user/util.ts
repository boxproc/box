import { UserLoginData } from './types';

export const prepareLoginValues =
  (formData: UserLoginData): UserLoginData => {
    const { userName, password } = formData;

    return ({ userName, password });
  };
