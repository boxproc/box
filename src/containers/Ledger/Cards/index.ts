import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  activeItemIdSelector,
  cardsSelector,
  handleFilterByIdAccounts,
  handleFilterByIdCustomers,
  handleFilterByIdStatements,
  handleFilterByIdTransactions,
  handleFilterCards,
  isLoadingCardsSelector,
  resetCards,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isLoadingCardsSelector(state),
  cards: cardsSelector(state),
  currentId: activeItemIdSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCards: handleFilterCards,
    filterAccountsById: handleFilterByIdAccounts,
    filterCustomersById: handleFilterByIdCustomers,
    filterStatementsById: handleFilterByIdStatements,
    filterTransactionsById: handleFilterByIdTransactions,
    resetCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
