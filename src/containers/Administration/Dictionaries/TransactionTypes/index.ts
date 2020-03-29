import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionTypes from './TransactionTypes';

import {
  dictionaryTransTypesSelector,
  handleGetDictionaryTransactionTypes,
  isTransTypesLoadingSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
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
