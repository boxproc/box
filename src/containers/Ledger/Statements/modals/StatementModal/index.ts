import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementModal from './StatementModal';

import {
  activeItemIdSelector,
  currentStatementSelector,
  handleDownloadStatement,
  handleGetStatementAprLogs,
  handleGetStatementAprs,
  handleGetStatementTransactions,
  isStatementAprLogsLoadingSelector,
  IStoreState,
  isTransArsLoadingSelector,
  statementAprsSelector,
  statementPendingTransactionsSelector,
  statementTransactionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isStatementAprLogsLoading: isStatementAprLogsLoadingSelector(state),
  currentStatement: currentStatementSelector(state),
  currentStatementId: activeItemIdSelector(state),
  isLoading: isTransArsLoadingSelector(state),
  statementAprs: statementAprsSelector(state),
  statementPendingTransactions: statementPendingTransactionsSelector(state),
  statementTransactions: statementTransactionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    downloadStatement: handleDownloadStatement,
    getStatementAprs: handleGetStatementAprs,
    getStatementAprLogs: handleGetStatementAprLogs,
    getStatementTransactions: handleGetStatementTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementModal);
