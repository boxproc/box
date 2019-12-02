import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AccountStatements from './AccountStatements';

import {
  createLoadingSelector,
  handleGetLedgerAccountStatements,
  handleGetLedgerStatementAprsFeesRewards,
  LedgerStatementsActionTypes,
  selectActiveItemId,
  selectLedgerAccountStatements,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_ACCOUNT_STATEMENTS,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_APRS,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_FEES,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_REWARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accountCurrentId: selectActiveItemId(state),
  accountStatements: selectLedgerAccountStatements(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerAccountStatements: handleGetLedgerAccountStatements,
    getLedgerStatementAprsFeesRewards: handleGetLedgerStatementAprsFeesRewards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountStatements);
