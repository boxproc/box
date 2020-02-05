import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Accounts';

import {
  createLoadingSelector,
  handleAddProductOverride,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerStatements,
  handleFilterByIdLedgerTransactions,
  handleFilterLedgerAccounts,
  handleSetActiveItemId,
  LedgerAccountsActionTypes,
  resetAccounts,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerAccounts,
  selectLedgerCurrentAccountBalanceLimit,
  selectLedgerCurrentAccountBalanceLimitShared,
  selectLedgerCurrentAccountCurrencyCode,
  selectLedgerCurrentAccountHasProductOverride,
  selectLedgerCurrentAccountProductOverrideId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerAccounts: selectLedgerAccounts(state),
  institutionsOptions: selectInstitutionsOptions(state),
  hasProductOverride: selectLedgerCurrentAccountHasProductOverride(state),
  productOverrideId: selectLedgerCurrentAccountProductOverrideId(state),
  currentId: selectActiveItemId(state),
  currentCurrencyCode: selectLedgerCurrentAccountCurrencyCode(state),
  currentAccountBalanceLimit: selectLedgerCurrentAccountBalanceLimit(state),
  currentAccountBalanceLimitShared: selectLedgerCurrentAccountBalanceLimitShared(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerAccounts: handleFilterLedgerAccounts,
    filterLedgerCustomersById: handleFilterByIdLedgerCustomers,
    filterLedgerCardsById: handleFilterByIdLedgerCards,
    filterLedgerTransactionsById: handleFilterByIdLedgerTransactions,
    filterLedgerStatementsById: handleFilterByIdLedgerStatements,
    addProductOverride: handleAddProductOverride,
    setActiveItemId: handleSetActiveItemId,
    resetAccounts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
