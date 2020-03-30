import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Statements from './Statements';

import {
  activeItemIdSelector,
  handleDownloadStatement,
  handleFilterByIdAccounts,
  handleFilterByIdCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterStatements,
  isStatementsLoadingSelector,
  isTransArsLoadingSelector,
  resetStatements,
  setActiveItemId,
  statementsSelector,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentId: activeItemIdSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isLoading: isStatementsLoadingSelector(state),
  isLoadingStatement: isTransArsLoadingSelector(state),
  statements: statementsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAccountsById: handleFilterByIdAccounts,
    filterCardsById: handleFilterByIdCards,
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
