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
  LedgerStatementsActionTypes,
  resetStatements,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerStatements,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerStatements: selectLedgerStatements(state),
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
    resetStatements,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statements);
