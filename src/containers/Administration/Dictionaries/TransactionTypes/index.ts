import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionTypes from './TransactionTypes';

import {
  handleGetDictionaryTransactionTypes,
  selectDictionaryTransTypes,
  selectIsTransTypesLoading,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: selectIsTransTypesLoading(state),
  transactionTypesData: selectDictionaryTransTypes(state),
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
