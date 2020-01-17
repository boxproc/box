import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  DictionaryCurrenciesActionTypes,
  HandleGetDictionaryCurrencies,
  handleGetDictionaryCurrencies,
  selectCurrencyCodesOptions,
  selectCurrencyNumCodesOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValue } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadCurrencyCodesProps {
  currencyCodes: Array<SelectValue>;
  numCurrencyCodes: Array<SelectValue>;
  isCurrencyCodesLoading: boolean;
  loadCurrencyCodes: HandleGetDictionaryCurrencies;
}

export const withLoadCurrencyCodes =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadCurrencyCodesProps>>
  ) => {
    const WithLoadCurrencyCodes:
      React.FC<WithLoadCurrencyCodesProps> = props => {
        const {
          currencyCodes,
          numCurrencyCodes,
          loadCurrencyCodes,
          isCurrencyCodesLoading,
          ...originProps
        } = props;
        const isEmpty = currencyCodes.length === 0;

        React.useEffect(
          () => {
            if (isEmpty) {
              loadCurrencyCodes();
            }
          },
          [loadCurrencyCodes, isEmpty]
        );

        return (
          <Component
            isCurrencyCodesLoading={isCurrencyCodesLoading}
            currencyCodes={currencyCodes}
            numCurrencyCodes={numCurrencyCodes}
            loadCurrencyCodes={loadCurrencyCodes}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadCurrencyCodes.displayName =
      `WithLoadCurrencyCodes(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      DictionaryCurrenciesActionTypes.GET_DICTIONARY_CURRENCIES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isCurrencyCodesLoading: loadingSelector(state),
      currencyCodes: selectCurrencyCodesOptions(state),
      numCurrencyCodes: selectCurrencyNumCodesOptions(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadCurrencyCodes: handleGetDictionaryCurrencies,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadCurrencyCodes);
  };
