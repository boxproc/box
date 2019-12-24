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
  handleGetLedgerStatementAprsFeesRewards,
  handleGetLedgerStatementTransactions,
  LedgerAccountsActionTypes,
  LedgerCardsActionTypes,
  LedgerCustomersActionTypes,
  LedgerStatementsActionTypes,
  LedgerTransactionsActionTypes,
  resetStatements,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerCurrentStatement,
  selectLedgerStatementAprs,
  selectLedgerStatementFees,
  selectLedgerStatementRewards,
  selectLedgerStatements,
  selectLedgerStatementTransactions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS,
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS_BY_ID,
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS_BY_ID,
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS_BY_ID,
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  statements: selectLedgerStatements(state),
  statementTransactions: selectLedgerStatementTransactions(state),
  statementAprs: selectLedgerStatementAprs(state),
  statementFees: selectLedgerStatementFees(state),
  statementRewards: selectLedgerStatementRewards(state),
  currentStatement: selectLedgerCurrentStatement(state),
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
    getStatementTransactions: handleGetLedgerStatementTransactions,
    getLedgerStatementAprsFeesRewards: handleGetLedgerStatementAprsFeesRewards,
    resetStatements,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statements);
