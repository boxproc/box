import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Transactions from './Transactions';

import {
  activeItemIdSelector,
  handleFilterByIdAccounts,
  handleFilterByIdCards,
  handleFilterByIdCustomers,
  handleFilterByIdStatements,
  handleFilterTransactions,
  isLoadingTransactionsSelector,
  isSettledTrSelector,
  IStoreState,
  isTrConvertibleToLoanSelector,
  resetTransactions,
  transactionsSelector,
  uiItemsSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingTransactionsSelector(state),
  transactions: transactionsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  currentId: activeItemIdSelector(state),
  isConvertibleToLoan: isTrConvertibleToLoanSelector(state),
  isSettledTr: isSettledTrSelector(state),
  uiItems: uiItemsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterTransactions: handleFilterTransactions,
    filterCardsById: handleFilterByIdCards,
    filterStatementsById: handleFilterByIdStatements,
    filterCustomersById: handleFilterByIdCustomers,
    filterAccountsById: handleFilterByIdAccounts,
    resetTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
