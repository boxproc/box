import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  ConstsDataActionTypes,
  createLoadingSelector,
  HandleGetCountryCodes,
  handleGetCountryCodes,
  selectCountryCodes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValues } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadCountryCodesProps {
  CountryCodes: Array<SelectValues>;
  isCountryCodesLoading: boolean;
  loadCountryCodes: HandleGetCountryCodes;
}

export const withLoadCountryCodes =
  <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadCountryCodesProps>>
  ) => {
    const WithLoadCountryCodes:
      React.FC<WithLoadCountryCodesProps> = props => {
        const {
          CountryCodes,
          loadCountryCodes,
          isCountryCodesLoading,
          ...originProps
        } = props;
        const isEmpty = CountryCodes.length === 0;

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
            CountryCodes={CountryCodes}
            loadCountryCodes={loadCountryCodes}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadCountryCodes.displayName =
      `WithLoadCountryCodes(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      ConstsDataActionTypes.GET_COUNTRY_CODES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isCountryCodesLoading: loadingSelector(state),
      CountryCodes: selectCountryCodes(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        loadCountryCodes: handleGetCountryCodes,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadCountryCodes);
  };
