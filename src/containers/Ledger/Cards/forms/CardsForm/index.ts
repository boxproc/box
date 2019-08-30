import { connect } from 'react-redux';

import InfoCardModal from './CardForm';

import {
  createLoadingSelector,
  LedgerCardsActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.ACTIVATE_LEDGER_CARD,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

export default connect(
  mapStateToProps
)(InfoCardModal);
