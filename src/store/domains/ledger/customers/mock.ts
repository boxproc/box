import { ICurrencyLimitItemData, ICustomersData } from './types';

export const customersMock: ICustomersData = {
  customers: [
    {
      id: 1,
      institution_id: 1,
      first_name: 'John',
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
      identification_type: 'N',
      identification_number: 1,
      limit_at_customer_level: false,
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
      identification_type: 'N',
      identification_number: 1,
      limit_at_customer_level: true,
    },
  ],
};

export const currencyLimitMock: ICurrencyLimitItemData = {
  currency_limit: [
    {
      base_currency: 840,
      currency_code: 'USD',
      currency_name: 'United States dollar',
      customer_limit: 100,
    },
  ],
};
