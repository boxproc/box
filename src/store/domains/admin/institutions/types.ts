
import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

export interface IInstitutionData {
  id: number;
  institution_name: string;
  limit_at_customer_level: boolean;
  master_institution_flag: string;
  sftp_location: string;
  sftp_public_key: string;
  status: string | number;
  supported_currencies: Array<string>;
}

export interface IInstitutionsData {
  institutions: Array<IInstitutionData>;
}

interface IInstitutionPlain {
  id: number;
  institutionName: string;
  masterInstitutionFlag: boolean;
  sftpLocation: string;
  sftpPublicKey: string;
  limitAtCustomerLevelFlag: boolean;
}

export interface IInstitution extends IInstitutionPlain {
  status: string;
}

export interface IInstitutionDetails extends IInstitutionPlain {
  status: ISelectValue;
  supportedCurrencies: Array<ISelectValue>;
}

/**
 * Institutions state interface
 */

export interface IInstitutionsState {
  institutions: ImmutableArray<IInstitutionData>;
}
