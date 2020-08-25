import { connect } from 'react-redux';

import StatementAprLogsModal from './StatementAprLogsModal';

import {
  IStoreState,
  statementAprLogsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  statementAprLogs: statementAprLogsSelector(state),
});

export default connect(
  mapStateToProps
)(StatementAprLogsModal);
