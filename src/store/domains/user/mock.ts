import { LoginResponse, UserInfo } from './types';

export const Login: LoginResponse = {
  sessionId: 'sessionId123abc',
  resultCode: 0,
  errorDescription: '',
};

export const User: UserInfo = {
  id: 1,
  userName: 'John',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com',
};
