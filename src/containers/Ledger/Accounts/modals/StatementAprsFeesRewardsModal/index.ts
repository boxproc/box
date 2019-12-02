import { connect } from 'react-redux';

import StatementAprsFeesRewardsModal from './StatementAprsFeesRewardsModal';

import {
  selectLedgerAccountStatementDate,
  selectLedgerCurrentAccountAlias,
  selectLedgerStatementAprs,
  selectLedgerStatementFees,
  selectLedgerStatementRewards,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  statementAprs: selectLedgerStatementAprs(state),
  statementFees: selectLedgerStatementFees(state),
  statementRewards: selectLedgerStatementRewards(state),
  currentAccountAlias: selectLedgerCurrentAccountAlias(state),
  currentStatementDate: selectLedgerAccountStatementDate(state),
});

export default connect(
  mapStateToProps
)(StatementAprsFeesRewardsModal);
