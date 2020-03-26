import { createSelector } from 'reselect';

import {
  dataTypesOptions,
  debitCreditIndicatorConst,
  debitCreditIndicatorIds,
  debitCreditIndicatorOptions,
} from 'consts';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { valueLabelParse } from './utils';

import { stringsUtil } from 'utils';

/**
 * Account statuses selectors
 */

export const selectDefaultDictionaryAccountStatuses = (state: StoreState) =>
  state.administration.dictionaries.accountStatuses;

export const selectDictionaryAccountStatusesOptions = createSelector(
  selectDefaultDictionaryAccountStatuses,
  data => data && data.asMutable().map(el => {
    if (!el) {
      return null;
    }

    const { status, name } = el;

    return {
      value: status,
      label: name,
    };
  })
);

export const selectIsAccountStatusesLoaded = createSelector(
  selectDefaultDictionaryAccountStatuses,
  data => data && data.length > 0
);

/**
 * Card statuses selectors
 */

export const selectDefaultDictionaryCardStatuses = (state: StoreState) =>
  state.administration.dictionaries.cardStatuses;

export const selectCardStatusesOptions = createSelector(
  selectDefaultDictionaryCardStatuses,
  data => data && valueLabelParse(data)
);

export const selectIsCardStatusesLoaded = createSelector(
  selectDefaultDictionaryCardStatuses,
  data => data && data.length > 0
);

/**
 * Endpoint types selectors
 */

export const selectDefaultDictionaryEndpointTypes = (state: StoreState) =>
  state.administration.dictionaries.endpointTypes;

export const selectEndpointTypesOptions = createSelector(
  selectDefaultDictionaryEndpointTypes,
  data => data && valueLabelParse(data)
);

export const selectIsEndpointTypesLoaded = createSelector(
  selectDefaultDictionaryEndpointTypes,
  data => data && data.length > 0
);

export const isLoadingEndpointsTypesSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES,
]);

/**
 * Interface types selectors
 */

export const selectDefaultDictionaryInterfaceTypes = (state: StoreState) =>
  state.administration.dictionaries.interfaceTypes;

export const selectInterfaceTypesOptions = createSelector(
  selectDefaultDictionaryInterfaceTypes,
  data => data && valueLabelParse(data)
);

export const selectIsInterfaceTypesLoaded = createSelector(
  selectDefaultDictionaryInterfaceTypes,
  data => data && data.length > 0
);

/**
 * Statement cycle types selectors
 */

export const selectDefaultDictionaryStatementCycleTypes = (state: StoreState) =>
  state.administration.dictionaries.statementCycleTypes;

export const selectStatementCycleTypesOptions = createSelector(
  selectDefaultDictionaryStatementCycleTypes,
  data => data && valueLabelParse(data)
);

export const selectIsStatementCycleTypesLoaded = createSelector(
  selectDefaultDictionaryStatementCycleTypes,
  data => data && data.length > 0
);

/**
 * Repayment types selectors
 */

export const selectDefaultDictionaryRepaymentTypes = (state: StoreState) =>
  state.administration.dictionaries.repaymentTypes;

export const selectDictionaryRepaymentTypesOptions = createSelector(
  selectDefaultDictionaryRepaymentTypes,
  data => data && data.asMutable().map(el => {
    if (!el) {
      return null;
    }

    const { type, description } = el;

    return {
      value: type,
      label: description,
    };
  })
);

export const selectIsRepaymentTypesLoaded = createSelector(
  selectDefaultDictionaryRepaymentTypes,
  data => data && data.length > 0
);

/**
 * Transaction types selectors
 */

export const selectDefaultDictionaryTransTypes = (state: StoreState) =>
  state.administration.dictionaries.transactionTypes;

export const selectDictionaryTransTypes = createSelector(
  selectDefaultDictionaryTransTypes,
  data => data && data.map(el => {
    if (!el) {
      return null;
    }

    const { description, id, debit_credit_indicator } = el;
    const DCInd = debitCreditIndicatorOptions
      .find(option => option.value === debit_credit_indicator);

    return {
      debitCreditIndicator: DCInd && DCInd.label,
      debitCreditIndicatorValue: DCInd && DCInd.value,
      description,
      id,
    };
  })
);

export const selectDictionaryTransTypesOptions = createSelector(
  selectDictionaryTransTypes,
  data => data && data.asMutable().map(el => {
    if (!el) {
      return null;
    }

    const { id, debitCreditIndicator, description } = el;

    return {
      value: id,
      label: `${debitCreditIndicator} - ${description}`,
    };
  })
);

export const selectDictionaryManualTrTypesOptions = createSelector(
  selectDictionaryTransTypes,
  data => {
    const types = data
      .filter(el => el.debitCreditIndicatorValue === debitCreditIndicatorConst.DEBIT
        || el.debitCreditIndicatorValue === debitCreditIndicatorConst.CREDIT);

    return types && types.asMutable().map(type => {
      if (!type) {
        return null;
      }

      const { id, description, debitCreditIndicator } = type;

      return {
        value: id,
        label: `${description} - [${debitCreditIndicator}]`,
      };
    });
  }
);

