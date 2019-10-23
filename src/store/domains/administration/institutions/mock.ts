import { AdminInstitutionsItems } from './types';

import { ResponseStatusType } from 'types';

export const adminInstitutionsItems: AdminInstitutionsItems = {
  institutions: [
    {
      id: 1,
      name: 'BOX Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
    },
    {
      id: 2,
      name: 'Customer Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
