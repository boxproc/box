import { IInstitutionsData } from './types';

export const institutionsMock: IInstitutionsData = {
  institutions: [
    {
      id: 1,
      institution_name: 'BOX Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
      master_institution_flag: 'Y',
      base_currency: 740,
    },
    {
      id: 2,
      institution_name: 'Customer Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
      master_institution_flag: 'N',
      base_currency: 533,
    },
  ],
};
