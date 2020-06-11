import {
  ICurrencyLimitItemData,
  ICustomersData,
  IDirectDebitAccountMandatesData,
  IDirectDebitMandatesData,
} from './types';

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
    },
  ],
};

export const directDebitMandatesMock: IDirectDebitMandatesData = {
  direct_debit_mandates: [
    {
      id: 1,
      customer_id: 5754,
      interface_name: 'GoCardless',
      description: null,
      status: 'Active',
      country_code: 'GB',
      currency_code: 'GBP',
      account_alias: '1234',
      last_update_timestamp: '1/06/2020 09:13:00',
      scheme: 'bacs',
      bank_name: 'Lloyds TSB Bank',
      accountholder_name: 'John Doe',
    },
    {
      id: 2,
      customer_id: 5754,
      interface_name: 'GoCardless',
      description: null,
      status: 'Pending',
      country_code: 'GB',
      currency_code: 'GBP',
      account_alias: '9038',
      last_update_timestamp: '25/05/2020 10:54:00',
      scheme: 'bacs',
      bank_name: 'Bank of England',
      accountholder_name: 'John Doe',
    },
  ],
};

export const directDebitAccountMandatesMock: IDirectDebitAccountMandatesData = {
  direct_debit_mandates: [
    {
      id: 2,
      interface_name: 'GoCardless',
      status: 'Active',
      account_alias: '1235',
      bank_name: 'Bank of Scotland',
    },
    {
      id: 1,
      interface_name: 'GoCardless',
      status: 'Active',
      account_alias: '1234',
      bank_name: 'Lloyds TSB Bank',
    },
    {
      id: 3,
      interface_name: 'GoCardless',
      status: 'Active',
      account_alias: '4526',
      bank_name: 'Santander Bank',
    },
  ],
};

export const cancelDirectDebitMandateMock: { status: string } = {
  status: 'Inactive',
};

export const reinstateDirectDebitMandateMock: { status: string } = {
  status: 'Active',
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
