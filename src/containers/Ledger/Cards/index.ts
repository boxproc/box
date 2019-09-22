import { connect } from 'react-redux';

import Cards from './Cards';

import {
  createLoadingSelector,
  LedgerCardsActionTypes,
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

export default connect(
  mapStateToProps
)(Cards);
