import { connect } from 'react-redux';

import StatementAprsModal from './StatementAprsModal';

import {
  selectLedgerAccountStatementDate,
  selectLedgerCurrentAccountAlias,
  selectLedgerStatementAprs,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  statementAprs: selectLedgerStatementAprs(state),
  currentAccountAlias: selectLedgerCurrentAccountAlias(state),
  currentStatementDate: selectLedgerAccountStatementDate(state),
});

export default connect(
  mapStateToProps
)(StatementAprsModal);
