import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ConfirmationModal from './ConfirmationModal';

import {
  closeModal,
  selectPayloadConfirmationModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  payloadConfirmModal: selectPayloadConfirmationModal(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationModal);