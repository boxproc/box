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

/**
 * Get dictionary account statuses API
 */
export const getDictionaryAccountStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryAccountStatusesMock, 500);
  apiClientService.post('ui/administration/dictionaries/account_statuses');

/**
 * Get dictionary card statuses API
 */
export const getDictionaryCardStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryCardStatusesMock, 500);
  apiClientService.post('ui/administration/dictionaries/card_statuses');

/**
 * Get dictionary endpoint types API
 */
export const getDictionaryEndpointTypes = () =>
  // throttleUtil.getDataAfter(dictionaryEndpointTypesMock, 500);
  apiClientService.post('ui/administration/endpoints/types');

/**
 * Get dictionary interface types API
 */
export const getDictionaryInterfaceTypes = () =>
  // throttleUtil.getDataAfter(dictionaryInterfaceTypesMock, 500);
  apiClientService.post('ui/administration/interfaces/types');

/**
 * Get dictionary statements cycles types API
 */
export const getDictionaryStatementCycleTypes = () =>
  apiClientService.post('ui/ledger/statements/get_statement_cycle_types');

/**
 * Get dictionary repayment types API
 */
export const getDictionaryRepaymentTypes = () =>
  throttleUtil.getDataAfter(dictionaryRepaymentTypesMock, 500);
// apiClient.post('ui/administration/dictionaries/repayment_types');

/**
 * Get dictionary transaction types API
 */
export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesMock, 500);
  apiClientService.post('ui/administration/dictionaries/transaction_types');

/**
 * Get dictionary countries API
 */
export const getDictionaryCountries = () =>
  // throttleUtil.getDataAfter(dictionaryCountriesMock, 500);
  apiClientService.post('ui/administration/dictionaries/countries');

/**
 * Get dictionary currencies API
 */
export const getDictionaryCurrencies = () =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesMock, 500);
  apiClientService.post('ui/administration/dictionaries/currencies');

/**
 * Get convertible institution currencies API
 */
export const getConvertibleInstCurrencies = (instId: number) =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesMock, 500);
  apiClientService.post('/ui/product_designer/products/get_currencies', {
    data: { institution_id: instId },
  });

/**
 * Get dictionary event data elements API
 */
export const filterDictionaryEventDataElems = (data: IDictionaryEventDataElemsFilterToSend) =>
  apiClientService.post('ui/administration/dictionaries/event_data_elements', { data });

/**
 * Get dictionary events API
 */
export const getDictionaryEvents = () =>
  // throttleUtil.getDataAfter(dictionaryEventsMock, 500);
  apiClientService.post('ui/administration/dictionaries/events');
