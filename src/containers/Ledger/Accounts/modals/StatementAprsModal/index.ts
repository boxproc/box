import { connect } from 'react-redux';

import StatementAprsModal from './StatementAprsModal';

import {
  accountStatementDateSelector,
  currentAccAliasSelector,
  IStoreState,
  statementAprsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  statementAprs: statementAprsSelector(state),
  currentAccAlias: currentAccAliasSelector(state),
  currentStatementDate: accountStatementDateSelector(state),
});

export default connect(
  mapStateToProps
)(StatementAprsModal);
