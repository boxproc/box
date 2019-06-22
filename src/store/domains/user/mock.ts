import { LoginResponse, UserInfo } from './types';

export const Login: LoginResponse = {
  sessionId: 'sessionId',
  resultCode: 0,
  errorDescription: '',
};

export const User: UserInfo = {
  id: 1,
  userName: 'John.Doe',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com',
};
