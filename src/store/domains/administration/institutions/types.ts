
import { ImmutableArray } from 'seamless-immutable';

import { SelectValue } from 'types';

export interface AdminInstitutionsItem {
  id: number;
  institution_name: string;
  sftp_location: string;
  sftp_public_key: string;
  status: string | number;
  master_institution_flag: string;
}

export interface AdminInstitutionsItems {
  institutions: Array<AdminInstitutionsItem>;
}

export interface AdminInstitutionsItemPreparedPlain {
  id: number;
  institutionName: string;
  sftpLocation: string;
  sftpPublicKey: string;
  masterInstitutionFlag: boolean;
}

export interface AdminInstitutionsItemPrepared extends AdminInstitutionsItemPreparedPlain {
  status: string | number;
}

export interface AdminInstitutionsItemDetailsPrepared extends AdminInstitutionsItemPreparedPlain {
  status: SelectValue;
}

export interface AdminInstitutionsState {
  institutions: ImmutableArray<AdminInstitutionsItem>;
}
