import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementModal from './StatementModal';

import {
  createLoadingSelector,
  handleGetLedgerStatementTransactions,
  LedgerStatementsActionTypes,
  selectLedgerCurrentStatement,
  selectLedgerStatementAprs,
  selectLedgerStatementFees,
  selectLedgerStatementRewards,
  selectLedgerStatementTransactions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  statementTransactions: selectLedgerStatementTransactions(state),
  currentStatement: selectLedgerCurrentStatement(state),
  statementAprs: selectLedgerStatementAprs(state),
  statementFees: selectLedgerStatementFees(state),
  statementRewards: selectLedgerStatementRewards(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getStatementTransactions: handleGetLedgerStatementTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementModal);
