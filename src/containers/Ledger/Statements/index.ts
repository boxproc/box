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
  LedgerAccountsActionTypes,
  LedgerCardsActionTypes,
  LedgerCustomersActionTypes,
  LedgerStatementsActionTypes,
  LedgerTransactionsActionTypes,
  resetStatements,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerStatements,
  setActiveItemId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS,
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS_BY_ID,
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS_BY_ID,
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS_BY_ID,
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS_BY_ID,
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
