import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementModal from './StatementModal';

import {
  createLoadingSelector,
  handleGenerateStatementTransactionsAprsFeesRewards,
  handleGetLedgerStatementAprsFeesRewards,
  handleGetLedgerStatementTransactions,
  LedgerStatementsActionTypes,
  selectActiveItemId,
  selectLedgerCurrentStatement,
  selectLedgerStatementAprs,
  selectLedgerStatementFees,
  selectLedgerStatementRewards,
  selectLedgerStatementTransactions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_TRANSACTIONS,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_APRS,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_FEES,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_REWARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  statementTransactions: selectLedgerStatementTransactions(state),
  currentStatement: selectLedgerCurrentStatement(state),
  statementAprs: selectLedgerStatementAprs(state),
  statementFees: selectLedgerStatementFees(state),
  statementRewards: selectLedgerStatementRewards(state),
  currentStatementId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getStatementTransactions: handleGetLedgerStatementTransactions,
    getStatementAprsFeesRewards: handleGetLedgerStatementAprsFeesRewards,
    generateTransactionsAprsFeesRewards: handleGenerateStatementTransactionsAprsFeesRewards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementModal);
