import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Statements from './Statements';

import {
  createLoadingSelector,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterLedgerStatements,
  handleGenerateStatementTransactionsAprs,
  LedgerStatementsActionTypes,
  resetStatements,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerStatements,
  setActiveItemId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS,
]);

const loadingStatementSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_TRANSACTIONS,
  LedgerStatementsActionTypes.GET_LEDGER_STATEMENT_APRS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingStatement: loadingStatementSelector(state),
  statements: selectLedgerStatements(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerStatements: handleFilterLedgerStatements,
    filterLedgerCardsById: handleFilterByIdLedgerCards,
    filterLedgerTransactionsById: handleFilterByIdLedgerTransactions,
    filterLedgerCustomersById: handleFilterByIdLedgerCustomers,
    filterLedgerAccountsById: handleFilterByIdLedgerAccounts,
    generateTransactionsAprsFeesRewards: handleGenerateStatementTransactionsAprs,
    resetStatements,
    setActiveItemId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statements);
