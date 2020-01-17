import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  DictionaryCountriesActionTypes,
  HandleGetDictionaryCountries,
  handleGetDictionaryCountries,
  selectCountryCodesOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValue } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadCountryCodesProps {
  countryCodes: Array<SelectValue>;
  isCountryCodesLoading: boolean;
  loadCountryCodes: HandleGetDictionaryCountries;
}

export const withLoadCountryCodes =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadCountryCodesProps>>
  ) => {
    const WithLoadCountryCodes:
      React.FC<WithLoadCountryCodesProps> = props => {
        const {
          countryCodes,
          loadCountryCodes,
          isCountryCodesLoading,
          ...originProps
        } = props;
        const isEmpty = countryCodes.length === 0;

        React.useEffect(
          () => {
            if (isEmpty) {
              loadCountryCodes();
            }
          },
          [loadCountryCodes, isEmpty]
        );

        return (
          <Component
            isCountryCodesLoading={isCountryCodesLoading}
            countryCodes={countryCodes}
            loadCountryCodes={loadCountryCodes}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadCountryCodes.displayName =
      `WithLoadCountryCodes(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      DictionaryCountriesActionTypes.GET_DICTIONARY_COUNTRIES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isCountryCodesLoading: loadingSelector(state),
      countryCodes: selectCountryCodesOptions(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadCountryCodes: handleGetDictionaryCountries,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadCountryCodes);
  };
