import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatementAprsModal from './StatementAprsModal';

import {
  accountStatementDateSelector,
  currentAccAliasSelector,
  handleGetStatementAprLogs,
  isStatementAprLogsLoadingSelector,
  IStoreState,
  statementAprsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isStatementAprLogsLoading: isStatementAprLogsLoadingSelector(state),
  statementAprs: statementAprsSelector(state),
  currentAccAlias: currentAccAliasSelector(state),
  currentStatementDate: accountStatementDateSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getStatementAprLogs: handleGetStatementAprLogs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementAprsModal);
