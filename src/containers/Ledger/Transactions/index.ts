import { connect } from 'react-redux';

import Transactions from './Transactions';

import {
  createLoadingSelector,
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

export default connect(
  mapStateToProps
)(Transactions);
