import { connect } from 'react-redux';

import StatementAprsModal from './StatementAprsModal';

import {
  accountStatementDateSelector,
  IStoreState,
  statementAprsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  statementAprs: statementAprsSelector(state),
  currentStatementDate: accountStatementDateSelector(state),
});

export default connect(
  mapStateToProps
)(StatementAprsModal);
