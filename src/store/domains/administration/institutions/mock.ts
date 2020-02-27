import { AdminInstitutionsItems } from './types';

import { ResponseStatusType } from 'types';

export const adminInstitutionsItems: AdminInstitutionsItems = {
  institutions: [
    {
      id: 1,
      institution_name: 'BOX Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
      master_institution_flag: 'Y',
    },
    {
      id: 2,
      institution_name: 'Customer Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
      master_institution_flag: 'N',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
