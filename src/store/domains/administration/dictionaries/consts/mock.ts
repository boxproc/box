import {
  DictionaryCardStatusesData,
  DictionaryEndpointTypesData,
  DictionaryInterfaceTypesData,
} from './types';

export const dictionaryCardStatusesData: DictionaryCardStatusesData = {
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

export const dictionaryEndpointTypesData: DictionaryEndpointTypesData = {
  endpoint_types: [
    { id: 1, name: 'BOX API' },
    { id: 2, name: 'Tutuka' },
    { id: 3, name: 'Tribe' },
    { id: 4, name: 'QRails' },
    { id: 5, name: 'GoCardless' },
  ],
};

export const dictionaryInterfaceTypesData: DictionaryInterfaceTypesData = {
  interface_types: [
    { id: 1, name: 'Reserved' },
    { id: 2, name: 'Tutuka' },
    { id: 3, name: 'Tribe' },
    { id: 4, name: 'QRails' },
    { id: 5, name: 'GoCardless' },
  ],
};
