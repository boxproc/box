import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  DictionaryActionTypes,
  handleGetDictionaryCurrencies,
  selectCurrencyNumsOptions,
  StoreState,
  THandleGetDictionaryCurrencies,
} from 'store';

import { ISelectValue } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadCurrencyCodesProps {
  currenciesOptions: Array<ISelectValue>;
  isCurrenciesLoading: boolean;
  loadCurrencies: THandleGetDictionaryCurrencies;
}

export const withLoadCurrencyCodes =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadCurrencyCodesProps>>
  ) => {
    const WithLoadCurrencyCodes:
      React.FC<WithLoadCurrencyCodesProps> = props => {
        const {
          currenciesOptions,
          isCurrenciesLoading,
          loadCurrencies,
          ...originProps
        } = props;
        const isEmpty = currenciesOptions && currenciesOptions.length === 0;

        React.useEffect(
          () => {
            if (isEmpty) {
              loadCurrencies();
            }
          },
          [loadCurrencies, isEmpty]
        );

        return (
          <Component
            currenciesOptions={currenciesOptions}
            isCurrenciesLoading={isCurrenciesLoading}
            loadCurrencies={loadCurrencies}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadCurrencyCodes.displayName =
      `WithLoadCurrencyCodes(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      DictionaryActionTypes.GET_DICTIONARY_CURRENCIES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      currenciesOptions: selectCurrencyNumsOptions(state),
      isCurrenciesLoading: loadingSelector(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadCurrencies: handleGetDictionaryCurrencies,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadCurrencyCodes);
  };