export const selectDictionaryLimitAdjTypesOptions = createSelector(
  selectDictionaryTransTypes,
  data => {
    const limitAdjType = data.find(el => el.id === debitCreditIndicatorIds.LIMIT_ADJUSTMENT);

    return limitAdjType && [limitAdjType].map(type => {
      if (!type) {
        return null;
      }

      const { id, description, debitCreditIndicator } = type;

      return {
        value: id,
        label: `${description} - [${debitCreditIndicator}]`,
      };
    });
  });

export const selectIsTransTypesLoaded = createSelector(
  selectDefaultDictionaryTransTypes,
  data => data && data.length > 0
);

export const selectTransTypesForRules = createSelector(
  selectDefaultDictionaryTransTypes,
  data => data && data.map(el => {
    if (!el) {
      return null;
    }

    const { description, id } = el;

    return { description, name: id };
  })
);

export const selectIsTransTypesLoading = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES,
]);

/**
 * Countries selectors
 */

export const selectDefaultDictionaryCountries = (state: StoreState) =>
  state.administration.dictionaries.countries;

export const selectDictionaryCountries = createSelector(
  selectDefaultDictionaryCountries,
  data => data && data.map(el => {
    if (!el) {
      return null;
    }

    const { alpha2_code, country_code, name, numeric_code } = el;

    return {
      alpha2Code: alpha2_code,
      countryCode: country_code,
      name,
      numericCode: stringsUtil.padStartN(numeric_code, 3),
    };
  })
);

export const selectCountriesOptions = createSelector(
  selectDefaultDictionaryCountries,
  data => data && data.asMutable().map(el => {
    const { country_code, name } = el;

    return {
      value: country_code,
      label: `${country_code} - ${name}`,
    };
  })
);

export const selectIsCountriesLoaded = createSelector(
  selectDefaultDictionaryCountries,
  data => data && data.length > 0
);

export const selectIsCountriesLoading = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_COUNTRIES,
]);

/**
 * Currencies selectors
 */

export const selectDefaultDictionaryCurrencies = (state: StoreState) =>
  state.administration.dictionaries.currencies;

export const selectDictionaryCurrencies = createSelector(
  selectDefaultDictionaryCurrencies,
  data => data && data.map(el => {
    if (!el) {
      return null;
    }

    const { currency_code, name, numeric_code } = el;

    return {
      currencyCode: currency_code,
      name,
      numericCode: stringsUtil.padStartN(numeric_code, 3),
    };
  })
);

export const selectCurrenciesOptions = createSelector(
  selectDefaultDictionaryCurrencies,
  data => data && data.asMutable().map(el => {
    if (!el) {
      return null;
    }

    const { currency_code, name } = el;

    return {
      value: currency_code,
      label: `${currency_code} - ${name}`,
    };
  })
);

export const selectCurrencyNumsOptions = createSelector(
  selectDefaultDictionaryCurrencies,
  data => data && data.asMutable().map(el => {
    if (!el) {
      return null;
    }

    const { currency_code, name, numeric_code } = el;

    return {
      value: numeric_code,
      label: `${currency_code} - ${name}`,
    };
  })
);

export const selectIsCurrenciesLoaded = createSelector(
  selectDefaultDictionaryCurrencies,
  data => data && data.length > 0
);

export const selectIsCurrenciesLoading = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_CURRENCIES,
]);

/**
 * Events selectors
 */

export const selectDictionaryEvents = (state: StoreState) =>
  state.administration.dictionaries.events;

export const selectDictionaryEventsOptions = createSelector(
  selectDictionaryEvents,
  data => data && valueLabelParse(data)
);

export const selectIsEventsLoading = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_EVENTS,
]);

/**
 * Event data element selectors
 */

export const selectDefaultDictionaryEventDataElems = (state: StoreState) =>
  state.administration.dictionaries.eventDataElems;

export const selectDictionaryEventDataElems = createSelector(
  selectDefaultDictionaryEventDataElems,
  selectDictionaryEvents,
  (dataElems, events) => dataElems && dataElems.map(item => {
    if (!item) {
      return null;
    }

    const { description, event_id, name, data_type } = item;
    const event = events.find(el => el.id === event_id);
    const dataType = dataTypesOptions.find(el => el.value === data_type);

    return {
      dataType: dataType && dataType.label,
      description,
      event: event && event.name,
      eventId: event_id,
      name,
    };
  })
);

export const selectEventDataElemsForRules = createSelector(
  selectDefaultDictionaryEventDataElems,
  data => data && data.map(el => {
    if (!el) {
      return null;
    }

    const { description, name, data_type } = el;
    const dataType = dataTypesOptions.find(type => type.value === data_type);

    return {
      description: `${dataType && dataType.label} - ${description}`,
      name,
    };
  })
);

export const selectIsEventDataElemsLoading = createLoadingSelector([
  ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS,
]);
