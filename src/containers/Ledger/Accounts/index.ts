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
  selectIsReadOnly,
  selectLedgerAccounts,
  selectLedgerCurrentAccountBalanceLimit,
  selectLedgerCurrentAccountBalanceLimitShared,
  selectLedgerCurrentAccountCurrencyCode,
  selectLedgerCurrentAccountHasProductOverride,
  selectLedgerCurrentAccountProductOverrideId,
  selectUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accounts: selectLedgerAccounts(state),
  institutionsOptions: selectInstitutionsOptions(state),
  hasProductOverride: selectLedgerCurrentAccountHasProductOverride(state),
  productOverrideId: selectLedgerCurrentAccountProductOverrideId(state),
  currentId: selectActiveItemId(state),
  currentCurrencyCode: selectLedgerCurrentAccountCurrencyCode(state),
  currentAccountBalanceLimit: selectLedgerCurrentAccountBalanceLimit(state),
  currentAccountBalanceLimitShared: selectLedgerCurrentAccountBalanceLimitShared(state),
  isReadOnly: selectIsReadOnly(state),
  uiItems: selectUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAccounts: handleFilterLedgerAccounts,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterCardsById: handleFilterByIdLedgerCards,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    filterStatementsById: handleFilterByIdLedgerStatements,
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
