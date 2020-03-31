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
  handleFilterByIdCustomers,
  handleFilterByIdStatements,
  handleFilterByIdTransactions,
  handleSetActiveItemId,
  isAccountLoadingSelector,
  isReadOnlySelector,
  IStoreState,
  resetAccounts,
  uiItemsSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
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
  uiItems: uiItemsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAccounts: handleFilterAccounts,
    filterCustomersById: handleFilterByIdCustomers,
    filterCardsById: handleFilterByIdCards,
    filterTransactionsById: handleFilterByIdTransactions,
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
