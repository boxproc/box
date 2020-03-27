import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Accounts';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleAddProductOverride,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterByIdStatements,
  handleFilterLedgerAccounts,
  handleSetActiveItemId,
  isReadOnlySelector,
  LedgerAccountsActionTypes,
  resetAccounts,
  selectInstitutionsOptions,
  selectLedgerAccounts,
  selectLedgerCurrentAccountBalanceLimit,
  selectLedgerCurrentAccountBalanceLimitShared,
  selectLedgerCurrentAccountCurrencyCode,
  selectLedgerCurrentAccountHasProductOverride,
  selectLedgerCurrentAccountProductOverrideId,
  selectUiItems,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accounts: selectLedgerAccounts(state),
  institutionsOptions: selectInstitutionsOptions(state),
  hasProductOverride: selectLedgerCurrentAccountHasProductOverride(state),
  productOverrideId: selectLedgerCurrentAccountProductOverrideId(state),
  currentId: activeItemIdSelector(state),
  currentCurrencyCode: selectLedgerCurrentAccountCurrencyCode(state),
  currentAccountBalanceLimit: selectLedgerCurrentAccountBalanceLimit(state),
  currentAccountBalanceLimitShared: selectLedgerCurrentAccountBalanceLimitShared(state),
  isReadOnly: isReadOnlySelector(state),
  uiItems: selectUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAccounts: handleFilterLedgerAccounts,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterCardsById: handleFilterByIdLedgerCards,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    filterStatementsById: handleFilterByIdStatements,
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
