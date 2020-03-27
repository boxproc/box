import { IInstitutionsData } from './types';

import { IResponseStatus } from 'types';

export const institutionsMock: IInstitutionsData = {
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

export const successResponseMock: IResponseStatus = {
  response_status: {
    status_code: '00',
  },
};
