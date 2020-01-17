import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  DictionaryTransactionTypesActionTypes,
  handleGetDictionaryTransactionTypes,
  HandleGetDictionaryTransactionTypes,
  selectDictionaryLimitAdjustmentTypesOptions,
  selectDictionaryManualTransactionTypesOptions,
  selectDictionaryTransactionTypesOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { SelectValue } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadTransactionTypesProps {
  transactionTypesOptions: Array<SelectValue>;
  manualTransactionTypesOptions: Array<SelectValue>;
  limitAdjustmentTypeOptions: Array<SelectValue>;
  isTransactionTypesLoading: boolean;
  getTransactionTypes: HandleGetDictionaryTransactionTypes;
}

export const withLoadTransactionTypes = <OriginProps extends {}>(
    Component: React.ComponentType<OriginProps & Partial<WithLoadTransactionTypesProps>>
  ) => {
    const WithLoadTransactionTypes:
      React.FC<WithLoadTransactionTypesProps> = props => {
        const {
          transactionTypesOptions,
          manualTransactionTypesOptions,
          limitAdjustmentTypeOptions,
          getTransactionTypes,
          isTransactionTypesLoading,
          ...originProps
        } = props;
        const isEmpty = transactionTypesOptions.length === 0;

        React.useEffect(
          () => {
            if (isEmpty) {
              getTransactionTypes();
            }
          },
          [getTransactionTypes, isEmpty]
        );

        return (
          <Component
            isTransactionTypesLoading={isTransactionTypesLoading}
            transactionTypesOptions={transactionTypesOptions}
            manualTransactionTypesOptions={manualTransactionTypesOptions}
            limitAdjustmentTypeOptions={limitAdjustmentTypeOptions}
            getTransactionTypes={getTransactionTypes}
            {...originProps as OriginProps}
          />
        );
      };

    WithLoadTransactionTypes.displayName =
      `WithLoadTransactionTypes(${componentUtil.getDisplayName(Component)})`;

    const loadingSelector = createLoadingSelector([
      DictionaryTransactionTypesActionTypes.GET_DICTIONARY_TRANSACTION_TYPES,
    ]);

    const mapStateToProps = (state: StoreState) => ({
      isTransactionTypesLoading: loadingSelector(state),
      transactionTypesOptions: selectDictionaryTransactionTypesOptions(state),
      manualTransactionTypesOptions: selectDictionaryManualTransactionTypesOptions(state),
      limitAdjustmentTypeOptions:
      selectDictionaryLimitAdjustmentTypesOptions(state),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
      {
        getTransactionTypes: handleGetDictionaryTransactionTypes,
      },
      dispatch
    );

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithLoadTransactionTypes);
  };
