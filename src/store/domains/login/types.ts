import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

/** Auth interfaces */

export interface IAuthPassword {
  loginPassword?: string;
}

export interface IAuthCode {
  code?: string;
}

export interface IAuthUsername {
  username?: ISelectValue;
}

export interface IAuthUserId {
  id: number | string;
}

export interface IAuthConfirm {
  confirm: string;
}

export interface IAuthStepTwoData {
  data_url: string;
  secret_key: string;
}

export interface IAuthStepTwoResp {
  two_factor_authentication: IAuthStepTwoData;
}

/** Auth request interfaces */

export interface IAuthReq extends IAuthPassword {
  loginUsername?: string;
  rememberMe?: boolean;
}

export interface IAuthReqToSend {
  username: string;
  password: string;
  remember_me: boolean;
}

export interface IAuthResp {
  session_id: string;
  first_name: string;
  last_name: string;
  username: string;
  last_activity: string;
  status: string;
  requires_2fa_flag: string;
  master_institution_flag: string;
  change_profile_allowed_flag: string;
}

export interface IAuthUserData {
  sessionId: string;
  firstName: string;
  lastName: string;
  username: string;
  lastActivity: string;
  status: string;
  requires2faFlag: string;
  masterInstitutionFlag: string;
  changeProfileAllowedFlag: string;
}

/** Change password interfaces */

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
  code: string;
}

export interface IChangePasswordToSend {
  current_password: string;
  new_password: string;
  code: string;
}

/** User institutions interfaces */

export interface IUserInstitutionData {
  id: number;
  institution_name: string;
  master_institution_flag: string;
  status: string;
}

export interface IUserInstitutionsData {
  institutions: Array<IUserInstitutionData>;
}

export interface IUserInstitution {
  id: number;
  institutionName: string;
  masterInstitutionFlag: boolean;
}

/** Login state interface */
export interface ILoginState {
  currentRegisterStep: number;
  data2fa: IAuthStepTwoData;
  institutions: ImmutableArray<IUserInstitutionData>;
  loginData: IAuthResp;
}
