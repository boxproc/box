import { apiClientService } from 'services';

// import {
//   dictionaryAccountStatusesMock,
//   dictionaryCardStatusesMock,
//   dictionaryCountriesMock,
//   dictionaryCurrenciesMock,
//   dictionaryEndpointTypesMock,
//   dictionaryEventsMock,
//   dictionaryInterfaceTypesMock,
//   dictionaryRepaymentTypesMock,
//   dictionaryTransactionTypesMock,
// } from './mock';
import { dictionaryRepaymentTypesMock } from './mock';
import { IDictionaryEventDataElemsFilterToSend } from './types';

import { throttleUtil } from 'utils';

export const getDictionaryAccountStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryAccountStatusesMock, 500);
  apiClientService.post('ui/administration/dictionaries/account_statuses');

export const getDictionaryCardStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryCardStatusesMock, 500);
  apiClientService.post('ui/administration/dictionaries/card_statuses');

export const getDictionaryEndpointTypes = () =>
  // throttleUtil.getDataAfter(dictionaryEndpointTypesMock, 500);
  apiClientService.post('ui/administration/endpoints/types');

export const getDictionaryInterfaceTypes = () =>
  // throttleUtil.getDataAfter(dictionaryInterfaceTypesMock, 500);
  apiClientService.post('ui/administration/interfaces/types');

export const getDictionaryStatementCycleTypes = () =>
  apiClientService.post('ui/ledger/statements/get_statement_cycle_types');

export const getDictionaryRepaymentTypes = () =>
  throttleUtil.getDataAfter(dictionaryRepaymentTypesMock, 500);
// apiClient.post('ui/administration/dictionaries/repayment_types');

export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesMock, 500);
  apiClientService.post('ui/administration/dictionaries/transaction_types');

export const getDictionaryCountries = () =>
  // throttleUtil.getDataAfter(dictionaryCountriesMock, 500);
  apiClientService.post('ui/administration/dictionaries/countries');

export const getDictionaryCurrencies = () =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesMock, 500);
  apiClientService.post('ui/administration/dictionaries/currencies');

export const filterDictionaryEventDataElems = (data: IDictionaryEventDataElemsFilterToSend) =>
  apiClientService.post('ui/administration/dictionaries/event_data_elements', { data });

export const getDictionaryEvents = () =>
  // throttleUtil.getDataAfter(dictionaryEventsMock, 500);
  apiClientService.post('ui/administration/dictionaries/events');
