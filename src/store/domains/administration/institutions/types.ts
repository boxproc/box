
import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

export interface IInstitutionData {
  id: number;
  institution_name: string;
  master_institution_flag: string;
  sftp_location: string;
  sftp_public_key: string;
  status: string | number;
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
}

export interface IInstitution extends IInstitutionPlain {
  status: string | number;
}

export interface IInstitutionDetails extends IInstitutionPlain {
  status: ISelectValue;
}

/**
 * Institutions state interface
 */

export interface IInstitutionsState {
  institutions: ImmutableArray<IInstitutionData>;
}
