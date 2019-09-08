import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  createLoadingSelector,
  handleGetLedgerAccountCards,
  handleOrderLedgerAccountCard,
  LedgerAccountsActionTypes,
  selectLedgerAccountCards,
  selectLedgerAccountCurrentId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.GET_LEDGER_ACCOUNT_CARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerAccountCurrentId: selectLedgerAccountCurrentId(state),
  ledgerAccountCards: selectLedgerAccountCards(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerAccountCards: handleGetLedgerAccountCards,
    orderLedgerAccountCard: handleOrderLedgerAccountCard,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
