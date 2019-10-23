import { LedgerCustomerItems } from './types';

import { ResponseStatusType } from 'types';

export const ledgerCustomersFilteredItems: LedgerCustomerItems = {
  customers: [
    {
      id: 1,
      institution_id: 1,
      first_name: 'John Filtered',
      last_name: 'Jones',
      status: 'A',
      date_of_birth: '2019-07-29',
      email: 'test@boxproc.com',
      mobile_phone_number: '+4477712312345',
      address_line1: 'The Holy House',
      address_line2: '1 High street',
      address_line3: 'Essex',
      address_line4: '',
      address_town: 'Bury',
      address_post_code: 'DD99 99DD',
      address_country_code: 'GBR',
      nationality_country_code: 'GBR',
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
    },
    {
      id: 2,
      institution_id: 1,
      first_name: 'Jane',
      last_name: 'Jones',
      status: 'A',
      date_of_birth: '2019-07-29',
      email: 'test@boxproc.com',
      mobile_phone_number: '+4477712312345',
      address_line1: 'The Holy House',
      address_line2: '1 High street',
      address_line3: 'Essex',
      address_line4: '',
      address_town: 'Bury',
      address_post_code: 'DD99 99DD',
      address_country_code: 'GBR',
      nationality_country_code: 'GBR',
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
