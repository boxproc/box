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
      limit_at_customer_level: false,
      supported_currencies: ['740', '826'],
    },
    {
      id: 2,
      institution_name: 'Customer Institution',
      status: 'A',
      sftp_location: '',
      sftp_public_key: '',
      master_institution_flag: 'N',
      limit_at_customer_level: true,
      supported_currencies: ['740', '533', '214'],
    },
  ],
};
