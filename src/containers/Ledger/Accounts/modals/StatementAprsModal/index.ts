import { connect } from 'react-redux';

import StatementAprsModal from './StatementAprsModal';

import {
  accountStatementDateSelector,
  selectLedgerCurrentAccountAlias,
  statementAprsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  statementAprs: statementAprsSelector(state),
  currentAccountAlias: selectLedgerCurrentAccountAlias(state),
  currentStatementDate: accountStatementDateSelector(state),
});

export default connect(
  mapStateToProps
)(StatementAprsModal);
