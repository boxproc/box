import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import InfoCardModal from './InfoCardModal';

import {
  activeItemIdSelector,
  currentCardSelector,
  currentCardStatusSelector,
  handleActivateCard,
  isActivatingCardSelector,
  isReadOnlySelector,
  IStoreState,
} from 'store';

const dirty = isDirty(formNamesConst.CHANGE_CARD_STATUS);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  isLoading: isActivatingCardSelector(state),
  currentCard: currentCardSelector(state),
  currentStatus: currentCardStatusSelector(state),
  currentCardId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    activateCard: handleActivateCard,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCardModal);
