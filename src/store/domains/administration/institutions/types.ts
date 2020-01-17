
import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair, SelectValue } from 'types';

export interface AdminInstitutionsInfoPlain extends IdNamePair {}

export interface AdminInstitutionsItem extends AdminInstitutionsInfoPlain {
  sftp_location: string;
  sftp_public_key: string;
  status: string | number;
  master_institution_flag: string;
}

export interface AdminInstitutionsItems {
  institutions: Array<AdminInstitutionsItem>;
}

export interface AdminInstitutionsItemPreparedPlain extends AdminInstitutionsInfoPlain {
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
