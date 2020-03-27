import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementModal from './StatementModal';

import {
  activeItemIdSelector,
  currentStatementSelector,
  handleDownloadStatement,
  handleGetStatementAprs,
  handleGetStatementTransactions,
  isTransArsLoadingSelector,
  statementAprsSelector,
  statementPendingTransactionsSelector,
  statementTransactionsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentStatement: currentStatementSelector(state),
  currentStatementId: activeItemIdSelector(state),
  isLoading: isTransArsLoadingSelector(state),
  statementAprs: statementAprsSelector(state),
  statementPendingTransactions: statementPendingTransactionsSelector(state),
  statementTransactions: statementTransactionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    generateTransactionsAprs: handleDownloadStatement,
    getStatementAprs: handleGetStatementAprs,
    getStatementTransactions: handleGetStatementTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementModal);
