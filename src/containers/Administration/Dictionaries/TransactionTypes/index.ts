import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionTypes from './TransactionTypes';

import {
  createLoadingSelector,
  DictionaryTransactionTypesActionTypes,
  handleGetDictionaryTransactionTypes,
  selectDictionaryTransactionTypes,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  DictionaryTransactionTypesActionTypes.GET_DICTIONARY_TRANSACTION_TYPES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  transactionTypes: selectDictionaryTransactionTypes(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getTransactionTypes: handleGetDictionaryTransactionTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionTypes);
