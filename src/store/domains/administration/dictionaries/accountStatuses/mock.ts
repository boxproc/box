import { DictionaryAccountStatuses } from './types';

export const dictionaryAccountStatusesData: DictionaryAccountStatuses = {
  account_statuses: [
    {
      status: 'A',
      name: 'Active',
    },
    {
      status: 'I',
      name: 'Inactive',
    },
    {
      status: 'C',
      name: 'Closed',
    },
    {
      status: 'D',
      name: 'Deleted',
    },
    {
      status: 'B',
      name: 'Bankrupt',
    },
    {
      status: 'V',
      name: 'Interest prohibited, vulnerable customer',
    },
    {
      status: 'L',
      name: 'Lost',
    },
    {
      status: 'S',
      name: 'Stolen',
    },
    {
      status: 'R',
      name: 'Recency',
    },
    {
      status: 'O',
      name: 'Delinquency and Over-limit',
    },
    {
      status: 'Q',
      name: 'Delinquency',
    },
  ],
};
