import { AdminInstitutionsItems } from './types';

import { ResponseStatusType } from 'types';

export const adminInstitutionsItems: AdminInstitutionsItems = {
  response_status: {
    status_code: 0,
  },
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

export const SuccessResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
