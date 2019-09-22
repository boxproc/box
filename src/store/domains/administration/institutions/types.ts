
import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

export interface AdminInstitutionsInfoPlain {
  id: number;
  name: string;
}

export interface AdminInstitutionsItem extends AdminInstitutionsInfoPlain {
  sftp_location: string;
  sftp_public_key: string;
  status: string | number;
}

export interface AdminInstitutionsItems extends ResponseStatusType {
  institutions: Array<AdminInstitutionsItem>;
}

export interface AdminInstitutionsItemPreparedPlain extends AdminInstitutionsInfoPlain {
  sftpLocation: string;
  sftpPublicKey: string;
}

export interface AdminInstitutionsItemPrepared extends AdminInstitutionsItemPreparedPlain {
  status: string | number;
}

export interface AdminInstitutionsItemDetailsPrepared extends AdminInstitutionsItemPreparedPlain {
  status: SelectValues;
}

export interface AdminInstitutionsState {
  institutions: ImmutableArray<AdminInstitutionsItem>;
}
