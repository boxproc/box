import { connect } from 'react-redux';

import StatementAprsModal from './StatementAprsModal';

import {
  accountStatementDateSelector,
  currentAccAliasSelector,
  statementAprsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  statementAprs: statementAprsSelector(state),
  currentAccAlias: currentAccAliasSelector(state),
  currentStatementDate: accountStatementDateSelector(state),
});

export default connect(
  mapStateToProps
)(StatementAprsModal);
