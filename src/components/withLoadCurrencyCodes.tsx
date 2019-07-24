import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  ConstsDataActionTypes,
  createLoadingSelector,
  HandleGetCurrencyCodes,
  handleGetCurrencyCodes,
  selectCurrencyCodes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValues } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadCurrencyCodesProps {
  currencyCodes: Array<SelectValues>;
  isCurrencyCodesLoading: boolean;
  loadCurrencyCodes: HandleGetCurrencyCodes;
}

export const withLoadCurrencyCodes =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadCurrencyCodesProps>>
  ) => {
    const WithLoadCurrencyCodes:
      React.FC<WithLoadCurrencyCodesProps> = props => {
        const {
          currencyCodes,
          loadCurrencyCodes,
          isCurrencyCodesLoading,
          ...originProps
        } = props;
        const isEmpty = currencyCodes.length === 0;

        React.useEffect(
          () => {
            if (!isCurrencyCodesLoading && isEmpty) {
              loadCurrencyCodes();
            }
          },
          [loadCurrencyCodes, isEmpty, isCurrencyCodesLoading]
        );

        return (
          <Component
            isCurrencyCodesLoading={isCurrencyCodesLoading}
            currencyCodes={currencyCodes}
            loadCurrencyCodes={loadCurrencyCodes}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadCurrencyCodes.displayName =
      `WithLoadCurrencyCodes(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      ConstsDataActionTypes.GET_CURRENCY_CODES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isCurrencyCodesLoading: loadingSelector(state),
      currencyCodes: selectCurrencyCodes(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadCurrencyCodes: handleGetCurrencyCodes,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadCurrencyCodes);
  };
