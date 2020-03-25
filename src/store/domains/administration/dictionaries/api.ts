import { apiClientService } from 'services';

// import {
//   dictionaryAccountStatusesData,
//   dictionaryCardStatusesData,
//   dictionaryCountriesData,
//   dictionaryCurrenciesData,
//   dictionaryEndpointTypesData,
//   dictionaryEventsData,
//   dictionaryInterfaceTypesData,
//   dictionaryRepaymentTypesData,
//   dictionaryTransactionTypesData,
// } from './mock';
import { dictionaryRepaymentTypesData } from './mock';
import { IDictionaryEventDataElemsFilterPrepared } from './types';

import { throttleUtil } from 'utils';

export const getDictionaryAccountStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryAccountStatusesData, 500);
  apiClientService.post('ui/administration/dictionaries/account_statuses');

export const getDictionaryCardStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryCardStatusesData, 500);
  apiClientService.post('ui/administration/dictionaries/card_statuses');

export const getDictionaryEndpointTypes = () =>
  // throttleUtil.getDataAfter(dictionaryEndpointTypesData, 500);
  apiClientService.post('ui/administration/endpoints/types');

export const getDictionaryInterfaceTypes = () =>
  // throttleUtil.getDataAfter(dictionaryInterfaceTypesData, 500);
  apiClientService.post('ui/administration/interfaces/types');

export const getDictionaryStatementCycleTypes = () =>
  apiClientService.post('ui/ledger/statements/get_statement_cycle_types');

export const getDictionaryRepaymentTypes = () =>
  throttleUtil.getDataAfter(dictionaryRepaymentTypesData, 500);
// apiClient.post('ui/administration/dictionaries/repayment_types');

export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesData, 500);
  apiClientService.post('ui/administration/dictionaries/transaction_types');

export const getDictionaryCountries = () =>
  // throttleUtil.getDataAfter(dictionaryCountriesData, 500);
  apiClientService.post('ui/administration/dictionaries/countries');

export const getDictionaryCurrencies = () =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesData, 500);
  apiClientService.post('ui/administration/dictionaries/currencies');

export const filterDictionaryEventDataElems = (data: IDictionaryEventDataElemsFilterPrepared) =>
  apiClientService.post('ui/administration/dictionaries/event_data_elements', { data });

export const getDictionaryEvents = () =>
  // throttleUtil.getDataAfter(dictionaryEventsData, 500);
  apiClientService.post('ui/administration/dictionaries/events');
