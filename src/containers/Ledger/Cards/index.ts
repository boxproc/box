import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  createLoadingSelector,
  handleFilterLedgerCards,
  LedgerCardsActionTypes,
  resetCards,
  selectLedgerCards,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerCards: selectLedgerCards(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerCards: handleFilterLedgerCards,
    resetCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
