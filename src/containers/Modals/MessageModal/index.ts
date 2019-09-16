import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import MessageModal from './MessageModal';

import {
  closeAllModals,
  closeModal,
  selectPayloadMessageModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  payloadMessageModal: selectPayloadMessageModal(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    closeAllModals,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal));
