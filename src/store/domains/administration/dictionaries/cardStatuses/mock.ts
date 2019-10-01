import { DictionaryCardStatusesData } from './types';

export const dictionaryCardStatusesData: DictionaryCardStatusesData = {
  response_status: {
    status_code: 0,
  },
  card_statuses: [
    { id: 0, name: 'Unspecified' },
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' },
    { id: 3, name: 'Card lost' },
    { id: 4, name: 'Card stolen' },
    { id: 5, name: 'PIN tries exceeded' },
    { id: 6, name: 'Suspected fraud' },
    { id: 7, name: 'Card replaced' },
  ],
};
