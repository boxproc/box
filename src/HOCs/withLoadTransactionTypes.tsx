import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  dictionaryManualTrTypesOptionsSelector,
  dictionaryTransTypesOptionsSelector,
  handleGetDictionaryTransactionTypes,
  IStoreState,
  isTransTypesLoadingSelector,
  THandleGetDictionaryTransactionTypes,
} from 'store';

import { ISelectValue } from 'types';

import { componentUtil } from 'utils';

export interface IWithLoadTransactionTypes {
  getTransactionTypes: THandleGetDictionaryTransactionTypes;
  isTransTypesLoading: boolean;
  manualTransTypesOptions: Array<ISelectValue>;
  transactionTypesOptions: Array<ISelectValue>;
}

export const withLoadTransactionTypes = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<IWithLoadTransactionTypes>>
) => {
  const WithLoadTransactionTypes:
    React.FC<IWithLoadTransactionTypes> = props => {
      const {
        getTransactionTypes,
        isTransTypesLoading,
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
          manualTransTypesOptions={manualTransTypesOptions}
          transactionTypesOptions={transactionTypesOptions}
          {...originProps as OriginProps}
        />
      );
    };

  WithLoadTransactionTypes.displayName =
    `WithLoadTransactionTypes(${componentUtil.getDisplayName(Component)})`;

  const mapStateToProps = (state: IStoreState) => ({
    isTransTypesLoading: isTransTypesLoadingSelector(state),
    transactionTypesOptions: dictionaryTransTypesOptionsSelector(state),
    manualTransTypesOptions: dictionaryManualTrTypesOptionsSelector(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      getTransactionTypes: handleGetDictionaryTransactionTypes,
    },
    dispatch
  );

  return connect<
    Partial<IWithLoadTransactionTypes>,
    Partial<IWithLoadTransactionTypes>,
    any,
    IStoreState
  >(
    mapStateToProps,
    mapDispatchToProps
  )(WithLoadTransactionTypes);
};
