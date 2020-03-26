import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Statements from './Statements';

import {
  handleDownloadStatement,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterStatements,
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
    downloadStatement: handleDownloadStatement,
    resetStatements,
    setActiveItemId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statements);
