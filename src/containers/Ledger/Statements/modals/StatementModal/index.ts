import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementModal from './StatementModal';

import {
  createLoadingSelector,
  handleGenerateStatementTransactionsAprs,
  handleGetLedgerStatementAprs,
  handleGetLedgerStatementTransactions,
  LedgerStatementsActionTypes,
  selectActiveItemId,
  selectLedgerCurrentStatement,
  selectLedgerStatementAprs,
  selectLedgerStatementTransactions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_TRANSACTIONS,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_APRS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  statementTransactions: selectLedgerStatementTransactions(state),
  currentStatement: selectLedgerCurrentStatement(state),
  statementAprs: selectLedgerStatementAprs(state),
  currentStatementId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getStatementTransactions: handleGetLedgerStatementTransactions,
    getStatementAprs: handleGetLedgerStatementAprs,
    generateTransactionsAprs: handleGenerateStatementTransactionsAprs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementModal);
