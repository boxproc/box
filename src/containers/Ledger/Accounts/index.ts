import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Accounts';

import {
  accountsSelector,
  activeItemIdSelector,
  currentAccBalanceLimitSelector,
  currentAccBalanceLimitSharedSelector,
  currentAccCurrencyCodeSelector,
  currentAccHasProductOverrideSelector,
  currentAccProductOverrideIdSelector,
  handleAddProductOverride,
  handleFilterAccounts,
  handleFilterByIdCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterByIdStatements,
  handleSetActiveItemId,
  isAccountLoadingSelector,
  isReadOnlySelector,
  resetAccounts,
  selectUiItems,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isAccountLoadingSelector(state),
  accounts: accountsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  hasProductOverride: currentAccHasProductOverrideSelector(state),
  productOverrideId: currentAccProductOverrideIdSelector(state),
  currentId: activeItemIdSelector(state),
  currentCurrencyCode: currentAccCurrencyCodeSelector(state),
  currentAccBalanceLimit: currentAccBalanceLimitSelector(state),
  currentAccBalanceLimitShared: currentAccBalanceLimitSharedSelector(state),
  isReadOnly: isReadOnlySelector(state),
  uiItems: selectUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAccounts: handleFilterAccounts,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterCardsById: handleFilterByIdCards,
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
