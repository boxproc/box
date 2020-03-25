import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  DictionaryActionTypes,
  handleGetDictionaryTransactionTypes,
  selectDictionaryLimitAdjTypesOptions,
  selectDictionaryManualTrTypesOptions,
  selectDictionaryTransTypesOptions,
  StoreState,
  THandleGetDictionaryTransactionTypes,
} from 'store';

import { ISelectValue } from 'types';

import { componentUtil } from 'utils';

export interface WithLoadTransactionTypesProps {
  getTransactionTypes: THandleGetDictionaryTransactionTypes;
  isTransTypesLoading: boolean;
  limitAdjTypeOptions: Array<ISelectValue>;
  manualTransTypesOptions: Array<ISelectValue>;
  transactionTypesOptions: Array<ISelectValue>;
}

export const withLoadTransactionTypes = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithLoadTransactionTypesProps>>
) => {
  const WithLoadTransactionTypes:
    React.FC<WithLoadTransactionTypesProps> = props => {
      const {
        getTransactionTypes,
        isTransTypesLoading,
        limitAdjTypeOptions,
        manualTransTypesOptions,
        transactionTypesOptions,
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
          getTransactionTypes={getTransactionTypes}
          isTransTypesLoading={isTransTypesLoading}
          limitAdjTypeOptions={limitAdjTypeOptions}
          manualTransTypesOptions={manualTransTypesOptions}
          transactionTypesOptions={transactionTypesOptions}
          {...originProps as OriginProps}
        />
      );
    };

  WithLoadTransactionTypes.displayName =
    `WithLoadTransactionTypes(${componentUtil.getDisplayName(Component)})`;

  const loadingSelector = createLoadingSelector([
    DictionaryActionTypes.GET_DICTIONARY_TRANSACTION_TYPES,
  ]);

  const mapStateToProps = (state: StoreState) => ({
    isTransTypesLoading: loadingSelector(state),
    transactionTypesOptions: selectDictionaryTransTypesOptions(state),
    manualTransTypesOptions: selectDictionaryManualTrTypesOptions(state),
    limitAdjTypeOptions:
      selectDictionaryLimitAdjTypesOptions(state),
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
