import { connect } from 'react-redux';

import Cards from './Cards';

import {
  createLoadingSelector,
  handleSetLedgerLedgerCardId,
  LedgerCardsActionTypes,
  selectLedgerCards,
} from 'store/domains';

import { bindActionCreators, Dispatch } from 'redux';
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
    setLedgerCardId: handleSetLedgerLedgerCardId,
  },
  dispatch
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
