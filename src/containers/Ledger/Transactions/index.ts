import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Transactions from './Transactions';

import {
  createLoadingSelector,
  handleSetLedgerTransactionId,
  LedgerTransactionsActionTypes,
  selectLedgerTransactions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerTransactions: selectLedgerTransactions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setLedgerTransactionId: handleSetLedgerTransactionId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
