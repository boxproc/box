import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  createLoadingSelector,
  handleGetLedgerAccountCards,
  handleOrderLedgerAccountCard,
  LedgerAccountsActionTypes,
  selectActiveItemId,
  selectLedgerAccountCards,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.GET_LEDGER_ACCOUNT_CARDS,
]);

const orderCardLoadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.ORDER_LEDGER_ACCOUNT_CARD,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isOrderingCard: orderCardLoadingSelector(state),
  accountCurrentId: selectActiveItemId(state),
  accountCards: selectLedgerAccountCards(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAccountCards: handleGetLedgerAccountCards,
    orderAccountCard: handleOrderLedgerAccountCard,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
