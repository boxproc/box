import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionTypes from './TransactionTypes';

import {
  dictionaryTransTypesSelector,
  handleGetDictionaryTransactionTypes,
  IStoreState,
  isTransTypesLoadingSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isTransTypesLoadingSelector(state),
  transactionTypesData: dictionaryTransTypesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getTransactionTypesData: handleGetDictionaryTransactionTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionTypes);
