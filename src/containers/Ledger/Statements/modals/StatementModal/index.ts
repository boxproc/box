import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementModal from './StatementModal';

import {
  currentStatementSelector,
  handleGenerateStatementTransactionsAprs,
  handleGetStatementAprs,
  handleGetStatementTransactions,
  isTransArsLoadingSelector,
  selectActiveItemId,
  statementAprsSelector,
  statementPendingTransactionsSelector,
  statementTransactionsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentStatement: currentStatementSelector(state),
  currentStatementId: selectActiveItemId(state),
  isLoading: isTransArsLoadingSelector(state),
  statementAprs: statementAprsSelector(state),
  statementPendingTransactions: statementPendingTransactionsSelector(state),
  statementTransactions: statementTransactionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    generateTransactionsAprs: handleGenerateStatementTransactionsAprs,
    getStatementAprs: handleGetStatementAprs,
    getStatementTransactions: handleGetStatementTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementModal);
