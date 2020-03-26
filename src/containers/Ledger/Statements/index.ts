import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Statements from './Statements';

import {
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterStatements,
  handleGenerateStatementTransactionsAprs,
  isStatementsLoadingSelector,
  isTransArsLoadingSelector,
  resetStatements,
  selectActiveItemId,
  selectInstitutionsOptions,
  setActiveItemId,
  statementsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentId: selectActiveItemId(state),
  institutionsOptions: selectInstitutionsOptions(state),
  isLoading: isStatementsLoadingSelector(state),
  isLoadingStatement: isTransArsLoadingSelector(state),
  statements: statementsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAccountsById: handleFilterByIdLedgerAccounts,
    filterCardsById: handleFilterByIdLedgerCards,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterStatements: handleFilterStatements,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
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
