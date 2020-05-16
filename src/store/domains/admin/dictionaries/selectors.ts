import { createSelector } from 'reselect';

import {
  dataTypesOptions,
  debitCreditIndicatorConst,
  debitCreditIndicatorIds,
  debitCreditIndicatorOptions,
} from 'consts';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { valueLabelParse } from './utils';

import { stringsUtil } from 'utils';

/**
 * Account statuses selectors
 */

export const defaultDictionaryAccountStatusesSelector = (state: IStoreState) =>
  state.admin.dictionaries.accountStatuses;

export const dictionaryAccountStatusesOptionsSelector = createSelector(
  defaultDictionaryAccountStatusesSelector,
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

export const isAccountStatusesLoadedSelector = createSelector(
  defaultDictionaryAccountStatusesSelector,
  data => data && data.length > 0
);

/**
 * Card statuses selectors
 */

export const defaultDictionaryCardStatusesSelector = (state: IStoreState) =>
  state.admin.dictionaries.cardStatuses;

export const cardStatusesOptionsSelector = createSelector(
  defaultDictionaryCardStatusesSelector,
  data => data && valueLabelParse(data)
);

export const isCardStatusesLoadedSelector = createSelector(
  defaultDictionaryCardStatusesSelector,
  data => data && data.length > 0
);

export const isLoadingCardStatusesSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES,
]);

/**
 * Endpoint types selectors
 */

export const defaultDictionaryEndpointTypesSelector = (state: IStoreState) =>
  state.admin.dictionaries.endpointTypes;

export const endpointTypesOptionsSelector = createSelector(
  defaultDictionaryEndpointTypesSelector,
  data => data && valueLabelParse(data)
);

export const isEndpointTypesLoadedSelector = createSelector(
  defaultDictionaryEndpointTypesSelector,
  data => data && data.length > 0
);

export const isLoadingEndpointsTypesSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES,
]);

/**
 * Interface types selectors
 */

export const defaultDictionaryInterfaceTypesSelector = (state: IStoreState) =>
  state.admin.dictionaries.interfaceTypes;

export const interfaceTypesOptionsSelector = createSelector(
  defaultDictionaryInterfaceTypesSelector,
  data => data && valueLabelParse(data)
);

export const isInterfaceTypesLoadedSelector = createSelector(
  defaultDictionaryInterfaceTypesSelector,
  data => data && data.length > 0
);

export const isLoadingInterfacesTypesSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES,
]);

/**
 * Statement cycle types selectors
 */

export const defaultDictionaryStatementCycleTypesSelector = (state: IStoreState) =>
  state.admin.dictionaries.statementCycleTypes;

export const statementCycleTypesOptionsSelector = createSelector(
  defaultDictionaryStatementCycleTypesSelector,
  data => data && valueLabelParse(data)
);

export const isStatementCycleTypesLoadedSelector = createSelector(
  defaultDictionaryStatementCycleTypesSelector,
  data => data && data.length > 0
);

export const isStatementCycleTypesLoading = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES,
]);

/**
 * Repayment types selectors
 */

export const defaultDictionaryRepaymentTypesSelector = (state: IStoreState) =>
  state.admin.dictionaries.repaymentTypes;

export const dictionaryRepaymentTypesOptionsSelector = createSelector(
  defaultDictionaryRepaymentTypesSelector,
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

export const isRepaymentTypesLoadedSelector = createSelector(
  defaultDictionaryRepaymentTypesSelector,
  data => data && data.length > 0
);

/**
 * Transaction types selectors
 */

export const defaultDictionaryTransTypesSelector = (state: IStoreState) =>
  state.admin.dictionaries.transactionTypes;

export const dictionaryTransTypesSelector = createSelector(
  defaultDictionaryTransTypesSelector,
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

export const dictionaryTransTypesOptionsSelector = createSelector(
  dictionaryTransTypesSelector,
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

export const dictionaryManualTrTypesOptionsSelector = createSelector(
  dictionaryTransTypesSelector,
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

export const dictionaryLimitAdjTypesOptionsSelector = createSelector(
  dictionaryTransTypesSelector,
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

export const isTransTypesLoadedSelector = createSelector(
  defaultDictionaryTransTypesSelector,
  data => data && data.length > 0
);

export const transTypesForRulesSelector = createSelector(
  defaultDictionaryTransTypesSelector,
  data => data && data.map(el => {
    if (!el) {
      return null;
    }

    const { description, id } = el;

    return { description, name: id };
  })
);

export const isTransTypesLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES,
]);

/**
 * Countries selectors
 */

export const defaultDictionaryCountriesSelector = (state: IStoreState) =>
  state.admin.dictionaries.countries;

export const dictionaryCountriesSelector = createSelector(
  defaultDictionaryCountriesSelector,
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

export const countriesOptionsSelector = createSelector(
  defaultDictionaryCountriesSelector,
  data => data && data.asMutable().map(el => {
    const { country_code, name } = el;

    return {
      value: country_code,
      label: `${country_code} - ${name}`,
    };
  })
);

export const isCountriesLoadedSelector = createSelector(
  dictionaryCountriesSelector,
  data => data && data.length > 0
);

export const isCountriesLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_COUNTRIES,
]);

/**
 * Currencies selectors
 */

export const defaultDictionaryCurrenciesSelector = (state: IStoreState) =>
  state.admin.dictionaries.currencies;

export const dictionaryCurrenciesSelector = createSelector(
  defaultDictionaryCurrenciesSelector,
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

export const currenciesOptionsSelector = createSelector(
  defaultDictionaryCurrenciesSelector,
  data => {
    const checkedData = data && data.filter(el => Object.keys(el).length !== 0);

    return checkedData && checkedData.asMutable().map(el => {
      if (!el) {
        return null;
      }

      const { currency_code, name } = el;

      return {
        value: currency_code,
        label: `${currency_code} - ${name}`,
      };
    });
  });

export const currencyNumsOptionsSelector = createSelector(
  defaultDictionaryCurrenciesSelector,
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

export const isCurrenciesLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_CURRENCIES,
]);

/**
 * Events selectors
 */

export const dictionaryEventsSelector = (state: IStoreState) =>
  state.admin.dictionaries.events;

export const dictionaryEventsOptionsSelector = createSelector(
  dictionaryEventsSelector,
  data => data && valueLabelParse(data)
);

export const isEventsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_DICTIONARY_EVENTS,
]);

/**
 * Event data element selectors
 */

export const defaultDictionaryEventDataElemsSelector = (state: IStoreState) =>
  state.admin.dictionaries.eventDataElems;

export const dictionaryEventDataElemsSelector = createSelector(
  defaultDictionaryEventDataElemsSelector,
  dictionaryEventsSelector,
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

export const eventDataElemsForRulesSelector = createSelector(
  defaultDictionaryEventDataElemsSelector,
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

export const isEventDataElemsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS,
]);
