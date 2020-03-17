import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import InfoCardModal from './InfoCardModal';

import {
  createLoadingSelector,
  handleActivateLedgerCard,
  LedgerCardsActionTypes,
  selectActiveItemId,
  selectCurrentCardStatus,
  selectIsReadOnly,
  selectLedgerCardValues,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.ACTIVATE_LEDGER_CARD,
]);

const dirty = isDirty(formNamesConst.CHANGE_CARD_STATUS);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  isLoading: loadingSelector(state),
  currentCard: selectLedgerCardValues(state),
  currentStatus: selectCurrentCardStatus(state),
  currentCardId: selectActiveItemId(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    activateCard: handleActivateLedgerCard,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCardModal);
