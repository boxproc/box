import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TransactionsTable from './TransactionsTable';

import {
  createLoadingSelector,
  handleGetLedgerStatementTransactions,
  LedgerStatementsActionTypes,
  selectLedgerStatementTransactions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerStatementTransactions: selectLedgerStatementTransactions(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerStatementTransactions: handleGetLedgerStatementTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsTable);
