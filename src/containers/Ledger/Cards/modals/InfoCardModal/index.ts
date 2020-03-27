import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import InfoCardModal from './InfoCardModal';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleActivateLedgerCard,
  isReadOnlySelector,
  LedgerCardsActionTypes,
  selectCurrentCardStatus,
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
  currentCardId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
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
